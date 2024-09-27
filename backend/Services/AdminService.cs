using backend.Schema.Enum;
using backend.Schema.Model;

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

        public Task<AuthenticateResponse?> RegisterAsync(UserRegisterRequest model)
        {
            model.Role = UserRole.Admin;
            return authService.RegisterAsync(model);
        }
    }
}
