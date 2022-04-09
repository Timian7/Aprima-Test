using Aprima.Test.Application.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Aprima.Test.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        public UserProfileController()
        {

        }

        [HttpGet("{}")]
        public async Task<IActionResult> Get()
        {

        }

        [HttpPost]
        public async Task<IActionResult> Post(UserProfile model)
        {

        }
    }
}
