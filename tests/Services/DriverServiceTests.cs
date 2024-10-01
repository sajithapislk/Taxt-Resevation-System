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

namespace tests.Services
{
    public class DriverServiceTests
    {
        private readonly Mock<IAuthService> _mockAuthService;
        private readonly DriverService _driverService;
        private readonly AppDbContext _context;

        public DriverServiceTests()
        {
            // Set up in-memory database
            var dbContextOptions = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "DriverServiceTestDb")
                .Options;

            _context = new AppDbContext(dbContextOptions);

            // Set up mock IAuthService
            _mockAuthService = new Mock<IAuthService>();

            // Initialize DriverService with the mocked IAuthService and in-memory DbContext
            _driverService = new DriverService(_mockAuthService.Object, _context);
        }

        [Fact]
        public async Task LoginAsync_ShouldCallAuthServiceLoginWithDriverRole()
        {
            // Arrange
            var loginRequest = new LoginRequest
            {
                Email = "driver@example.com",
                Password = "DriverPassword123",
                Role = UserRole.Driver // This is the expected role
            };

            var mockResponse = new AuthenticateResponse(new User { Id = 1, Name = "Driver User", Email = "driver@example.com" }, "mocked-token");

            // Set up the mock to return the response when LoginAsync is called
            _mockAuthService.Setup(x => x.LoginAsync(It.IsAny<LoginRequest>()))
                            .ReturnsAsync(mockResponse);

            // Act
            var result = await _driverService.LoginAsync(loginRequest);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Driver User", result?.Name);
            Assert.Equal("mocked-token", result?.Token);

            // Verify that the AuthService was called with the Driver role
            _mockAuthService.Verify(x => x.LoginAsync(It.Is<LoginRequest>(r => r.Role == UserRole.Driver)), Times.Once);
        }

        [Fact]
        public async Task RegisterAsync_ShouldCallAuthServiceRegisterWithDriverRole()
        {
            // Arrange
            var registerRequest = new UserRegisterRequest
            {
                Email = "driver@example.com",
                Password = "DriverPassword123",
                Name = "Driver User",
                Role = UserRole.Driver // This is the expected role
            };

            var mockResponse = new AuthenticateResponse(new User { Id = 1, Name = "Driver User", Email = "driver@example.com" }, "mocked-token");

            // Set up the mock to return the response when RegisterAsync is called
            _mockAuthService.Setup(x => x.RegisterAsync(It.IsAny<UserRegisterRequest>()))
                            .ReturnsAsync(mockResponse);

            // Act
            var result = await _driverService.RegisterAsync(registerRequest);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Driver User", result?.Name);
            Assert.Equal("mocked-token", result?.Token);

            // Verify that the AuthService was called with the Driver role
            _mockAuthService.Verify(x => x.RegisterAsync(It.Is<UserRegisterRequest>(r => r.Role == UserRole.Driver)), Times.Once);
        }

        [Fact]
        public async Task GetAsync_ShouldReturnDriver_WhenDriverExists()
        {
            // Arrange
            var driver = new User
            {
                Id = 1,
                Name = "Driver User",
                Role = UserRole.Driver
            };

            await _context.Users.AddAsync(driver);
            await _context.SaveChangesAsync();

            // Act
            var result = await _driverService.GetAsync(1);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Driver User", result?.Name);
            Assert.Equal(UserRole.Driver, result?.Role);
        }

        [Fact]
        public async Task GetAsync_ShouldReturnNull_WhenDriverDoesNotExist()
        {
            // Act
            var result = await _driverService.GetAsync(99); // Non-existing ID

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public async Task UpdateStateAsync_ShouldChangeDriverState()
        {
            // Arrange
            var driver = new User
            {
                Id = 2,
                Name = "Driver User",
                Role = UserRole.Driver,
                DriverState = DriverState.Available
            };

            await _context.Users.AddAsync(driver);
            await _context.SaveChangesAsync();

            // Act
            var result = await _driverService.UpdateStateAsync(2, DriverState.Busy);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(DriverState.Busy, result.DriverState);
        }

        [Fact]
        public async Task UpdateStateAsync_ShouldThrowException_WhenDriverNotFound()
        {
            // Act & Assert
            await Assert.ThrowsAsync<KeyNotFoundException>(() => _driverService.UpdateStateAsync(99, DriverState.Busy));
        }
    }
}
