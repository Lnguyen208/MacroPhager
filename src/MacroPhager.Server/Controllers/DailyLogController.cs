using MacroPhager.Server.DTOs.Foods;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
namespace MacroPhager.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DailyLogController : ControllerBase
    {
        private readonly MacroPhagerContext _macrophagercontext;

        public DailyLogController(MacroPhagerContext macrophagercontext)
        {
            _macrophagercontext = macrophagercontext;
        }

        // Daily Log is 
        [HttpGet("getdailylog")]
        public async Task<IActionResult> GetDailyLog()
        {
            var today = new SqlParameter("today", DateOnly.FromDateTime(DateTime.Now));
            var log_id = _macrophagercontext.Set<DailyLog>().FromSqlRaw($"SELECT log_id FROM [DailyLog] WHERE date = @today", today);
            var log_id_param = new SqlParameter("log_id", log_id);
            var today_food_ids = _macrophagercontext.Set<LoggedFood>().FromSqlRaw($"SELECT food_id, serving FROM [LoggedFood] WHERE log_id = @log_id", log_id);
            var today_food_summary = new List<FoodSummary>();
            await today_food_ids.ForEachAsync(food_id => {
                Console.WriteLine("hello world");
            });

            return Ok("bruh combine these sql");
        }
    }
}
