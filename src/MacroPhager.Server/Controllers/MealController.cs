using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace MacroPhager.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MealController : ControllerBase
    {
        private readonly MacroPhagerContext _macrophagercontext;

        public MealController(MacroPhagerContext macrophagercontext)
        {
            _macrophagercontext = macrophagercontext;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateMeal()
        {
            // 1) Input should be the meal as an object, mealfood as a list of obj with neccessary info
            // 2) Add Meal Entry First, Then for each obj in the list, add to MealFood
            return Ok("added");
        }

        // User can only edit or delete their own posts
        [HttpPost("edit")]
        public async Task<IActionResult> EditMeal(string meal_id, string changes)
        {
            // Depends on what is being changed actually...
            // Need Meal_id to fetch meal properly,
            // Need DTO for changes. (contains attributes of meal and mealfood, attributes can be null)
            // WELL for now I didnt add a UI for name edit oops.

            return Ok("Updated");
        }

        [HttpPost("remove")]
        public async Task<IActionResult> RemoveMeal(string meal_id)
        {
            // simply remove by PK

            return Ok("yeeted");
        }

        
        // Complicated Since Each Card has total macros profile.
        // WILL need to back load all the data then OR add these attributes to Meals (total calories, total fats, total carbs, total proteins)
        [HttpPost("allmeals")]
        public async Task<IActionResult> GetAllMeals()
        {
           

            return Ok("hmm");

        }
    }
}
