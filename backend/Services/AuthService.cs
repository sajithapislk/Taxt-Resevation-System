using backend.Helpers;
using backend.Schema;
using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using NetTopologySuite.Geometries;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace backend.Services
{
    public class AuthService : AbstractRepositoryService<User>, IAuthService
    {
        private readonly AppSettings appSettings;
        private readonly AppDbContext dbContext;
        private readonly INotificationService notificationService;

        public AuthService(
            IOptions<AppSettings> appSettings,
            AppDbContext dbContext,
            INotificationService notificationService
        ) : base(dbContext)
        {
            this.appSettings = appSettings.Value;
            this.dbContext = dbContext;
            this.notificationService = notificationService;
        }

        public async Task<AuthenticateResponse?> RegisterAsync(UserRegisterRequestModel model)
        {

            try
            {
                await dbContext.Database.BeginTransactionAsync();

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
                    user.Username = model.Username = username;
                    await dbContext.SaveChangesAsync();
                    await notificationService.SendRegistrationCompletedEmailAsync(model);
                }

                if (model.MobileNo != null)
                {
                    await notificationService.SendRegistrationSmsAsync(model);
                }

                var token = await GenerateJwtToken(user);

                await dbContext.Database.CommitTransactionAsync();
                return new AuthenticateResponse(user, token);
            }
            catch (Exception)
            {
                await dbContext.Database.RollbackTransactionAsync();
                throw;
            }
        }

        public async Task<AuthenticateResponse?> LoginAsync(LoginRequest model)
        {
            var user = await dbContext.Users
                .FirstOrDefaultAsync(x => x.Email == model.Email 
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

        public async Task<User> AddAsync(UserRegisterRequestModel model)
        {
            throw new NotImplementedException();
        }

        public async Task<User> UpdateAsync(int id, UserRegisterRequestModel model)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            //existingRecord.Role = model.Role;
            //existingRecord.Email = model.Email;
            //existingRecord.Username = model.Username;
            //if (!string.IsNullOrWhiteSpace(model.Password))
            //{
            //    existingRecord.Password = PasswordHasher.HashPassword(model.Password);
            //}
            existingRecord.Name = model.Name;
            existingRecord.MobileNo = model.MobileNo;
            existingRecord.Image = model.Image;
            existingRecord.Website = model.Website;
            existingRecord.DateOfBirth = model.DateOfBirth;
            existingRecord.Gender = model.Gender;
            existingRecord.Status = model.Status;
            existingRecord.Description = model.Description;
            //existingRecord.Location = new Point(model.Location.Longitude, model.Location.Latitude) { SRID = 4326 }; ;
            //existingRecord.Place = model.Location.Location;
            //existingRecord.DriverState = model.DriverState;

            await dbContext.SaveChangesAsync();
            return existingRecord;
        }

        public async Task<bool> IsEmailRegistered(string email)
        {
            var existingRecord = await dbContext.Users
                .Select(x => x.Email)
                .FirstOrDefaultAsync(x => email.Equals(x));

            return existingRecord != null;
        }

        public async Task<bool> IsEmailRegistered(int id, string email)
        {
            return await dbContext.Users
                .AnyAsync(x => x.Id != id && x.Email == email);
        }

        public async Task<bool> IsUsernameRegistered(string username)
        {
            var existingRecord = await dbContext.Users
                .Select(x => x.Username)
                .FirstOrDefaultAsync(x => username.Equals(x));

            return existingRecord != null;
        }

        public async Task<bool> IsUsernameRegistered(int id, string username)
        {
            return await dbContext.Users
                .AnyAsync(x => x.Id != id && x.Username == username);
        }

        public async Task<bool> IsMobileNoRegistered(string mobileNo)
        {
            var existingRecord = await dbContext.Users
                .Select(x => x.MobileNo)
                .FirstOrDefaultAsync(x => mobileNo.Equals(x));

            return existingRecord != null;
        }

        public async Task<bool> IsMobileNoRegistered(int id, string mobileNo)
        {
            return await dbContext.Users
                .AnyAsync(x => x.Id != id && x.MobileNo == mobileNo);
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

        public async Task<User?> GetByMobileAsync(string mobileNo)
        {
            return await dbContext.Users
                .FirstOrDefaultAsync(x => x.MobileNo == mobileNo);
        }
    }
}
