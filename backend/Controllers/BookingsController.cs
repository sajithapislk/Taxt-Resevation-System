using backend.Helpers;
using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly IBookingService bookingService;

        public BookingsController(
            IBookingService bookingService
        )
        {
            this.bookingService = bookingService;
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            try
            {
                var response = await bookingService.GetAsync(id);
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

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Add([FromBody] NewBookingRequestModel model)
        {
            if (model == null || model.UserId <= 0 || model.VehicleId <= 0 || string.IsNullOrWhiteSpace(model.PickUpPlace) || string.IsNullOrWhiteSpace(model.DropOffPlace))
            {
                return BadRequest();
            }

            try
            {
                var response = await bookingService.AddAsync(model);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] NewBookingRequestModel model)
        {
            if (model == null || model.UserId <= 0 || model.VehicleId <= 0 || string.IsNullOrWhiteSpace(model.PickUpPlace) || string.IsNullOrWhiteSpace(model.DropOffPlace))
            {
                return BadRequest();
            }

            try
            {
                var response = await bookingService.UpdateAsync(id, model);
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
                var response = await bookingService.DeleteAsync(id);
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

        [HttpGet("driver/{driverId}")]
        [Authorize]
        public async Task<IActionResult> GetByDriver([FromRoute] int driverId, [FromQuery] BookingStatus? status)
        {
            if (driverId <= 0)
            {
                return BadRequest();
            }

            try
            {
                var response = await bookingService.GetAllByDriverAsync(driverId, status);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("user/{userId}")]
        [Authorize]
        public async Task<IActionResult> GetByUser([FromRoute] int userId, [FromQuery] BookingStatus? status)
        {
            if (userId <= 0)
            {
                return BadRequest();
            }

            try
            {
                var response = await bookingService.GetAllByUserAsync(userId, status);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("{id}/confirm")]
        [Authorize]
        public async Task<IActionResult> Confirm([FromRoute] int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            try
            {
                var response = await bookingService.ConfirmAsync(id);
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

        [HttpPut("{id}/start")]
        [Authorize]
        public async Task<IActionResult> Start([FromRoute] int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            try
            {
                var response = await bookingService.StartAsync(id);
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

        [HttpPut("{id}/complete")]
        [Authorize]
        public async Task<IActionResult> Complete([FromRoute] int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            try
            {
                var response = await bookingService.CompleteAsync(id);
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

        [HttpPut("{id}/cancel")]
        [Authorize]
        public async Task<IActionResult> Cancel([FromRoute] int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            try
            {
                var response = await bookingService.CancelAsync(id);
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

        [HttpPut("{id}/user-feedback")]
        [Authorize]
        public async Task<IActionResult> AddUserFeedback([FromRoute] int id, [FromBody] NewFeedbackRequestModel model)
        {
            if (id <= 0 || model == null || model.Rate <= 0 || string.IsNullOrWhiteSpace(model.Feedback))
            {
                return BadRequest();
            }

            try
            {
                var response = await bookingService.AddUserFeedbackAsync(id, model);
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

        [HttpPut("{id}/driver-feedback")]
        [Authorize]
        public async Task<IActionResult> AddDriverFeedback([FromRoute] int id, [FromBody] NewFeedbackRequestModel model)
        {
            if (id <= 0 || model == null || model.Rate <= 0 || string.IsNullOrWhiteSpace(model.Feedback))
            {
                return BadRequest();
            }

            try
            {
                var response = await bookingService.AddDriverFeedbackAsync(id, model);
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
