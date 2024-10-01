using backend.Schema.Entity;
using backend.Schema;
using backend.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tests.Services
{
    public class VehicleTypeServiceTests
    {
        private readonly VehicleTypeService _vehicleTypeService;
        private readonly AppDbContext _context;

        public VehicleTypeServiceTests()
        {
            // Set up in-memory database
            var dbContextOptions = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "VehicleTypeServiceTestDb")
                .Options;

            _context = new AppDbContext(dbContextOptions);

            // Initialize VehicleTypeService with the in-memory DbContext
            _vehicleTypeService = new VehicleTypeService(_context);
        }

        [Fact]
        public async Task GetAllAsync_ShouldReturnAllVehicleTypesWithVehicles()
        {
            // Arrange
            var vehicleType = new VehicleType
            {
                Id = 1,
                Name = "Car",
                Vehicles = new List<Vehicle>
            {
                new Vehicle { Id = 1, VehicleNumber = "ABC123" },
                new Vehicle { Id = 2, VehicleNumber = "XYZ789" }
            }
            };

            await _context.VehicleTypes.AddAsync(vehicleType);
            await _context.SaveChangesAsync();

            // Act
            var result = await _vehicleTypeService.GetAllAsync();

            // Assert
            Assert.NotNull(result);
            var vehicleTypeResult = Assert.Single(result);
            Assert.Equal("Car", vehicleTypeResult.Name);
            Assert.Equal(2, vehicleTypeResult.Vehicles.Count);
        }

        [Fact]
        public async Task GetAllAsync_ShouldReturnEmpty_WhenNoVehicleTypesExist()
        {
            // Act
            var result = await _vehicleTypeService.GetAllAsync();

            // Assert
            Assert.NotNull(result);
        }

        [Fact]
        public async Task GetAllAsync_ShouldReturnVehicleTypesEvenWithoutVehicles()
        {
            // Arrange
            var vehicleType = new VehicleType
            {
                Id = 2,
                Name = "Truck"
            };

            await _context.VehicleTypes.AddAsync(vehicleType);
            await _context.SaveChangesAsync();

            // Act
            var result = await _vehicleTypeService.GetAllAsync();

            // Assert
            Assert.NotNull(result);
            Assert.NotEmpty(result);
        }

        [Fact]
        public async Task GetAllNearbyVehicleTypesAsync_ShouldThrowNotImplementedException()
        {
            // Act & Assert
            await Assert.ThrowsAsync<NotImplementedException>(() => _vehicleTypeService.GetAllNearbyVehicleTypesAsync(7.4270m, 80.3297m));
        }
    }
}
