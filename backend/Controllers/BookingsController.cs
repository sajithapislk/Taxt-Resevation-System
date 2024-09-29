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
    public class BookingsController : ControllerBase
    {
        //private readonly IAuthService authService;
        //private readonly IUserService userService;

        //public BookingsController(
        //    IAuthService authService,
        //    IUserService userService
        //)
        //{
        //    this.authService = authService;
        //    this.userService = userService;
        //}

        //[HttpPost("initiate")]
        //public async Task<IActionResult> Register(BookingInitiateRequest model)
        //{
        //    if (model == null || string.IsNullOrWhiteSpace(model.Email) || string.IsNullOrWhiteSpace(model.Password) || string.IsNullOrWhiteSpace(model.MobileNo))
        //    {
        //        return BadRequest();
        //    }

        //    if (await authService.IsEmailRegistered(model.Email))
        //    {
        //        return BadRequest(new ErrorResponse { Message = "Email already exists" });
        //    }

        //    if (await authService.IsMobileNoRegistered(model.MobileNo))
        //    {
        //        return BadRequest(new ErrorResponse { Message = "Mobile No already exists" });
        //    }

        //    try
        //    {
        //        var response = await userService.RegisterAsync(model);

        //        if (response == null)
        //        {
        //            return BadRequest();
        //        }

        //        return Ok(response);
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500);
        //    }
        //}


    }
}
