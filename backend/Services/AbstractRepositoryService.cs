
using backend.Schema;
using backend.Schema.Entity;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class AbstractRepositoryService<T> : IRepositoryService<T> where T : AbstractRecord
    {
        private readonly AppDbContext dbContext;

        public AbstractRepositoryService(
            AppDbContext dbContext
        )
        {
            this.dbContext = dbContext;
        }

        public virtual async Task<IEnumerable<T>> GetAllAsync()
        {
            return await dbContext.Set<T>()
                .ToListAsync();
        }

        public virtual async Task<T?> GetAsync(int id)
        {
            return await dbContext.Set<T>()
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public virtual async Task<T> AddAsync(T record)
        {
            await dbContext.Set<T>().AddAsync(record);
            await dbContext.SaveChangesAsync();
            return record;
        }

        public virtual async Task<bool> DeleteAsync(int id)
        {
            var existingRecord = await dbContext.Set<T>().FindAsync(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            dbContext.Set<T>().Remove(existingRecord);
            return await dbContext.SaveChangesAsync() > 0;
        }
    }
}
