using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Services
{
    public interface IUserService : IRepositoryService<User>, IAuthMgtService
    {
        Task<AuthenticateResponse?> RegisterGuestAsync(UserRegisterRequest model);
    }
}
