using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace MacroPhager.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly MacroPhagerContext _macrophagercontext;

        public UserController(MacroPhagerContext macrophagercontext)
        {
            _macrophagercontext = macrophagercontext;
        }


        [HttpGet("userprofile")]
        public async Task<IActionResult> GetUserProfile()
        {
            // get user id from httpcontext
            var user_id = new SqlParameter("user_id", "lol");
            var userprofile = _macrophagercontext.Set<User>().FromSqlRaw($"SELECT first_name, last_name, display_name, macro_goal, tdee FROM [User] WHERE user_id = @user_id", user_id);

            return Ok(userprofile.First());
        }
    }
}
