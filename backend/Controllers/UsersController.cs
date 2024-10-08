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

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var response = await userService.GetAllAsync();
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            try
            {
                var response = await userService.GetAsync(id);
                if (response == null)
                {
                    return NotFound();
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UserRegisterRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                if (await authService.IsMobileNoRegistered(id, model.MobileNo))
                {
                    return BadRequest(new ErrorResponse { Message = "Mobile No already registered" });
                }

                var response = await userService.UpdateAsync(id, model);
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            try
            {
                var response = await userService.DeleteAsync(id);
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("mobile/{mobileNo}")]
        [Authorize]
        public async Task<IActionResult> GetByMobile([FromRoute] string mobileNo)
        {
            try
            {
                var response = await userService.GetByMobileAsync(mobileNo);
                if (response == null)
                {
                    return NotFound();
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterRequestModel model)
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
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("register-guest")]
        public async Task<IActionResult> RegisterGuest([FromBody] UserRegisterRequestModel model)
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
                var response = await userService.LoginAsync(model);

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

        [HttpPost("login-guest")]
        public async Task<IActionResult> LoginGuest([FromBody] LoginRequest model)
        {
            if (model == null || string.IsNullOrWhiteSpace(model.MobileNo))
            {
                return BadRequest();
            }

            try
            {
                var response = await userService.LoginGuestAsync(model);

                if (response == null)
                {
                    return BadRequest(new ErrorResponse { Message = "Mobile No not registered" });
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
