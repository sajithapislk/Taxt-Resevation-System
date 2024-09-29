using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Services
{
    public interface IVehicleService : IRepositoryService<Vehicle>, ICrudService<Vehicle, NewVehicleRequestModel>
    {
        Task<Vehicle> UpdateLocationAsync(int id, LocationModel model);
        Task<IEnumerable<Vehicle>> GetAllAsync(int vehicleTypeId);
        Task<IEnumerable<Vehicle>> GetAllNearbyAsync(int vehicleTypeId, decimal latitude, decimal longitude, double radiusInKm);
        Task<bool> IsVehicleNumberRegistered(string vehicleNumber);
        Task<bool> IsVehicleNumberRegistered(int id, string vehicleNumber);

    }
}
