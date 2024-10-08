using backend.Helpers;
using backend.Schema.Enum;
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

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var response = await driverService.GetAllAsync();
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
                var response = await driverService.GetAsync(id);
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

                var response = await driverService.UpdateAsync(id, model);
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
                var response = await driverService.DeleteAsync(id);
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

        [HttpPut("{id}/state")]
        [Authorize]
        public async Task<IActionResult> UpdateState([FromRoute] int id, [FromBody] DriverState state)
        {
            if (!Enum.IsDefined(typeof(DriverState), state))
            {
                return BadRequest();
            }

            try
            {
                var response = await driverService.UpdateStateAsync(id, state);
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
    }
}
