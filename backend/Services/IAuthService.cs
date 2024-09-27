using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Services
{
    public interface IAuthService : IAuthMgtService
    {
        Task<bool> IsEmailRegistered(string email);
        Task<bool> IsUsernameTaken(string username);
        Task<bool> IsMobileNoRegistered(string mobileNo);
        //Task<IEnumerable<User>> GetAll();
        Task<User?> GetUserById(int id);
        //Task<User?> AddAndUpdateUser(User userObj);
    }
}
