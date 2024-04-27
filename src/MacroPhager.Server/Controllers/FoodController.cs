using MacroPhager.Server.DTOs.Accounts;
using MacroPhager.Server.DTOs.Foods;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

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
                food_description = newFood.food_name,
                serving_size = newFood.serving_size,
                calories = newFood.calories,
                fat = newFood.fat,
                carbohydrate = newFood.carbohydrate,
                protein = newFood.protein,
                created_by = newFood.username,
            };

            _macrophagercontext.Set<FoodItem>().Add(insertFood);
            _macrophagercontext.SaveChanges();
            return Ok("food added");
        }

        [HttpPost("removefooditem")]
        public async Task<IActionResult> RemoveFoodItem(NewFoodItem editFood)
        {
            var f = new SqlParameter("food_id", editFood.food_id);
            var editting = _macrophagercontext.Set<FoodItem>().FromSqlRaw($"SELECT * FROM [FoodItems] WHERE [FoodItems].food_id = @food_id", f).First();
            editting.protein = editFood.protein;
            editting.fat = editFood.fat;
            editting.serving_size = editFood.serving_size;
            editting.calories = editFood.calories;
            editting.carbohydrate = editFood.carbohydrate;
            editting.food_description = editFood.food_name;

            _macrophagercontext.Set<FoodItem>().Update(editting);
            return Ok("food editted");
        }

        [HttpPost("editfooditem")]
        public async Task<IActionResult> EditFoodItem(DeleteUpdateFood food_id)
        {

            return Ok("food editted");
        }

        [HttpPost("myfoodrepo")]
        public async Task<IActionResult> GetMyFoodRepo(UserRequest username)
        {
            var u = new SqlParameter("username", username.username);
            var query = _macrophagercontext.Set<FoodItem>().FromSqlRaw($"SELECT * FROM [FoodItems] WHERE [FoodItems].created_by = @username", u).ToList();

            return Ok(query);        
        }

    }
}
