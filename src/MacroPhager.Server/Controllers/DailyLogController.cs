using MacroPhager.Server.DTOs.Accounts;
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
        [HttpPost("getdailylog")]
        public async Task<IActionResult> GetDailyLog(UserRequest username)
        {
            var today = new SqlParameter("today", DateOnly.FromDateTime(DateTime.Now));
            var log_id = _macrophagercontext.Set<DailyLog>().FromSqlRaw($"SELECT * FROM [DailyLog] WHERE date = @today", today);
            if (log_id.First() == null)
            {
                // Create a new Log
                _macrophagercontext.Set<DailyLog>().Add( new DailyLog() {
                    log_id = Guid.NewGuid().ToString(),
                    username = username.username,
                    date = DateOnly.FromDateTime(DateTime.Now),
                } );
                await _macrophagercontext.SaveChangesAsync();
                return Ok(log_id);
            }
            // there is a log existing
            var log_id_param = new SqlParameter("log_id", log_id.First().log_id);
            var logged_food_ids = _macrophagercontext.Set<LoggedFood>().FromSqlRaw($"SELECT * FROM [LoggedFood] WHERE log_id = @log_id", log_id_param).ToList();
            var today_food_summary = new List<FoodSummary>();

            logged_food_ids.ForEach((lf) =>
            {
                var food = new SqlParameter("food_id", lf.food_id);
                var standard_foods = _macrophagercontext.Set<FoodItem>().FromSqlRaw($"SELECT * FROM [FoodItem] WHERE [FoodItem].food_id = @food_id", food).ToList().First();
                today_food_summary.Add(new FoodSummary()
                {
                    log_id = lf.log_id,
                    logged_food_id = lf.logged_food_id,
                    food_id = lf.food_id,
                    food_name = standard_foods.food_description,
                    serving_size = standard_foods.serving_size,
                    calories = standard_foods.calories,
                    fat = standard_foods.fat,
                    carbohydrate = standard_foods.carbohydrate,
                    protein = standard_foods.protein,
                    logged_serving = lf.logged_serving,
                });
            });

            return Ok(today_food_summary);
        }

        [HttpPost("logfood")]
        public async Task<IActionResult> LogFood(DailyLogID logupdates)
        {
            _macrophagercontext.Set<LoggedFood>().Add(new LoggedFood()
            {
                logged_food_id=Guid.NewGuid().ToString(),
                log_id=logupdates.log_id,
                food_id=logupdates.food_id,
                logged_serving=logupdates.logged_serving,
            });
            _macrophagercontext.SaveChanges();
            return Ok("done");
        }

        [HttpPost("editloggedfood")]
        public async Task<IActionResult> EditLoggedFood()
        {

            return Ok("done");
        }
    }
}
