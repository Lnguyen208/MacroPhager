using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace MacroPhager.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        //private readonly MacroPhagerContext _macrophagercontext;

        //public UserController(MacroPhagerContext macrophagercontext)
        //{
        //    _macrophagercontext = macrophagercontext;
        //}
        public UserController()
        {
            
        }


        //[HttpGet("userprofile")]
        //public async Task<IActionResult> GetUserProfile()
        //{
        //    // get user id from httpcontext
        //    var user_id = new SqlParameter("user_id", "lol");
        //    var userprofile = _macrophagercontext.Set<User>().FromSqlRaw($"SELECT first_name, last_name, display_name, macro_goal, tdee FROM [User] WHERE user_id = @user_id", user_id);

        //    return Ok(userprofile.First());
        //}

        [HttpPost("register")]
        public async Task<IActionResult> Register(IFormFile imageFile, IFormCollection data)
        {
            var itemInfo = data["info"];
            var imgFile = imageFile;

            await Console.Out.WriteLineAsync(itemInfo);

            var items = itemInfo.First().Split(",");
            var itemLength = items.Length;
            if (itemLength > 6)
            {
                await Console.Out.WriteLineAsync("this is a new user");
            }
            else
            {
                await Console.Out.WriteLineAsync("this is a new food item");
            }

            return Ok("in progress");
        }
    }
}
