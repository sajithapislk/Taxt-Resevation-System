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

        public Task<AuthenticateResponse?> RegisterAsync(UserRegisterRequest model)
        {
            model.Role = UserRole.User;
            return authService.RegisterAsync(model);
        }

        public Task<AuthenticateResponse?> RegisterGuestAsync(UserRegisterRequest model)
        {
            model.Role = UserRole.Guest;
            return authService.RegisterAsync(model);
        }

        public override async Task<User?> GetAsync(int id)
        {
            return await dbContext.Users
                .FirstOrDefaultAsync(x => (x.Role == UserRole.Guest || x.Role == UserRole.User)
                    && x.Id == id);
        }
    }
}
