using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace MacroPhager.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostController : ControllerBase
    {
        private readonly MacroPhagerContext _macrophagercontext;

        public PostController(MacroPhagerContext macrophagercontext)
        {
            _macrophagercontext = macrophagercontext;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreatePost()
        {

            return Ok("aye");
        }

        // User can only edit or delete their own posts
        [HttpPost("edit")]
        public async Task<IActionResult> EditPost()
        {

            return Ok("Updated post");
        }

        [HttpPost("remove")]
        public async Task<IActionResult> RemovePost()
        {

            return Ok("yeeted post");
        }

        // Friendly Posts

        [HttpPost("getrecent")]
        public async Task<IActionResult> GetRecentPosts()
        {
            // 1) Query all user's friends, input: username, output: list of friend's usernames
            // 2) For each friend's {username, pfp, image type}, retrieve all posts related to the friend
            // Potential Data Structure:
            // HashMap, Key='friend username', Value='List<Post>()'

            // (Latest Posts Only. Within the month). To get Older posts. User needs to trigger event via a button or something to call the other API for older content.

            return Ok("got user friend's posts.");
            // Please store friend list (the keys) on front end to reuse if the user wants specific date
        }

        [HttpPost("getbydate")]
        public async Task<IActionResult> GetByDate(string dateStart, string dateEnd, string? frinedID)
        {
            // 1) same as GetRecentPosts() but retrieves all posts from start - end date
            // 2) optional friendID to only query for specific friend.

            return Ok("bruh");
        }

        // Liked Posts? on Back log
    }
}
