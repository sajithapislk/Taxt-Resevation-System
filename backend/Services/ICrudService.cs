using backend.Schema.Entity;

namespace backend.Services
{
    public interface ICrudService<T, M> where T : AbstractRecord
    {
        Task<T> AddAsync(M model);
        Task<T> UpdateAsync(int id, M model);
    }
}
