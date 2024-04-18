
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
public enum AccountType
{
    Free, Premium
}

namespace MacroPhager.Server
{
    public class MacroPhagerContext : DbContext
    {
        public virtual DbSet<Account> Accounts { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Friend> Friends { get; set; }
        public virtual DbSet<FoodItem> FoodItems { get; set; }
        public virtual DbSet<DailyLog> DailyLogs { get; set; }
        public virtual DbSet<LoggedFood> LoggedFoods { get; set; }
        public virtual DbSet<Meal> Meals { get; set; }
        public virtual DbSet<MealFood> MealFoods { get; set; }
        public virtual DbSet<Post> Posts { get; set; }
        public virtual DbSet<PostedFood> PostedFoods { get; set; }
        public virtual DbSet<Timeline> Timelines { get; set; } 


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

        [Required, StringLength(100, MinimumLength = 8, ErrorMessage = "Must be 8-100 characters")]
        public string password { get; set; }

        [JsonIgnore]
        public AccountType acct_type { get; set;}

        [JsonIgnore, StringLength(36, MinimumLength = 36)]
        public string user_id { get; set; }

        [JsonIgnore, ForeignKey("user_id")]
        public User User { get; set; }
    }

    public class User
    {
        [Required, Key, JsonIgnore, StringLength(36, MinimumLength = 36)]
        public string user_id { get; set; }

        [Required, StringLength(100, MinimumLength = 3, ErrorMessage = "Must be 3-100 characters")]
        public string first_name { get; set; }

        [Required, StringLength(100, MinimumLength = 3, ErrorMessage = "Must be 3-100 characters")]
        public string last_name { get; set; }

        [Required, StringLength(100, MinimumLength = 3, ErrorMessage = "Must be 3-100 characters")]
        public string display_name { get; set; }

        [Required]
        [RegularExpression("([0-9][0-9]%[0-9][0-9]%[0-9]%)", ErrorMessage = "Form must be FF%CC%PP%")]
        public string macro_goal { get; set; }

        [Required] // need to annotate to make smaller (limit range?)
        public float tdee { get; set;}

        [JsonIgnore]
        public ICollection<Account> Accounts { get; set; }
    }

    // Friend list is tied to account, thus use PK of Account
    public class Friend
    {
        [Key, Required, StringLength(100, MinimumLength = 3)]
        public string username { get; set; }

        [JsonIgnore, ForeignKey("username")]
        public Account Account { get; set; }

        [Required, StringLength(36, MinimumLength = 36)]
        public string friend_id { get; set; }

        [JsonIgnore, ForeignKey("friend_id")]
        public User User { get; set; }
    }

    public class FoodItem
    {
        [Key, Required, StringLength(36, MinimumLength = 36)]
        public string food_id { get; set; } // GUID

        [Required, StringLength(100, MinimumLength = 3)]
        public string food_name { get; set; }

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

    }

    public class DailyLog
    {
        [Key, Required, StringLength(36, MinimumLength = 36)]
        public string log_id { get; set; } // GUID

        [Required, JsonIgnore, StringLength(36, MinimumLength = 36)]
        public string user_id { get; set; }

        [Required]
        public DateOnly date { get; set; }
    }

    public class LoggedFood
    {
        [Key, Required, StringLength(36, MinimumLength = 36)]
        public string log_id { get; set; }

        [Required, JsonIgnore, StringLength(36, MinimumLength = 36)]
        public string food_id { get; set; }

        [Required]
        public float serving_logged { get; set; }

        [Required]
        public TimeOnly time_logged { get; set; }

    }

    public class Meal
    {
        [Key, Required, StringLength(36, MinimumLength = 36)]
        public string meal_id { get; set; }

        [Required, JsonIgnore, StringLength(36, MinimumLength = 36)]
        public string user_id { get; set; }

        [Required, StringLength(3, MinimumLength = 20)]
        public string name { get; set; }
    }

    public class MealFood
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; } // Not used in SQL queries. Just a surrogate.

        [Required, StringLength(36, MinimumLength = 36)]
        public string meal_id { get; set; }

        [Required, JsonIgnore, StringLength(36, MinimumLength = 36)]
        public string food_id { get; set; }

        [Required]
        public float saved_serving { get; set; }
    }

    public class Post
    {
        [Key, Required, StringLength(36, MinimumLength = 36)]
        public string post_id { get; set; }

        [Required]
        public DateTime time_stamp { get; set; }

        [Required, StringLength(50, MinimumLength = 10)]
        public string title { get; set; }

        [Required, StringLength(500, MinimumLength = 10)]
        public string description { get; set; }

        [Required, JsonIgnore, StringLength(36, MinimumLength = 36)]
        public string user_id { get; set; }
    }

    public class PostedFood
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; } // surrogate. Not used in SQL queries.

        [Required, StringLength(36, MinimumLength = 36)]
        public string post_id { get; set; }

        [Required, StringLength(36, MinimumLength = 36)]
        public string log_id { get; set; }

        [Required, StringLength(36, MinimumLength = 36)]
        public string food_id { get; set; }
    }

    public class Timeline
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; } // surrogate. Not used in SQL queries.

        [Required, StringLength(36, MinimumLength = 36)]
        public string user_id { get; set; }

        [Required, StringLength(36, MinimumLength = 36)]
        public string post_id { get; set; }
    }
}
