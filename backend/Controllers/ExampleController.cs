using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExampleController : Controller
    {
        [HttpGet("hello")]
        public IActionResult GetGreeting()
        {
            return Ok(new { message = "Hello from Web API!" });
        }
    }
}