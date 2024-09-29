using backend.Schema;
using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;
using Microsoft.EntityFrameworkCore;
using static System.Net.Mime.MediaTypeNames;
using System.Drawing;

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

            await dbContext.SaveChangesAsync();
            return existingRecord;
        }

        public async Task<Vehicle> UpdateLocationAsync(int id, LocationModel model)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            existingRecord.Location = model.Location;
            existingRecord.Latitude = model.Latitude;
            existingRecord.Longitude = model.Longitude;

            await dbContext.SaveChangesAsync();
            return existingRecord;
        }

        public async Task<IEnumerable<Vehicle>> GetAllAsync(int vehicleTypeId)
        {
            return await dbContext.Vehicles
                .Include(x => x.Driver)
                .Where(x => x.Driver.DriverState == DriverState.Available
                    && x.VehicleTypeId == vehicleTypeId)
                .ToListAsync();
        }

        //public async Task<IEnumerable<Vehicle>> GetAllNearbyAsync(int vehicleTypeId, decimal latitude, decimal longitude, double radiusInKm)
        //{
        //    const double EarthRadiusKm = 6371;

        //    // Approximate degrees of latitude per km
        //    double latRange = radiusInKm / EarthRadiusKm;

        //    // Approximate degrees of longitude per km (adjust for latitude)
        //    double lonRange = radiusInKm / (EarthRadiusKm * Math.Cos((double)latitude * Math.PI / 180));

        //    // Bounding box for quick filtering
        //    decimal minLat = latitude - (decimal)latRange;
        //    decimal maxLat = latitude + (decimal)latRange;
        //    decimal minLon = longitude - (decimal)lonRange;
        //    decimal maxLon = longitude + (decimal)lonRange;

        //    // Retrieve vehicles within bounding box
        //    var nearbyVehicles = await dbContext.Vehicles
        //        .Include(x => x.Driver)
        //        .Where(x => x.VehicleTypeId == vehicleTypeId
        //            && x.Driver.DriverState == DriverState.Available
        //            && x.Latitude.HasValue && x.Longitude.HasValue
        //            && x.Latitude >= minLat && x.Latitude <= maxLat
        //            && x.Longitude >= minLon && x.Longitude <= maxLon)
        //        .ToListAsync();

        //    // Refine with actual Haversine distance calculation
        //    return nearbyVehicles.Where(v =>
        //    {
        //        double distance = CalculateDistance(latitude, longitude, v.Latitude.Value, v.Longitude.Value);
        //        return distance <= radiusInKm;
        //    }).ToList();
        //}

        public async Task<IEnumerable<Vehicle>> GetAllNearbyAsync(int vehicleTypeId, decimal latitude, decimal longitude, double radiusInKm)
        {
            var allVehicles = await dbContext.Vehicles
                .Include(x => x.Driver)
                .Where(x => x.DeletedTime == null && x.Driver.DriverState == DriverState.Available
                    && x.Latitude != null && x.Longitude != null)
                .ToListAsync();

            return allVehicles.Where(v =>
            {
                if (v.Latitude.HasValue && v.Longitude.HasValue)
                {
                    double distance = CalculateDistance(latitude, longitude, v.Latitude.Value, v.Longitude.Value);
                    return distance <= radiusInKm;
                }
                return false;
            }).ToList();
        }

        public static double CalculateDistance(decimal lat1, decimal lon1, decimal lat2, decimal lon2)
        {
            const double EarthRadiusKm = 6371; // Radius of Earth in kilometers

            // Convert latitude and longitude from degrees to radians
            double lat1Rad = (double)lat1 * (Math.PI / 180);
            double lon1Rad = (double)lon1 * (Math.PI / 180);
            double lat2Rad = (double)lat2 * (Math.PI / 180);
            double lon2Rad = (double)lon2 * (Math.PI / 180);

            // Haversine formula
            double dlat = lat2Rad - lat1Rad;
            double dlon = lon2Rad - lon1Rad;

            double a = Math.Pow(Math.Sin(dlat / 2), 2) + Math.Cos(lat1Rad) * Math.Cos(lat2Rad) * Math.Pow(Math.Sin(dlon / 2), 2);
            double c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));

            return EarthRadiusKm * c; // Distance in kilometers
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
