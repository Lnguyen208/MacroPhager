using MacroPhager.Server.DTOs.Accounts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace MacroPhager.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly MacroPhagerContext _macrophagercontext;
         
        public AccountController(MacroPhagerContext macrophagercontext)
        {
            _macrophagercontext = macrophagercontext;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(IFormFile imageFile, IFormCollection data)
        {
            // data being sent should have following parameters:
            // username, first_name, last_name, email, password, macro_goals, tdee, img_type

            // 1 :: Check if username is taken
            var username = new SqlParameter("username", data["username"]);
            var existingUsername = _macrophagercontext.Set<Account>().FromSqlRaw($"SELECT * FROM [Account] WHERE username = @username", username);
            if (existingUsername.First() != null) { return BadRequest("Username has already been taken."); }

            // 2 :: Add New Account to DB
            var newAcccount = new Account
            {

            }
            var imgFile = imageFile;
            return Ok("aye");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(Login credentials)
        {
            var username = new SqlParameter("username", credentials.username);
            var password = new SqlParameter("password", credentials.password);

            var verification = _macrophagercontext.Set<Account>().FromSqlRaw($"SELECT * FROM [Account] WHERE username = @username AND password = @password", username, password);
            if (verification.First() == null) return BadRequest("Incorrect Login Credentials");

            return Ok(verification.First()); // Since there is no middleware atm for authentication, returning user's info for now.
        }

        [HttpPost("userprofile")]
        public async Task<IActionResult> GetUserProfile(string username)
        {
            // This is for the user profile area.
            // Complicated Part: Profile Picture?
            // THIS IS UNIVERSAL API for getting BOTH user and friend's profiles
            return Ok("sadge");
        }

        [HttpPost("friendlist")]
        public async Task<IActionResult> GetFriendList(string username)
        {
            // same vein of complicated as profile_picture
            return Ok("sadge");
        }
    }
}
