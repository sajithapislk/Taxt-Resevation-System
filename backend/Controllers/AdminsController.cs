using backend.Helpers;
using backend.Schema.Model;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private readonly IAuthService authService;
        private readonly IAdminService adminService;

        public AdminsController(
            IAuthService authService,
            IAdminService adminService
        )
        {
            this.authService = authService;
            this.adminService = adminService;
        }

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterRequestModel model)
        {
            if (model == null || string.IsNullOrWhiteSpace(model.Email) || string.IsNullOrWhiteSpace(model.Password))
            {
                return BadRequest();
            }

            if (await authService.IsEmailRegistered(model.Email))
            {
                return BadRequest(new ErrorResponse { Message = "Email already exists" });
            }

            try
            {
                var response = await adminService.RegisterAsync(model);

                if (response == null)
                {
                    return BadRequest();
                }

                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest model)
        {
            if (model == null || string.IsNullOrWhiteSpace(model.Email) || string.IsNullOrWhiteSpace(model.Password))
            {
                return BadRequest();
            }

            if (!EmailValidator.IsValidEmail(model.Email))
            {
                return BadRequest(new ErrorResponse { Message = "Invalid Email" });
            }

            try
            {
                var response = await adminService.LoginAsync(model);

                if (response == null)
                {
                    return BadRequest(new ErrorResponse { Message = "Username or password is incorrect" });
                }

                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
