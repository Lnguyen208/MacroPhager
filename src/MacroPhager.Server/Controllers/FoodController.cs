using MacroPhager.Server.DTOs.Foods;
using Microsoft.AspNetCore.Mvc;

namespace MacroPhager.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodController : ControllerBase
    {
        private readonly MacroPhagerContext _macrophagercontext;

        public FoodController(MacroPhagerContext macrophagercontext)
        {
            _macrophagercontext = macrophagercontext;
        }

        [HttpPost("addfooditem")]
        public async Task<IActionResult> AddFoodItem(NewFoodItem newFood)
        {
            var insertFood = new FoodItem
            {
                food_id = Guid.NewGuid().ToString(),
                food_name = newFood.food_name,
                serving_size = newFood.serving_size,
                calories = newFood.calories,
                fat = newFood.fat,
                carbohydrate = newFood.carbohydrate,
                protein = newFood.protein,
            };

            _macrophagercontext.Set<FoodItem>().Add(insertFood);
            return Ok("food added");
        }
    }
}
