using MacroPhager.Server.DTOs.Accounts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using MacroPhager.Server.Helpers;
using System.IO.Compression;
using Microsoft.AspNetCore.Http.HttpResults;

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
            var checkUsername = new SqlParameter("username", data["username"].ToString());
            var existingUsername = _macrophagercontext.Set<Account>().FromSqlRaw($"SELECT * FROM [Accounts] WHERE username = @username", checkUsername);
            if (existingUsername.FirstOrDefault() != null) { return BadRequest("Username has already been taken."); }

            var imgFile = imageFile;
            // 2 :: Add New Account to DB
            var newAcct = new Account()
            {
                username = data["username"],
                email = data["email"],
                password = data["password"],
                first_name = data["first_name"],
                last_name = data["last_name"],
                macro_goal = data["macro_goals"],
                tdee = float.Parse(data["tdee"]),
                img_type = data["img_type"],
            };

            using (var memoryStream = new MemoryStream())
            {
                await imageFile.CopyToAsync(memoryStream);
                if (memoryStream.Length < 2097152)
                {
                    newAcct.profile_picture = memoryStream.ToArray();
                    _macrophagercontext.Set<Account>().Add(newAcct);
                    await _macrophagercontext.SaveChangesAsync();
                }
                else
                {
                    return BadRequest("Image Upload too large");
                }
            }
            return Ok(newAcct);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(Login credentials)
        {
            var username = new SqlParameter("username", credentials.username);
            var password = new SqlParameter("password", credentials.password);

            var verification = _macrophagercontext.Set<Account>().FromSqlRaw($"SELECT * FROM [Accounts] WHERE username = @username AND password = @password", username, password);
            if (verification.FirstOrDefault() == null) return BadRequest("Incorrect Login Credentials");

            return Ok(verification.First()); // Since there is no middleware atm for authentication, returning user's info for now.
        }

        // Get any user's user profile info based on username
        [HttpPost("userprofile")]
        public async Task<IActionResult> GetUserProfile(UserRequest userRequest)
        {
            var u = new SqlParameter("username", userRequest.username);
            var userProfile = _macrophagercontext.Set<Account>().FromSqlRaw($"SELECT * FROM [Accounts] WHERE username = @username", u);

            return Ok(userProfile);
        }

        // Return user's list of friends pfp and username 
        [HttpPost("friendlist")]
        public async Task<IActionResult> GetFriendList(UserRequest userRequest)
        {
            
            return Ok("sadge");
        }

        // Return user's list of friends pfp and username 
        [HttpPost("addfriend")]
        public async Task<IActionResult> AddFriend(UserRequest userRequest)
        {
            try
            {
                var u = new SqlParameter("username", userRequest.username);
                var friendList = _macrophagercontext.Set<Account>().FromSqlRaw($"SELECT [friend_username] AS Friend FROM [Accounts] INNER JOIN [Friend] ON username = @username", u);
                var friendpfp = new List<FriendList>();

                await friendList.ForEachAsync((f) =>
                {
                    var friend = new SqlParameter("friend", f.username);
                    var pfp = _macrophagercontext.Set<Account>().FromSqlRaw($"SELECT * FROM [Accounts] WHERE username = @friend", friend);
                    friendpfp.Add(new FriendList()
                    {
                        friend_name = f.username,
                        friend_pfp = pfp.First().profile_picture,
                    });
                });
                return Ok(friendList);
            } catch(Exception ex) { return BadRequest("internal error"); }
        }
    }
}
