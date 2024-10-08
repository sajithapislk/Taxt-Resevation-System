using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Services
{
    public interface IAuthMgtService : ICrudService<User, UserRegisterRequestModel>
    {
        Task<AuthenticateResponse?> RegisterAsync(UserRegisterRequestModel model);
        Task<AuthenticateResponse?> LoginAsync(LoginRequest model);
        Task<User?> GetByMobileAsync(string mobileNo);
    }
}
