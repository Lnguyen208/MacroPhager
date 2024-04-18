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
        public async Task<IActionResult> Register(Registration registration)
        {
            var username = new SqlParameter("username", registration.username);
            // check if username exists
            var existingUsername = _macrophagercontext.Set<Account>().FromSqlRaw($"SELECT * FROM [Account] WHERE username = @username", username);
            if (existingUsername.First() != null) { return BadRequest("Username has already been taken."); }

            var newUser = new User
            {
                user_id = Guid.NewGuid().ToString(),
                first_name = registration.first_name,
                last_name = registration.last_name,
                display_name = registration.display_name,
                macro_goal = registration.macro_goal,
                tdee = registration.tdee,
            };
            _macrophagercontext.Add(newUser);

            var newAccount = new Account
            {
                username = registration.username,
                email = registration.email,
                password = registration.password,
                acct_type = AccountType.Free,
                user_id = newUser.user_id,
            };
            _macrophagercontext.Add(newAccount);
            _macrophagercontext.SaveChanges();

            return Ok("aye");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(Login credentials)
        {
            var username = new SqlParameter("username", credentials.username);
            var password = new SqlParameter("password", credentials.password);

            var verification = _macrophagercontext.Set<Account>().FromSqlRaw($"SELECT * FROM [Account] WHERE username = @username AND password = @password", username, password);
            if (verification.First() == null) return BadRequest("Incorrect Login Credentials");

            // Need to add Account object to HTTPContext
            // Prob need to also return information enough for the user's dashboard? (Current Nutritional Calories and Macros, Timeline, User Profile)
            // the front end components should make the call to endpoints
            return Ok("Login Credentials are correct.");
        }
    }
}
