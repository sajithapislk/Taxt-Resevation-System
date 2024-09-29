using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Services
{
    public interface IRepositoryService<T> where T : AbstractRecord
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T?> GetAsync(int id);

        Task<T> AddAsync(T record);
        Task<bool> DeleteAsync(int id);
    }
}
