using backend.Helpers;
using backend.Schema;
using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;
using Microsoft.EntityFrameworkCore;
using NetTopologySuite.Geometries;
using static System.Net.Mime.MediaTypeNames;

namespace backend.Services
{
    public class VehicleService : AbstractRepositoryService<Vehicle>, IVehicleService
    {
        private readonly AppDbContext dbContext;
        private readonly IDriverService driverService;
        private readonly IVehicleTypeService vehicleTypeService;

        public VehicleService(
            AppDbContext dbContext,
            IDriverService driverService,
            IVehicleTypeService vehicleTypeService
        ) : base(dbContext)
        {
            this.dbContext = dbContext;
            this.driverService = driverService;
            this.vehicleTypeService = vehicleTypeService;
        }

        public async Task<Vehicle> AddAsync(NewVehicleRequestModel model)
        {
            var driver = await driverService.GetAsync(model.DriverId)
                ?? throw new KeyNotFoundException($"No matching driver record found for the id {model.DriverId}");

            var vehicleType = await vehicleTypeService.GetAsync(model.VehicleTypeId)
                ?? throw new KeyNotFoundException($"No matching vehicle type record found for the id {model.VehicleTypeId}");

            var entity = new Vehicle
            {
                DriverId = driver.Id,
                VehicleTypeId = vehicleType.Id,
                VehicleNumber = model.VehicleNumber,
                PassengerSeats = model.PassengerSeats,
                CostPerKm = model.CostPerKm,
                Color = model.Color,
                IsAcAvailable = model.IsAcAvailable,
                Description = model.Description,
                MaxLoad = model.MaxLoad,
                Image = model.Image,
                State = VehicleState.Available,
            };

            return await AddAsync(entity);
        }

        public async Task<Vehicle> UpdateAsync(int id, NewVehicleRequestModel model)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            existingRecord.DriverId = model.DriverId;
            existingRecord.VehicleTypeId = model.VehicleTypeId;
            existingRecord.VehicleNumber = model.VehicleNumber;
            existingRecord.PassengerSeats = model.PassengerSeats;
            existingRecord.CostPerKm = model.CostPerKm;
            existingRecord.Color = model.Color;
            existingRecord.IsAcAvailable = model.IsAcAvailable;
            existingRecord.Description = model.Description;
            existingRecord.MaxLoad = model.MaxLoad;
            existingRecord.Image = model.Image;
            existingRecord.State = model.State;

            await dbContext.SaveChangesAsync();
            return existingRecord;
        }

        public async Task<Vehicle> UpdateLocationAsync(int id, LocationModel model)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            var location = new Point(model.Longitude, model.Latitude) { SRID = 4326 }; // SRID 4326 is the standard for WGS84 (used by Google Maps)

            existingRecord.Location = location;
            existingRecord.Place = model.Location;

            await dbContext.SaveChangesAsync();
            return existingRecord;
        }

        public async Task<Vehicle> UpdateStateAsync(int id, VehicleState state)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            existingRecord.State = state;
            await dbContext.SaveChangesAsync();
            return existingRecord;
        }

        public async Task<IEnumerable<Vehicle>> GetAllByTypeAsync(int vehicleTypeId)
        {
            return await dbContext.Vehicles
                .Include(x => x.Driver)
                .Where(x => x.VehicleTypeId == vehicleTypeId
                    && x.State == VehicleState.Available
                    && x.Driver.DriverState == DriverState.Available)
                .ToListAsync();
        }

        public async Task<IEnumerable<Vehicle>> GetAllByDriverAsync(int driverId)
        {
            return await dbContext.Vehicles
                .Include(x => x.Driver)
                .Where(x => x.DriverId == driverId)
                .ToListAsync();
        }

        public async Task<IEnumerable<Vehicle>> GetAllNearbyAsync(int vehicleTypeId, double longitude, double latitude, double radiusInKm)
        {
            var location = new Point(longitude, latitude) { SRID = 4326 };  // Create a Point for the query

            // Query vehicles within the specified radius using spatial queries
            var entities = await dbContext.Vehicles
                .Include(x => x.Driver)
                .Where(x => x.VehicleTypeId == vehicleTypeId
                    && x.State == VehicleState.Available
                    && x.Driver.DriverState == DriverState.Available
                    && x.Location != null && x.Location.IsWithinDistance(location, radiusInKm * 1000))
                .ToListAsync();

            entities.ForEach(x =>
            {
                x.Distance = (decimal)DistanceCalculator.GetExactDistance(location, x.Location);
            });
            return entities;
        }

        public async Task<bool> IsVehicleNumberRegistered(string vehicleNumber)
        {
            return await dbContext.Vehicles
                .Select(x => x.VehicleNumber)
                .AnyAsync(x => x == vehicleNumber);
        }

        public async Task<bool> IsVehicleNumberRegistered(int id, string vehicleNumber)
        {
            return await dbContext.Vehicles
                .AnyAsync(x => x.Id != id && x.VehicleNumber == vehicleNumber);
        }

    }
}
