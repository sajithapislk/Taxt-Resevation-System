using backend.Schema;
using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class DriverService : AbstractRepositoryService<User>, IDriverService
    {
        private readonly IAuthService authService;
        private readonly AppDbContext dbContext;

        public DriverService(
            IAuthService authService,
            AppDbContext dbContext
        ) : base(dbContext)
        {
            this.authService = authService;
            this.dbContext = dbContext;
        }

        public Task<AuthenticateResponse?> LoginAsync(LoginRequest model)
        {
            model.Role = UserRole.Driver;
            return authService.LoginAsync(model);
        }

        public Task<AuthenticateResponse?> RegisterAsync(UserRegisterRequest model)
        {
            model.Role = UserRole.Driver;
            return authService.RegisterAsync(model);
        }

        public override async Task<User?> GetAsync(int id)
        {
            return await dbContext.Users
                .FirstOrDefaultAsync(x => x.Id == id
                    && x.Role == UserRole.Driver);
        }
    }
}
