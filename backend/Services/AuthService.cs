using backend.Helpers;
using backend.Schema;
using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace backend.Services
{
    public class AuthService : IAuthService
    {
        private readonly AppSettings appSettings;
        private readonly AppDbContext dbContext;
        private readonly IExternalService externalService;

        public AuthService(
            IOptions<AppSettings> appSettings,
            AppDbContext dbContext,
            IExternalService externalService
        )
        {
            this.appSettings = appSettings.Value;
            this.dbContext = dbContext;
            this.externalService = externalService;
        }

        public async Task<AuthenticateResponse?> RegisterAsync(UserRegisterRequest model)
        {
            var user = new User
            {
                Role = model.Role ?? UserRole.Guest,
                Email = model.Email?.ToLower(),
                Name = model.Name,
                MobileNo = model.MobileNo,
                Password = model.Password != null ? PasswordHasher.HashPassword(model.Password) : null,
                DriverState = model.DriverState,
            };

            await dbContext.Users.AddAsync(user);
            await dbContext.SaveChangesAsync();

            if (model.Email != null)
            {
                var username = $"{EmailValidator.ExtractEmailId(model.Email)}_{user.Id}";
                user.Username = username;
                await dbContext.SaveChangesAsync();
                await externalService.SendRegistrationEmailAsync(model);
            }

            if (model.MobileNo != null)
            {
                await externalService.SendRegistrationSmsAsync(model);
            }

            var token = await GenerateJwtToken(user);
            return new AuthenticateResponse(user, token);
        }

        public async Task<AuthenticateResponse?> LoginAsync(LoginRequest model)
        {
            var user = await dbContext.Users
                .SingleOrDefaultAsync(x => x.Email == model.Email 
                    && x.Role == model.Role);

            // return null if user not found or not registered
            if (user == null)
            {
                return null;
            }

            if (!PasswordHasher.VerifyPassword(user.Password, model.Password))
            {
                return null;
            }

            // authentication successful so generate jwt token
            var token = await GenerateJwtToken(user);
            return new AuthenticateResponse(user, token);
        }

        public async Task<bool> IsEmailRegistered(string email)
        {
            var existingRecord = await dbContext.Users
                .Select(x => x.Email)
                .FirstOrDefaultAsync(x => email.Equals(x));

            return existingRecord != null;
        }

        public async Task<bool> IsUsernameTaken(string username)
        {
            var existingRecord = await dbContext.Users
                .Select(x => x.Username)
                .FirstOrDefaultAsync(x => username.Equals(x));

            return existingRecord != null;
        }

        public async Task<bool> IsMobileNoRegistered(string mobileNo)
        {
            var existingRecord = await dbContext.Users
                .Select(x => x.Username)
                .FirstOrDefaultAsync(x => mobileNo.Equals(x));

            return existingRecord != null;
        }

        public async Task<User?> GetUserById(int id)
        {
            return await dbContext.Users
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        // helper methods
        private async Task<string> GenerateJwtToken(User user)
        {
            //Generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = await Task.Run(() =>
            {

                var key = Encoding.ASCII.GetBytes(appSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                return tokenHandler.CreateToken(tokenDescriptor);
            });

            return tokenHandler.WriteToken(token);
        }

    }
}
