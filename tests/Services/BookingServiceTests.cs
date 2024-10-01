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
    public class BookingServiceTests
    {
        private readonly Mock<IUserService> _mockUserService;
        private readonly Mock<IDriverService> _mockDriverService;
        private readonly Mock<IVehicleService> _mockVehicleService;
        private readonly AppDbContext _context;
        private readonly BookingService _bookingService;

        public BookingServiceTests()
        {
            // Set up in-memory database
            var dbContextOptions = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "BookingServiceTestDb")
                .Options;

            _context = new AppDbContext(dbContextOptions);

            // Set up mock services
            _mockUserService = new Mock<IUserService>();
            _mockDriverService = new Mock<IDriverService>();
            _mockVehicleService = new Mock<IVehicleService>();

            // Initialize BookingService with mock services and in-memory DbContext
            _bookingService = new BookingService(_context, _mockUserService.Object, _mockDriverService.Object, _mockVehicleService.Object);
        }

        [Fact]
        public async Task AddAsync_ShouldCreateBookingSuccessfully()
        {
            // Arrange
            var user = new User { Id = 1, Name = "Test User", Email = "user@example.com" };
            var vehicle = new Vehicle { Id = 1, VehicleNumber = "123ABC", CostPerKm = 10 };

            var newBookingRequest = new NewBookingRequestModel
            {
                UserId = 1,
                VehicleId = 1,
                PickUpLatitude = 7.4270,
                PickUpLongitude = 80.3297,
                DropOffLatitude = 7.5000,
                DropOffLongitude = 80.4500,
                PickUpPlace = "Pickup Place",
                DropOffPlace = "DropOff Place",
                Type = BookingType.Instant
            };

            // Set up mocks for user and vehicle services
            _mockUserService.Setup(x => x.GetAsync(1)).ReturnsAsync(user);
            _mockVehicleService.Setup(x => x.GetAsync(1)).ReturnsAsync(vehicle);

            // Act
            var result = await _bookingService.AddAsync(newBookingRequest);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(user.Id, result.UserId);
            Assert.Equal(vehicle.Id, result.VehicleId);
            Assert.Equal("Pickup Place", result.PickUpPlace);
            Assert.Equal("DropOff Place", result.DropOffPlace);
            Assert.Equal(BookingStatus.Pending, result.Status);
            Assert.True(result.Distance > 0); // Distance should be calculated
            Assert.True(result.Price > 0); // Price should be calculated
        }

        [Fact]
        public async Task AddAsync_ShouldThrowException_WhenUserNotFound()
        {
            // Arrange
            var newBookingRequest = new NewBookingRequestModel
            {
                UserId = 1,
                VehicleId = 1
            };

            // Set up mocks to return null for user
            _mockUserService.Setup(x => x.GetAsync(1)).ReturnsAsync((User)null);

            // Act & Assert
            await Assert.ThrowsAsync<KeyNotFoundException>(() => _bookingService.AddAsync(newBookingRequest));
        }

        [Fact]
        public async Task AddAsync_ShouldThrowException_WhenVehicleNotFound()
        {
            // Arrange
            var user = new User { Id = 1, Name = "Test User", Email = "user@example.com" };
            var newBookingRequest = new NewBookingRequestModel
            {
                UserId = 1,
                VehicleId = 1
            };

            // Set up mocks for user service
            _mockUserService.Setup(x => x.GetAsync(1)).ReturnsAsync(user);
            _mockVehicleService.Setup(x => x.GetAsync(1)).ReturnsAsync((Vehicle)null);

            // Act & Assert
            await Assert.ThrowsAsync<KeyNotFoundException>(() => _bookingService.AddAsync(newBookingRequest));
        }

        [Fact]
        public async Task ConfirmAsync_ShouldChangeBookingStatusToConfirmed()
        {
            // Arrange
            var booking = new Booking
            {
                Id = 3,
                Status = BookingStatus.Pending,
                PickUpPlace = "PickUp",
                PickUpLocation = new Point(7.4270, 80.3297) { SRID = 4326 },
                DropOffPlace = "DropOff",
                DropOffLocation = new Point(7.5000, 80.4500) { SRID = 4326 }
            };
            await _context.Bookings.AddAsync(booking);
            await _context.SaveChangesAsync();

            // Act
            var result = await _bookingService.ConfirmAsync(1);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(BookingStatus.Confirmed, result.Status);
        }

        [Fact]
        public async Task StartAsync_ShouldChangeBookingStatusToInProgress()
        {
            // Arrange
            var vehicle = new Vehicle { Id = 1, DriverId = 1 };
            var driver = new User { Id = 1, Role = UserRole.Driver, Name = "Driver Name" };
            var booking = new Booking
            {
                Id = 4,
                VehicleId = 1,
                Status = BookingStatus.Confirmed,
                PickUpPlace = "PickUp",
                PickUpLocation = new Point(7.4270, 80.3297) { SRID = 4326 },
                DropOffPlace = "DropOff",
                DropOffLocation = new Point(7.5000, 80.4500) { SRID = 4326 }
            };

            await _context.Bookings.AddAsync(booking);
            await _context.SaveChangesAsync();

            // Set up mocks for vehicle and driver services
            _mockVehicleService.Setup(x => x.GetAsync(1)).ReturnsAsync(vehicle);
            _mockDriverService.Setup(x => x.GetAsync(1)).ReturnsAsync(driver);

            // Act
            var result = await _bookingService.StartAsync(1);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(BookingStatus.InProgress, result.Status);
            Assert.NotNull(result.PickUpTime);
            Assert.Equal(booking.PickUpLocation, vehicle.Location);
            Assert.Equal(booking.PickUpPlace, driver.Place);
        }

        [Fact]
        public async Task CompleteAsync_ShouldChangeBookingStatusToCompleted()
        {
            // Arrange
            var user = new User { Id = 1, Name = "User Name" };
            var vehicle = new Vehicle { Id = 1, DriverId = 1 };
            var driver = new User { Id = 1, Role = UserRole.Driver, Name = "Driver Name" };
            var booking = new Booking
            {
                Id = 1,
                VehicleId = 1,
                UserId = 1,
                Status = BookingStatus.InProgress,
                PickUpTime = DateTime.Now.AddHours(-1), // Pickup happened 1 hour ago
                PickUpPlace = "PickUp",
                PickUpLocation = new Point(7.4270, 80.3297) { SRID = 4326 },
                DropOffPlace = "DropOff",
                DropOffLocation = new Point(7.5000, 80.4500) { SRID = 4326 }
            };

            await _context.Bookings.AddAsync(booking);
            await _context.SaveChangesAsync();

            // Set up mocks for user, vehicle, and driver services
            _mockUserService.Setup(x => x.GetAsync(1)).ReturnsAsync(user);
            _mockVehicleService.Setup(x => x.GetAsync(1)).ReturnsAsync(vehicle);
            _mockDriverService.Setup(x => x.GetAsync(1)).ReturnsAsync(driver);

            // Act
            var result = await _bookingService.CompleteAsync(1);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(BookingStatus.Completed, result.Status);
            Assert.NotNull(result.DropOffTime);
            Assert.Equal(booking.DropOffLocation, user.Location);
            Assert.Equal(booking.DropOffLocation, driver.Location);
        }

        [Fact]
        public async Task CancelAsync_ShouldChangeBookingStatusToCancelled()
        {
            // Arrange
            var booking = new Booking
            {
                Id = 5,
                Status = BookingStatus.Pending,
                PickUpPlace = "PickUp",
                PickUpLocation = new Point(7.4270, 80.3297) { SRID = 4326 },
                DropOffPlace = "DropOff",
                DropOffLocation = new Point(7.5000, 80.4500) { SRID = 4326 }
            };
            await _context.Bookings.AddAsync(booking);
            await _context.SaveChangesAsync();

            // Act
            var result = await _bookingService.CancelAsync(5);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(BookingStatus.Cancelled, result.Status);
        }
    }
}
