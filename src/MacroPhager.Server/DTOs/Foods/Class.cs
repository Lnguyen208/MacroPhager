using Microsoft.Identity.Client;

namespace MacroPhager.Server.DTOs.Foods
{
    public class FoodRows
    {
        public int Id { get; set; } //index
        public string foodname {  get; set; }
        public float serving { get; set; }

        public float calories { get; set; }
        public float fats {  get; set; } 

        public float carbs { get; set; }

        public float proteins { get; set; }

        public string logged_food_id { get; set; }
    }
}
