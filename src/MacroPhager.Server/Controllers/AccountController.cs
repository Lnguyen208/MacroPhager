﻿using MacroPhager.Server.DTOs.Accounts;
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
            var r = userProfile.FirstOrDefault();
            var splitmacros = r.macro_goal.Split('%');
            var response = new ProfileResponse()
            {
                username = r.username,
                email = r.email,
                first_name = r.first_name,
                last_name = r.last_name,
                macro_fat = float.Parse(splitmacros[0]),
                macro_carb = float.Parse(splitmacros[1]),
                macro_protein = float.Parse(splitmacros[2]),
                tdee = r.tdee,
                profile_picture = r.profile_picture,
                img_type = r.img_type,
            };
            return Ok(response);
        }

        // Return user's list of friends pfp and username 
        [HttpPost("friendlist")]
        public async Task<IActionResult> GetFriendList(UserRequest userRequest)
        {
            try
            {
                var u = new SqlParameter("username", userRequest.username);
                var friendList = _macrophagercontext.Set<Friend>().FromSqlRaw($"SELECT * FROM [Friends] WHERE [Friends].username = @username", u).ToList();
                var friendpfp = new List<FriendList>();
                var count = 0;

                friendList.ForEach((f) =>
                {
                    var friend = new SqlParameter("friend", f.friend_username);
                    var pfp = _macrophagercontext.Set<Account>().FromSqlRaw($"SELECT * FROM [Accounts] WHERE username = @friend", friend).ToList();
                    friendpfp.Add(new FriendList()
                    {
                        id = count,
                        friend_name = pfp.First().username,
                        friend_pfp = pfp.First().profile_picture,
                        friend_email = pfp.First().email,
                        img_type = pfp.First().img_type,
                    }); ;
                    count++;
                });
                return Ok(friendpfp);
            }
            catch (Exception ex) { return BadRequest("internal error"); }
        }

        // Return user's list of friends pfp and username 
        [HttpPost("addfriend")]
        public async Task<IActionResult> AddFriend(UserRequest userRequest)
        {
            try
            {
                _macrophagercontext.Set<Friend>().Add(new Friend()
                {
                    friendship_id = Guid.NewGuid().ToString(),
                    username = userRequest.username,
                    friend_username = userRequest.friend_username,
                });
                await _macrophagercontext.SaveChangesAsync();

                return Ok(userRequest.friend_username+" has been added.");
            } catch(Exception ex) { return BadRequest("internal error"); }
        }

        // Return user's list of friends pfp and username 
        [HttpPost("removefriend")]
        public async Task<IActionResult> RemoveFriend(UserRequest userRequest)
        {
            try
            {
                var u = new SqlParameter("username", userRequest.username);
                var f = new SqlParameter("friend", userRequest.friend_username);
                var query = _macrophagercontext.Set<Friend>().FromSqlRaw($"SELECT * FROM [Friends] WHERE username = @username AND friend_username = @friend", u, f).First();
                _macrophagercontext.Set<Friend>().Remove(query);
                await _macrophagercontext.SaveChangesAsync();

                return Ok(userRequest.friend_username + " has been removed.");
            }
            catch (Exception ex) { return BadRequest("internal error"); }
        }
    }
}
