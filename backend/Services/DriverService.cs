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

        public Task<AuthenticateResponse?> RegisterAsync(UserRegisterRequestModel model)
        {
            model.Role = UserRole.Driver;
            model.DriverState = DriverState.Available;
            return authService.RegisterAsync(model);
        }

        public Task<User> AddAsync(UserRegisterRequestModel model)
        {
            model.Role = UserRole.Driver;
            model.DriverState = DriverState.Available;
            return authService.AddAsync(model);
        }

        public override async Task<bool> DeleteAsync(int id)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching driver record found for the id {id}");
            return await base.DeleteAsync(id);
        }

        public async Task<User> UpdateAsync(int id, UserRegisterRequestModel model)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching driver record found for the id {id}");
            return await authService.UpdateAsync(id, model);
        }

        public override async Task<IEnumerable<User>> GetAllAsync()
        {
            return await dbContext.Users
                .Where(x => x.Role == UserRole.Driver)
                .ToListAsync();
        }

        public override async Task<User?> GetAsync(int id)
        {
            return await dbContext.Users
                .FirstOrDefaultAsync(x => x.Id == id
                    && x.Role == UserRole.Driver);
        }

        public async Task<User> UpdateStateAsync(int id, DriverState state)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            existingRecord.DriverState = state;
            await dbContext.SaveChangesAsync();
            return existingRecord;
        }

        public async Task<User?> GetByMobileAsync(string mobileNo)
        {
            var user = await authService.GetByMobileAsync(mobileNo);
            return user?.Role == UserRole.Driver ? user : null;
        }

    }
}