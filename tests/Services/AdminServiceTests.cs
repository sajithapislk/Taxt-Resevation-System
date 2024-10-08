using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;
using backend.Services;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tests.Services
{
    public class AdminServiceTests
    {
        private readonly Mock<IAuthService> _mockAuthService;
        private readonly AdminService _adminService;

        public AdminServiceTests()
        {
            // Set up the mock IAuthService
            _mockAuthService = new Mock<IAuthService>();

            // Initialize AdminService with the mocked IAuthService
            _adminService = new AdminService(_mockAuthService.Object);
        }

        [Fact]
        public async Task LoginAsync_ShouldCallAuthServiceLoginWithAdminRole()
        {
            // Arrange
            var loginRequest = new LoginRequest
            {
                Email = "admin@example.com",
                Password = "AdminPassword123",
                Role = UserRole.Admin // This is the expected role
            };

            var mockResponse = new AuthenticateResponse(new User { Id = 1, Name = "Admin User", Email = "admin@example.com" }, "mocked-token");

            // Set up the mock to return the response when LoginAsync is called
            _mockAuthService.Setup(x => x.LoginAsync(It.IsAny<LoginRequest>()))
                            .ReturnsAsync(mockResponse);

            // Act
            var result = await _adminService.LoginAsync(loginRequest);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Admin User", result?.Name);
            Assert.Equal("mocked-token", result?.Token);

            // Verify that the AuthService was called with an admin role
            _mockAuthService.Verify(x => x.LoginAsync(It.Is<LoginRequest>(r => r.Role == UserRole.Admin)), Times.Once);
        }

        [Fact]
        public async Task RegisterAsync_ShouldCallAuthServiceRegisterWithAdminRole()
        {
            // Arrange
            var registerRequest = new UserRegisterRequestModel
            {
                Email = "admin@example.com",
                Password = "AdminPassword123",
                Name = "Admin User",
                Role = UserRole.Admin // This is the expected role
            };

            var mockResponse = new AuthenticateResponse(new User { Id = 1, Name = "Admin User", Email = "admin@example.com" }, "mocked-token");

            // Set up the mock to return the response when RegisterAsync is called
            _mockAuthService.Setup(x => x.RegisterAsync(It.IsAny<UserRegisterRequestModel>()))
                            .ReturnsAsync(mockResponse);

            // Act
            var result = await _adminService.RegisterAsync(registerRequest);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Admin User", result?.Name);
            Assert.Equal("mocked-token", result?.Token);

            // Verify that the AuthService was called with an admin role
            _mockAuthService.Verify(x => x.RegisterAsync(It.Is<UserRegisterRequestModel>(r => r.Role == UserRole.Admin)), Times.Once);
        }
    }
}
