using MacroPhager.Server.DTOs.Accounts;
using MacroPhager.Server.DTOs.Posts;
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
        public async Task<IActionResult> CreatePost(NewPost newpost)
        {
            _macrophagercontext.Add(new Post
            {
                post_id = Guid.NewGuid().ToString(),
                title = newpost.title,
                description = newpost.description,
                posted_by = newpost.posted_by,
                time_stamp = DateTime.Now,
            });

            await _macrophagercontext.SaveChangesAsync();
            return Ok("Post has been added");
        }

        // User can only edit or delete their own posts
        // No UI component atm for this API
        [HttpPost("edit")]
        public async Task<IActionResult> EditPost()
        {
            
            return Ok("Updated post");
        }

        // No UI component atm for this API (seeing user's posts)
        [HttpPost("remove")]
        public async Task<IActionResult> RemovePost()
        {

            return Ok("yeeted post");
        }

        // Friendly Posts

        [HttpPost("getrecent")]
        public async Task<IActionResult> GetRecentFourPost(UserRequest userRequest)
        {
            var u = new SqlParameter("username", userRequest.username);
            var daily = new SqlParameter("dailyposts", DateTime.Now.ToString());
            var dailyend = new SqlParameter("end", DateTime.Now.AddDays(-1).ToString());
            // Query doesn't work on .NET Core but works in SQL Server.
            var friends  = _macrophagercontext.Set<Post>().
                FromSqlRaw($"SELECT TOP(4) * FROM [Posts] WHERE [Posts].posted_by IN (SELECT [Friends].friend_username FROM [Friends] INNER JOIN [Accounts] ON [Friends].username = [Accounts].username WHERE [Friends].username = @username) AND [Posts].time_stamp <= @dailyposts AND [Posts].time_stamp >= @end ORDER BY [Posts].time_stamp DESC", u, daily, dailyend);
            
            var r = friends.ToList();
            return Ok(r);
            
        }

        [HttpPost("getbydate")]
        public async Task<IActionResult> GetByDate(PostsByDate requestinfo)
        {
            // 1) Query all user's friends, input: username, output: list of friend's usernames
            // 2) For each friend's {username, pfp, image type}, retrieve all posts related to the friend
            // Currently hardcoded to past 1 month until I figure out how to do time in Javascript

            var u = new SqlParameter("username", requestinfo.username);
            //var e = new SqlParameter("earliest", requestinfo.earliest);
            //var l = new SqlParameter("latest", requestinfo.latest);
            var early = DateTime.Parse("2024-04-26 12:00:00.0000000");
            var latest = DateTime.Parse("2024-03-26 12:00:00.0000000");
            var e = new SqlParameter("earliest", early);
            var l = new SqlParameter("latest", latest);
            // to get all the posts
            var query1 = _macrophagercontext.Set<Post>()
                .FromSqlRaw($"SELECT * FROM [Posts] WHERE [Posts].posted_by IN (SELECT [Friends].friend_username FROM [Friends] INNER JOIN [Accounts] ON [Friends].username = [Accounts].username WHERE [Friends].username = @username) AND [Posts].time_stamp <= @earliest AND [Posts].time_stamp >= @latest ORDER BY [Posts].time_stamp DESC", u, e, l).ToList();
            // to get friend's pfp

            var response = new List<TimelinePosts>();

            query1.ForEach((p) =>
            {
                var puser = new SqlParameter("poster_username", p.posted_by);
                var res = _macrophagercontext.Set<Account>()
                .FromSqlRaw($"SELECT * FROM [Accounts] WHERE [Accounts].username = @poster_username", puser);
                var acct = res.First();
                response.Add(new TimelinePosts
                {
                    post_id = p.post_id,
                    title = p.title,
                    description = p.description,
                    posted_by = p.posted_by,
                    time_stamp = p.time_stamp,
                    poster_picture = acct.profile_picture,
                    img_type = acct.img_type,
                });
            });

            return Ok(response);
        }

        [HttpPost("getbyid")]
        public async Task<IActionResult> GetById(PostbyId post_id)
        {
            var p = new SqlParameter("post_id", post_id.post_id);
            var query1 = _macrophagercontext.Set<Post>()
                .FromSqlRaw($"SELECT * FROM [Posts] WHERE [Posts].post_id = @post_id", p).ToList();

            return Ok(query1);
        }
    }
}
