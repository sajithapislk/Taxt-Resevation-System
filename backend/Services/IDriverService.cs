using backend.Schema.Entity;
using backend.Schema.Enum;

namespace backend.Services
{
    public interface IDriverService : IAuthMgtService, IRepositoryService<User>
    {
        Task<User> UpdateStateAsync(int id, DriverState state);
    }
}
