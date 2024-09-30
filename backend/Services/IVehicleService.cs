using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;

namespace backend.Services
{
    public interface IVehicleService : IRepositoryService<Vehicle>, ICrudService<Vehicle, NewVehicleRequestModel>
    {
        Task<Vehicle> UpdateLocationAsync(int id, LocationModel model);
        Task<Vehicle> UpdateStateAsync(int id, VehicleState state);
        Task<IEnumerable<Vehicle>> GetAllByTypeAsync(int vehicleTypeId);
        Task<IEnumerable<Vehicle>> GetAllByDriverAsync(int driverId);
        Task<IEnumerable<Vehicle>> GetAllNearbyAsync(int vehicleTypeId, double longitude, double latitude, double radiusInKm);
        Task<bool> IsVehicleNumberRegistered(string vehicleNumber);
        Task<bool> IsVehicleNumberRegistered(int id, string vehicleNumber);

    }
}
