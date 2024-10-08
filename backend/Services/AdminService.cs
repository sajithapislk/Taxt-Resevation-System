using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class AdminService : IAdminService
    {
        private readonly IAuthService authService;

        public AdminService(
            IAuthService authService
        )
        {
            this.authService = authService;
        }

        public Task<AuthenticateResponse?> LoginAsync(LoginRequest model)
        {
            model.Role = UserRole.Admin;
            return authService.LoginAsync(model);
        }

        public Task<AuthenticateResponse?> RegisterAsync(UserRegisterRequestModel model)
        {
            model.Role = UserRole.Admin;
            return authService.RegisterAsync(model);
        }

        public Task<User> AddAsync(UserRegisterRequestModel model)
        {
            model.Role = UserRole.Admin;
            return authService.AddAsync(model);
        }

        public Task<User> UpdateAsync(int id, UserRegisterRequestModel model)
        {
            return authService.UpdateAsync(id, model);
        }

        public async Task<User?> GetByMobileAsync(string mobileNo)
        {
            var user = await authService.GetByMobileAsync(mobileNo);
            return user?.Role == UserRole.Admin ? user : null;
        }
    }
}
