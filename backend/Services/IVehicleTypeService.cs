using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Services
{
    public interface IVehicleTypeService : IRepositoryService<VehicleType>
    {
        Task<IEnumerable<VehicleType>> GetAllNearbyVehicleTypesAsync(decimal latitude, decimal longitude, double radiusInKm = 3);
    }
}
