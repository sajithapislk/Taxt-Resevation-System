using backend.Helpers;
using backend.Schema.Model;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriversController : ControllerBase
    {
        private readonly IAuthService authService;
        private readonly IDriverService driverService;

        public DriversController(
            IAuthService authService,
            IDriverService driverService
        )
        {
            this.authService = authService;
            this.driverService = driverService;
        }

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterRequest model)
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
                var response = await driverService.RegisterAsync(model);

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
                var response = await driverService.LoginAsync(model);

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
