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
    public class VehicleTypesController : ControllerBase
    {
        private readonly IVehicleTypeService vehicleTypeService;

        public VehicleTypesController(
            IVehicleTypeService vehicleTypeService
        )
        {
            this.vehicleTypeService = vehicleTypeService;
        }

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
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

        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            try
            {
                var response = await vehicleTypeService.GetAsync(id);
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
        public async Task<IActionResult> Add([FromBody] NewVehicleTypeRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                if (await vehicleTypeService.IsVehicleTypeNameRegistered(model.Name))
                {
                    return BadRequest(new ErrorResponse { Message = "Vehicle Type Name already registered" });
                }
                var response = await vehicleTypeService.AddAsync(model);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] NewVehicleTypeRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                if (await vehicleTypeService.IsVehicleTypeNameRegistered(id, model.Name))
                {
                    return BadRequest(new ErrorResponse { Message = "Vehicle Type Name already registered" });
                }

                var response = await vehicleTypeService.UpdateAsync(id, model);
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
                var response = await vehicleTypeService.DeleteAsync(id);
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
