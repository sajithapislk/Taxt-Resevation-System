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
    public class VehiclesController : ControllerBase
    {
        private readonly IVehicleService vehicleService;
        private readonly IVehicleTypeService vehicleTypeService;

        public VehiclesController(
            IVehicleService vehicleService,
            IVehicleTypeService vehicleTypeService
        )
        {
            this.vehicleService = vehicleService;
            this.vehicleTypeService = vehicleTypeService;
        }

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            try
            {
                var response = await vehicleService.GetAsync(id);
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
        public async Task<IActionResult> Add([FromBody] NewVehicleRequestModel model)
        {
            if (model == null || model.DriverId <= 0 || model.VehicleTypeId <= 0 || string.IsNullOrWhiteSpace(model.VehicleNumber) || model.PassengerSeats <= 0 || model.CostPerKm <= 0)
            {
                return BadRequest();
            }

            try
            {
                if (await vehicleService.IsVehicleNumberRegistered(model.VehicleNumber))
                {
                    return BadRequest(new ErrorResponse { Message = "Vehicle Number already registered" });
                }
                var response = await vehicleService.AddAsync(model);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] NewVehicleRequestModel model)
        {
            if (id <= 0 || model == null || model.DriverId <= 0 || model.VehicleTypeId <= 0 || string.IsNullOrWhiteSpace(model.VehicleNumber) || model.PassengerSeats <= 0 || model.CostPerKm <= 0)
            {
                return BadRequest();
            }

            try
            {
                if (await vehicleService.IsVehicleNumberRegistered(id, model.VehicleNumber))
                {
                    return BadRequest(new ErrorResponse { Message = "Vehicle Number already registered" });
                }

                var response = await vehicleService.UpdateAsync(id, model);
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
                var response = await vehicleService.DeleteAsync(id);
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

        [HttpPut("{id}/location")]
        [Authorize]
        public async Task<IActionResult> UpdateLocation([FromRoute] int id, [FromBody] LocationModel model)
        {
            if (id <= 0 || model == null || string.IsNullOrWhiteSpace(model.Location))
            {
                return BadRequest();
            }

            try
            {
                var response = await vehicleService.UpdateLocationAsync(id, model);
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

        [HttpGet("types")]
        public async Task<IActionResult> GetAllVehicleTypes()
        {
            try
            {
                var response = await vehicleTypeService.GetAllAsync();
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("driver/{driverId}")]
        public async Task<IActionResult> GetAllVehiclesByDriver([FromRoute] int driverId)
        {
            try
            {
                var response = await vehicleService.GetAllByDriverAsync(driverId);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("nearby")]
        public async Task<IActionResult> GetAllNearbyVehicles([FromQuery] int vehicleTypeId, [FromQuery] double longitude, [FromQuery] double latitude, [FromQuery] double radiusInKm = 3)
        {
            try
            {
                var response = await vehicleService.GetAllNearbyAsync(vehicleTypeId, longitude, latitude, radiusInKm);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

    }
}
