using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Services
{
    public interface IVehicleTypeService : IRepositoryService<VehicleType>, ICrudService<VehicleType, NewVehicleTypeRequestModel>
    {
        Task<IEnumerable<VehicleType>> GetAllNearbyVehicleTypesAsync(decimal latitude, decimal longitude, double radiusInKm = 3);
        Task<bool> IsVehicleTypeNameRegistered(string name);
        Task<bool> IsVehicleTypeNameRegistered(int id, string name);
    }
}
