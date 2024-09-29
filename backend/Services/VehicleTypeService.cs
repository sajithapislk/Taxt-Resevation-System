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

        public Task<IEnumerable<VehicleType>> GetAllNearbyVehicleTypesAsync(decimal latitude, decimal longitude, double radiusInKm = 3)
        {
            throw new NotImplementedException();
        }
    }
}
