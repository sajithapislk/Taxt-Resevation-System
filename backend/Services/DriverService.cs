using backend.Schema.Enum;
using backend.Schema.Model;

namespace backend.Services
{
    public class DriverService : IDriverService
    {
        private readonly IAuthService authService;

        public DriverService(
            IAuthService authService
        )
        {
            this.authService = authService;
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
    }
}
