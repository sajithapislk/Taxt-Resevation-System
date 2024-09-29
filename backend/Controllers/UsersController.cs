using backend.Helpers;
using backend.Schema.Entity;
using backend.Schema.Model;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IAuthService authService;
        private readonly IUserService userService;

        public UsersController(
            IAuthService authService,
            IUserService userService
        )
        {
            this.authService = authService;
            this.userService = userService;
        }

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok();
        }

        [HttpGet("auth")]
        [Authorize]
        public IActionResult Auth()
        {
            return Ok();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegisterRequest model)
        {
            if (model == null || string.IsNullOrWhiteSpace(model.Email) || string.IsNullOrWhiteSpace(model.Password) || string.IsNullOrWhiteSpace(model.MobileNo))
            {
                return BadRequest();
            }

            if (await authService.IsEmailRegistered(model.Email))
            {
                return BadRequest(new ErrorResponse { Message = "Email already exists" });
            }

            if (await authService.IsMobileNoRegistered(model.MobileNo))
            {
                return BadRequest(new ErrorResponse { Message = "Mobile No already exists" });
            }

            try
            {
                var response = await userService.RegisterAsync(model);

                if (response == null)
                {
                    return BadRequest();
                }

                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500);
            }
        }

        [HttpPost("register-guest")]
        public async Task<IActionResult> RegisterGuest(UserRegisterRequest model)
        {
            if (model == null || string.IsNullOrWhiteSpace(model.MobileNo))
            {
                return BadRequest();
            }

            if (await authService.IsMobileNoRegistered(model.MobileNo))
            {
                return BadRequest(new ErrorResponse { Message = "Mobile No already exists" });
            }

            try
            {
                var response = await userService.RegisterGuestAsync(model);

                if (response == null)
                {
                    return BadRequest();
                }

                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest model)
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
                var response = await userService.LoginAsync(model);

                if (response == null)
                {
                    return BadRequest(new ErrorResponse { Message = "Username or password is incorrect" });
                }

                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500);
            }
        }

    }
}
