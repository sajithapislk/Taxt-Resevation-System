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
    public class UserServiceTests
    {
        private readonly Mock<IAuthService> _mockAuthService;
        private readonly UserService _userService;
        private readonly AppDbContext _context;

        public UserServiceTests()
        {
            // Set up in-memory database
            var dbContextOptions = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "UserServiceTestDb")
                .Options;

            _context = new AppDbContext(dbContextOptions);

            // Set up mock IAuthService
            _mockAuthService = new Mock<IAuthService>();

            // Initialize UserService with the mocked IAuthService and in-memory DbContext
            _userService = new UserService(_mockAuthService.Object, _context);
        }

        [Fact]
        public async Task LoginAsync_ShouldCallAuthServiceLoginWithUserRole()
        {
            // Arrange
            var loginRequest = new LoginRequest
            {
                Email = "user@example.com",
                Password = "UserPassword123",
                Role = UserRole.User // This is the expected role
            };

            var mockResponse = new AuthenticateResponse(new User { Id = 1, Name = "User", Email = "user@example.com" }, "mocked-token");

            // Set up the mock to return the response when LoginAsync is called
            _mockAuthService.Setup(x => x.LoginAsync(It.IsAny<LoginRequest>()))
                            .ReturnsAsync(mockResponse);

            // Act
            var result = await _userService.LoginAsync(loginRequest);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("User", result?.Name);
            Assert.Equal("mocked-token", result?.Token);

            // Verify that the AuthService was called with the User role
            _mockAuthService.Verify(x => x.LoginAsync(It.Is<LoginRequest>(r => r.Role == UserRole.User)), Times.Once);
        }

        [Fact]
        public async Task RegisterAsync_ShouldCallAuthServiceRegisterWithUserRole()
        {
            // Arrange
            var registerRequest = new UserRegisterRequest
            {
                Email = "user@example.com",
                Password = "UserPassword123",
                Name = "User",
                Role = UserRole.User // This is the expected role
            };

            var mockResponse = new AuthenticateResponse(new User { Id = 1, Name = "User", Email = "user@example.com" }, "mocked-token");

            // Set up the mock to return the response when RegisterAsync is called
            _mockAuthService.Setup(x => x.RegisterAsync(It.IsAny<UserRegisterRequest>()))
                            .ReturnsAsync(mockResponse);

            // Act
            var result = await _userService.RegisterAsync(registerRequest);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("User", result?.Name);
            Assert.Equal("mocked-token", result?.Token);

            // Verify that the AuthService was called with the User role
            _mockAuthService.Verify(x => x.RegisterAsync(It.Is<UserRegisterRequest>(r => r.Role == UserRole.User)), Times.Once);
        }

        [Fact]
        public async Task RegisterGuestAsync_ShouldCallAuthServiceRegisterWithGuestRole()
        {
            // Arrange
            var registerRequest = new UserRegisterRequest
            {
                Email = "guest@example.com",
                Password = "GuestPassword123",
                Name = "Guest",
                Role = UserRole.Guest // This is the expected role
            };

            var mockResponse = new AuthenticateResponse(new User { Id = 2, Name = "Guest", Email = "guest@example.com" }, "mocked-token");

            // Set up the mock to return the response when RegisterAsync is called
            _mockAuthService.Setup(x => x.RegisterAsync(It.IsAny<UserRegisterRequest>()))
                            .ReturnsAsync(mockResponse);

            // Act
            var result = await _userService.RegisterGuestAsync(registerRequest);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Guest", result?.Name);
            Assert.Equal("mocked-token", result?.Token);

            // Verify that the AuthService was called with the Guest role
            _mockAuthService.Verify(x => x.RegisterAsync(It.Is<UserRegisterRequest>(r => r.Role == UserRole.Guest)), Times.Once);
        }

        [Fact]
        public async Task GetAsync_ShouldReturnUser_WhenUserExists()
        {
            // Arrange
            var user = new User
            {
                Id = 1,
                Name = "Test User",
                Role = UserRole.User
            };

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            // Act
            var result = await _userService.GetAsync(1);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Test User", result?.Name);
            Assert.Equal(UserRole.User, result?.Role);
        }

        [Fact]
        public async Task GetAsync_ShouldReturnGuest_WhenGuestExists()
        {
            // Arrange
            var guest = new User
            {
                Id = 2,
                Name = "Test Guest",
                Role = UserRole.Guest
            };

            await _context.Users.AddAsync(guest);
            await _context.SaveChangesAsync();

            // Act
            var result = await _userService.GetAsync(2);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Test Guest", result?.Name);
            Assert.Equal(UserRole.Guest, result?.Role);
        }

        [Fact]
        public async Task GetAsync_ShouldReturnNull_WhenUserDoesNotExist()
        {
            // Act
            var result = await _userService.GetAsync(99); // Non-existing ID

            // Assert
            Assert.Null(result);
        }
    }
}
