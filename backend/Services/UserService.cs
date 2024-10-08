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
    public class UserService : AbstractRepositoryService<User>, IUserService
    {
        private readonly IAuthService authService;
        private readonly AppDbContext dbContext;

        public UserService(
            IAuthService authService,
            AppDbContext dbContext
        ) : base (dbContext)
        {
            this.authService = authService;
            this.dbContext = dbContext;
        }

        public Task<AuthenticateResponse?> LoginAsync(LoginRequest model)
        {
            model.Role = UserRole.User;
            return authService.LoginAsync(model);
        }

        public Task<AuthenticateResponse?> RegisterAsync(UserRegisterRequestModel model)
        {
            model.Role = UserRole.User;
            return authService.RegisterAsync(model);
        }

        public Task<User> AddAsync(UserRegisterRequestModel model)
        {
            model.Role = UserRole.User;
            return authService.AddAsync(model);
        }

        public override async Task<bool> DeleteAsync(int id)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching user record found for the id {id}");
            return await base.DeleteAsync(id);
        }

        public async Task<User> UpdateAsync(int id, UserRegisterRequestModel model)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching user record found for the id {id}");
            return await authService.UpdateAsync(id, model);
        }

        public Task<AuthenticateResponse?> RegisterGuestAsync(UserRegisterRequestModel model)
        {
            model.Role = UserRole.Guest;
            return authService.RegisterAsync(model);
        }

        public override async Task<IEnumerable<User>> GetAllAsync()
        {
            return await dbContext.Users
                .Where(x => x.Role == UserRole.Guest || x.Role == UserRole.User)
                .ToListAsync();
        }

        public override async Task<User?> GetAsync(int id)
        {
            return await dbContext.Users
                .FirstOrDefaultAsync(x => (x.Role == UserRole.Guest || x.Role == UserRole.User)
                    && x.Id == id);
        }

        public async Task<User?> GetByMobileAsync(string mobileNo)
        {
            var user = await authService.GetByMobileAsync(mobileNo);
            return (user?.Role == UserRole.Guest || user?.Role == UserRole.User) ? user : null;
        }

        public Task<AuthenticateResponse?> LoginGuestAsync(LoginRequest model)
        {
            throw new NotImplementedException();
        }
    }
}
