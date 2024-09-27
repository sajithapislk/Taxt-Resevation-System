using backend.Schema.Model;

namespace backend.Services
{
    public interface IAuthMgtService
    {
        Task<AuthenticateResponse?> RegisterAsync(UserRegisterRequest model);
        Task<AuthenticateResponse?> LoginAsync(LoginRequest model);
    }
}
