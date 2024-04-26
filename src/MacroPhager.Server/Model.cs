
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace MacroPhager.Server
{
    public class MacroPhagerContext : DbContext
    {
        public virtual DbSet<Account> Accounts { get; set; }
        public virtual DbSet<Friend> Friends { get; set; }
        public virtual DbSet<FoodItem> FoodItems { get; set; }
        public virtual DbSet<DailyLog> DailyLogs { get; set; }
        public virtual DbSet<LoggedFood> LoggedFoods { get; set; }
        public virtual DbSet<Meal> Meals { get; set; }
        public virtual DbSet<MealFood> MealFoods { get; set; }
        public virtual DbSet<Post> Posts { get; set; }


        public string DbPath { get; }
        public MacroPhagerContext(DbContextOptions<MacroPhagerContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder) { 
        
            // generate seeds here

        }
    }

    public class Account
    {
        [Key, Required, StringLength(100, MinimumLength = 3, ErrorMessage = "Must be 3-100 characters")]
        public string username { get; set; }

        [Required, DataType(DataType.EmailAddress), MaxLength(200, ErrorMessage = "Max Length 200 characters")]
        public string email { get; set; }

        [Required, StringLength(100, MinimumLength = 8, ErrorMessage = "Must be 8-100 characters"), JsonIgnore]
        public string password { get; set; }

        [Required, StringLength(100, MinimumLength = 3, ErrorMessage = "Must be 3-100 characters")]
        public string first_name { get; set; }

        [Required, StringLength(100, MinimumLength = 3, ErrorMessage = "Must be 3-100 characters")]
        public string last_name { get; set; }

        [Required]
        [RegularExpression("([0-9][0-9]%[0-9][0-9]%[0-9]%)", ErrorMessage = "Form must be FF%CC%PP%")]
        public string macro_goal { get; set; }

        [Required] // need to annotate to make smaller (limit range?)
        public float tdee { get; set; }

        public byte[] profile_picture { get; set; }

        public string img_type {  get; set; }

        [JsonIgnore]
        public ICollection<Friend> Friends { get; set; }
        [JsonIgnore]
        public ICollection<FoodItem> FoodItems { get; set; }
        [JsonIgnore]
        public ICollection<DailyLog> DailyLogs { get; set; }
        [JsonIgnore]
        public ICollection<Meal> Meals { get; set; }
        [JsonIgnore]
        public ICollection<Post> Posts { get; set; }

    }

    // Friend list is tied to account, thus use PK of Account
    public class Friend
    {
        [Key, Required, StringLength(100, MinimumLength = 3)]
        public string username { get; set; }

        [JsonIgnore, ForeignKey("username")]
        public Account Account { get; set; }

        [Required, StringLength(100, MinimumLength = 3)]
        public string friend_username { get; set; }
        // EFC prevents FK to self. TODO: Add Validator for this column.
        // Bandaid Fix: Check needed during Insert/Deletes. 
        // 1) Cannot add yourself
        // 2) Cannot add the same friend you already added
        // 3) If user deletes account OR friend deletes their account, entries associated with username(s) should delete
    }

    public class FoodItem
    {
        [Key, Required, StringLength(36, MinimumLength = 36)]
        public string food_id { get; set; } // GUID

        [Required, StringLength(100, MinimumLength = 3)]
        public string created_by { get; set } // User's Personal Food Repo. Items are only owned by the user.

        [JsonIgnore, ForeignKey("created_by")]
        public Account Account { get; set; }

        [Required, StringLength(100, MinimumLength = 3)]
        public string food_description { get; set; }

        [Required]
        public float serving_size { get; set; }

        [Required]
        public float calories { get; set; }

        [Required]
        public float fat { get; set; }

        [Required]
        public float carbohydrate { get; set; }

        [Required]
        public float protein { get; set; }

        [JsonIgnore]
        public ICollection<DailyLog> DailyLogs { get; set; }
        [JsonIgnore]
        public ICollection<LoggedFood> LoggedFoods { get; set; }
        [JsonIgnore]
        public ICollection<MealFood> MealFoods { get; set; }

    }

    public class DailyLog
    {
        [Key, Required, StringLength(36, MinimumLength = 36)]
        public string log_id { get; set; } // GUID

        [Required, JsonIgnore, StringLength(36, MinimumLength = 36)]
        public string username { get; set; }

        [JsonIgnore, ForeignKey("username")]
        public Account Account { get; set; }

        [Required]
        public DateOnly date { get; set; } // Use this to also get last 5 days

        [JsonIgnore]
        public ICollection<LoggedFood> LoggedFoods { get; set; }
    }

    public class LoggedFood
    {
        [Required, StringLength(36, MinimumLength = 36)]
        public string logged_food_id { get; set; }

        [Required, StringLength(36, MinimumLength = 36)]
        public string log_id { get; set; }

        [JsonIgnore, ForeignKey("log_id")]
        public DailyLog DailyLog { get; set; }

        // cannot guarentee unique because of business rules:
        // User should be able to log 2 instances of the same food item on the same day
        [Required, JsonIgnore, StringLength(36, MinimumLength = 36)]
        public string food_id { get; set; }

        [JsonIgnore, ForeignKey("food_id")]
        public FoodItem FoodItem { get; set; }

        [Required]
        public float logged_serving { get; set; }

    }
    
    public class Meal
    {
        [Key, Required, StringLength(36, MinimumLength = 36)]
        public string meal_id { get; set; }

        [Required, JsonIgnore, StringLength(36, MinimumLength = 36)]
        public string created_by { get; set; }

        [JsonIgnore, ForeignKey("created_by")]
        public Account Account { get; set; }

        [Required, StringLength(3, MinimumLength = 20)]
        public string name { get; set; }

        [JsonIgnore]
        public ICollection<MealFood> MealFoods { get; set; }

    }

    public class MealFood
    {
        // Refer to LoggedFood Business Rules.
        [Key, Required, StringLength(36, MinimumLength = 36)]
        public int meal_food_id { get; } 

        [Required, StringLength(36, MinimumLength = 36)]
        public string meal_id { get; set; }

        [JsonIgnore, ForeignKey("meal_id")]
        public Meal Meal { get; set; }

        [Required, JsonIgnore, StringLength(36, MinimumLength = 36)]
        public string food_id { get; set; }

        [JsonIgnore, ForeignKey("food_id")]
        public FoodItem FoodItem { get; set; }

        [Required]
        public float saved_serving { get; set; }
    }

    // Timeline logic is handled by bach end and front end logic. Only Needs this post table to get needed info.
    public class Post
    {
        [Key, Required, StringLength(36, MinimumLength = 36)]
        public string post_id { get; set; }

        [Required, StringLength(50, MinimumLength = 10)]
        public string title { get; set; }

        [Required, StringLength(500, MinimumLength = 10)]
        public string description { get; set; }

        [Required, JsonIgnore, StringLength(36, MinimumLength = 36)]
        public string posted_by { get; set; }

        [JsonIgnore, ForeignKey("posted_by")]
        public Account Account { get; set; }

        [Required]
        public DateTime time_stamp { get; set; }
    }
}
