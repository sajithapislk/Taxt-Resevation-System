using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Services
{
    public interface IAuthService : IAuthMgtService
    {
        Task<bool> IsEmailRegistered(string email);
        Task<bool> IsEmailRegistered(int id, string email);
        Task<bool> IsUsernameRegistered(string username);
        Task<bool> IsUsernameRegistered(int id, string username);
        Task<bool> IsMobileNoRegistered(string mobileNo);
        Task<bool> IsMobileNoRegistered(int id, string mobileNo);
        //Task<IEnumerable<User>> GetAll();
        Task<User?> GetUserById(int id);
        //Task<User?> AddAndUpdateUser(User userObj);
    }
}
