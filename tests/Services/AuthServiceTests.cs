using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;
using backend.Schema;
using backend.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using backend.Helpers;

namespace tests.Services
{
    public class AuthServiceTests
    {
        private readonly AppDbContext _context;
        private readonly AuthService _authService;
        private readonly Mock<INotificationService> _mockExternalService;

        public AuthServiceTests()
        {
            // Set up in-memory database with unique name for isolation
            var dbContextOptions = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()) // Use a unique database for each test class execution
                .Options;

            _context = new AppDbContext(dbContextOptions);

            // Set up mock AppSettings
            var appSettings = new AppSettings
            {
                Secret = "ThisIsASecretKeyForTestingThisIsASecretKeyForTesting"
            };

            // Set up mock external service
            _mockExternalService = new Mock<INotificationService>();

            // Initialize AuthService with mock services
            _authService = new AuthService(Options.Create(appSettings), _context, _mockExternalService.Object);

            // Seed the database with some initial users
            SeedDatabase();
        }

        // Helper method to seed test data
        private void SeedDatabase()
        {
            var users = new List<User>
        {
            new User { Id = 1, Email = "testuser@example.com", Name = "Test User", MobileNo = "1234567890", Password = PasswordHasher.HashPassword("Password123"), Role = UserRole.User },
            new User { Id = 2, Email = "adminuser@example.com", Name = "Admin User", MobileNo = "0987654321", Password = PasswordHasher.HashPassword("AdminPass123"), Role = UserRole.Admin }
        };

            _context.Users.AddRange(users);
            _context.SaveChanges();
        }

        [Fact]
        public async Task RegisterAsync_ShouldRegisterUserSuccessfully()
        {
            // Arrange
            var registerRequest = new UserRegisterRequestModel
            {
                Email = "newuser@example.com",
                Password = "NewUserPassword123",
                Name = "New User",
                MobileNo = "5555555555",
                Role = UserRole.User
            };

            // Act
            var response = await _authService.RegisterAsync(registerRequest);

            // Assert
            Assert.NotNull(response);
            Assert.NotNull(response.Token);
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == "newuser@example.com");
            Assert.NotNull(user);
            Assert.Equal("New User", user.Name);

            // Verify external service calls
            _mockExternalService.Verify(s => s.SendRegistrationCompletedEmailAsync(It.IsAny<UserRegisterRequestModel>()), Times.Once);
            _mockExternalService.Verify(s => s.SendRegistrationCompletedSmsAsync(It.IsAny<UserRegisterRequestModel>()), Times.Once);
        }

        [Fact]
        public async Task LoginAsync_ShouldAuthenticateUserSuccessfully()
        {
            // Arrange
            var loginRequest = new LoginRequest
            {
                Email = "testuser@example.com",
                Password = "Password123",
                Role = UserRole.User
            };

            // Act
            var response = await _authService.LoginAsync(loginRequest);

            // Assert
            Assert.NotNull(response);
            Assert.NotNull(response.Token);
        }

        [Fact]
        public async Task LoginAsync_ShouldReturnNull_WhenCredentialsAreInvalid()
        {
            // Arrange
            var loginRequest = new LoginRequest
            {
                Email = "invaliduser@example.com",
                Password = "WrongPassword",
                Role = UserRole.User
            };

            // Act
            var response = await _authService.LoginAsync(loginRequest);

            // Assert
            Assert.Null(response);
        }

        [Theory]
        [InlineData("testuser@example.com", "username2", "1234567891", true, false, false)]
        [InlineData("newuser@example.com", "username1", "9876543210", false, true, false)]
        [InlineData("newuser2@example.com", "newusername", "1234567890", false, false, true)]
        public async Task RegisterValidation_ShouldDetectDuplicates(
            string email, string username, string mobileNo, bool emailExists, bool usernameExists, bool mobileExists)
        {
            // Arrange: Re-seed the database for each test case to ensure isolation
            _context.Users.RemoveRange(_context.Users);  // Clear the database first
            await _context.SaveChangesAsync();

            var existingUser = new User
            {
                Email = "testuser@example.com",
                Username = "username1",
                MobileNo = "1234567890",
            };

            await _context.Users.AddAsync(existingUser); // Add existing user data
            await _context.SaveChangesAsync();

            // Act
            var isEmailRegistered = await _authService.IsEmailRegistered(email);
            var isUsernameTaken = await _authService.IsUsernameRegistered(username);
            var isMobileNoRegistered = await _authService.IsMobileNoRegistered(mobileNo);

            // Assert
            Assert.Equal(emailExists, isEmailRegistered);
            Assert.Equal(usernameExists, isUsernameTaken);
            Assert.Equal(mobileExists, isMobileNoRegistered);
        }


        [Fact]
        public async Task GetUserById_ShouldReturnUser_WhenUserExists()
        {
            // Act
            var result = await _authService.GetUserById(1);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Test User", result?.Name);
        }

        [Fact]
        public async Task GetUserById_ShouldReturnNull_WhenUserDoesNotExist()
        {
            // Act
            var result = await _authService.GetUserById(99); // Non-existing ID

            // Assert
            Assert.Null(result);
        }
    }
}
