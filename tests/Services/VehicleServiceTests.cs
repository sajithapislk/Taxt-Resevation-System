using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;
using backend.Schema;
using backend.Services;
using Microsoft.EntityFrameworkCore;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NetTopologySuite.Geometries;

namespace tests.Services
{
    public class VehicleServiceTests
    {
        private readonly Mock<IDriverService> _mockDriverService;
        private readonly Mock<IVehicleTypeService> _mockVehicleTypeService;
        private readonly VehicleService _vehicleService;
        private readonly AppDbContext _context;

        public VehicleServiceTests()
        {
            // Set up in-memory database
            var dbContextOptions = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "VehicleServiceTestDb")
                .Options;

            _context = new AppDbContext(dbContextOptions);

            // Set up mock services
            _mockDriverService = new Mock<IDriverService>();
            _mockVehicleTypeService = new Mock<IVehicleTypeService>();

            // Initialize VehicleService with mock services and in-memory DbContext
            _vehicleService = new VehicleService(_context, _mockDriverService.Object, _mockVehicleTypeService.Object);
        }

        [Fact]
        public async Task AddAsync_ShouldCreateVehicleSuccessfully()
        {
            // Arrange
            var driver = new User { Id = 1, Name = "Test Driver" };
            var vehicleType = new VehicleType { Id = 1, Name = "Car" };

            var newVehicleRequest = new NewVehicleRequestModel
            {
                DriverId = 1,
                VehicleTypeId = 1,
                VehicleNumber = "ABC123",
                PassengerSeats = 4,
                CostPerKm = 10,
                Color = "Red",
                IsAcAvailable = true,
                Description = "A red car",
                MaxLoad = 1000,
                Image = "image_base64_string"
            };

            // Set up mocks for driver and vehicle type services
            _mockDriverService.Setup(x => x.GetAsync(1)).ReturnsAsync(driver);
            _mockVehicleTypeService.Setup(x => x.GetAsync(1)).ReturnsAsync(vehicleType);

            // Act
            var result = await _vehicleService.AddAsync(newVehicleRequest);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("ABC123", result.VehicleNumber);
            Assert.Equal(driver.Id, result.DriverId);
            Assert.Equal(vehicleType.Id, result.VehicleTypeId);
            Assert.Equal(VehicleState.Available, result.State);
        }

        [Fact]
        public async Task AddAsync_ShouldThrowException_WhenDriverNotFound()
        {
            // Arrange
            var newVehicleRequest = new NewVehicleRequestModel
            {
                DriverId = 1,
                VehicleTypeId = 1
            };

            // Set up mock to return null for driver
            _mockDriverService.Setup(x => x.GetAsync(1)).ReturnsAsync((User)null);

            // Act & Assert
            await Assert.ThrowsAsync<KeyNotFoundException>(() => _vehicleService.AddAsync(newVehicleRequest));
        }

        [Fact]
        public async Task AddAsync_ShouldThrowException_WhenVehicleTypeNotFound()
        {
            // Arrange
            var driver = new User { Id = 1, Name = "Test Driver" };
            var newVehicleRequest = new NewVehicleRequestModel
            {
                DriverId = 1,
                VehicleTypeId = 1
            };

            // Set up mocks for driver and vehicle type services
            _mockDriverService.Setup(x => x.GetAsync(1)).ReturnsAsync(driver);
            _mockVehicleTypeService.Setup(x => x.GetAsync(1)).ReturnsAsync((VehicleType)null);

            // Act & Assert
            await Assert.ThrowsAsync<KeyNotFoundException>(() => _vehicleService.AddAsync(newVehicleRequest));
        }

        [Fact]
        public async Task UpdateStateAsync_ShouldChangeVehicleState()
        {
            // Arrange
            var vehicle = new Vehicle
            {
                Id = 3,
                VehicleNumber = "ABC123",
                State = VehicleState.Available
            };

            await _context.Vehicles.AddAsync(vehicle);
            await _context.SaveChangesAsync();

            // Act
            var result = await _vehicleService.UpdateStateAsync(3, VehicleState.Available);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(VehicleState.Available, result.State);
        }

        [Fact]
        public async Task UpdateStateAsync_ShouldThrowException_WhenVehicleNotFound()
        {
            // Act & Assert
            await Assert.ThrowsAsync<KeyNotFoundException>(() => _vehicleService.UpdateStateAsync(99, VehicleState.Available));
        }

        [Fact]
        public async Task UpdateLocationAsync_ShouldChangeVehicleLocation()
        {
            // Arrange
            var vehicle = new Vehicle
            {
                Id = 2,
                VehicleNumber = "ABC123",
                Location = new Point(80.3297, 7.4270) { SRID = 4326 }
            };

            await _context.Vehicles.AddAsync(vehicle);
            await _context.SaveChangesAsync();

            var locationModel = new LocationModel
            {
                Latitude = 7.5000,
                Longitude = 80.4500,
                Location = "New Location"
            };

            // Act
            var result = await _vehicleService.UpdateLocationAsync(2, locationModel);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("New Location", result.Place);
            Assert.Equal(7.5000, result.Location.Y); // Y is latitude in Point
            Assert.Equal(80.4500, result.Location.X); // X is longitude in Point
        }

        [Fact]
        public async Task GetAllByTypeAsync_ShouldReturnAvailableVehiclesByType()
        {
            // Arrange
            var vehicleType = new VehicleType { Id = 1, Name = "Car" };
            var driver = new User { Id = 1, Name = "Driver 1", DriverState = DriverState.Available };
            var vehicle = new Vehicle
            {
                Id = 5,
                VehicleTypeId = 1,
                VehicleNumber = "ABC123",
                Driver = driver,
                State = VehicleState.Available
            };

            await _context.Vehicles.AddAsync(vehicle);
            await _context.SaveChangesAsync();

            // Act
            var result = await _vehicleService.GetAllByTypeAsync(1);

            // Assert
            Assert.NotEmpty(result);
            Assert.Equal(4, result.First().Id);
        }

        [Fact]
        public async Task IsVehicleNumberRegistered_ShouldReturnTrue_WhenVehicleNumberExists()
        {
            // Arrange
            var vehicle = new Vehicle
            {
                Id = 1,
                VehicleNumber = "ABC123"
            };

            await _context.Vehicles.AddAsync(vehicle);
            await _context.SaveChangesAsync();

            // Act
            var result = await _vehicleService.IsVehicleNumberRegistered("ABC123");

            // Assert
            Assert.True(result);
        }

        [Fact]
        public async Task IsVehicleNumberRegistered_ShouldReturnFalse_WhenVehicleNumberDoesNotExist()
        {
            // Act
            var result = await _vehicleService.IsVehicleNumberRegistered("NONEXISTENT");

            // Assert
            Assert.False(result);
        }
    }
}
