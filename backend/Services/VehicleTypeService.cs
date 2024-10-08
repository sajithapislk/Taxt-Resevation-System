using backend.Schema;
using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;
using Microsoft.EntityFrameworkCore;
using static System.Net.Mime.MediaTypeNames;
using System.Drawing;

namespace backend.Services
{
    public class VehicleTypeService : AbstractRepositoryService<VehicleType>, IVehicleTypeService
    {
        private readonly AppDbContext dbContext;

        public VehicleTypeService(
            AppDbContext dbContext
        ) : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public override async Task<IEnumerable<VehicleType>> GetAllAsync()
        {
            return await dbContext.VehicleTypes
                .Include(x => x.Vehicles)
                .ToListAsync();
        }

        public async Task<VehicleType> AddAsync(NewVehicleTypeRequestModel model)
        {
            var entity = new VehicleType
            {
                Name = model.Name,
                Image = model.Image,
            };

            return await AddAsync(entity);
        }

        public async Task<VehicleType> UpdateAsync(int id, NewVehicleTypeRequestModel model)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            existingRecord.Name = model.Name;
            existingRecord.Image = model.Image;

            await dbContext.SaveChangesAsync();
            return existingRecord;
        }

        public Task<IEnumerable<VehicleType>> GetAllNearbyVehicleTypesAsync(decimal latitude, decimal longitude, double radiusInKm = 3)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> IsVehicleTypeNameRegistered(string name)
        {
            return await dbContext.VehicleTypes
                .Select(x => x.Name)
                .AnyAsync(x => x == name);
        }

        public async Task<bool> IsVehicleTypeNameRegistered(int id, string name)
        {
            return await dbContext.VehicleTypes
                .AnyAsync(x => x.Id != id && x.Name == name);
        }
    }
}
