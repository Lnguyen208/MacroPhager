using System.ComponentModel.DataAnnotations;

namespace MacroPhager.Server.DTOs.Foods
{
    public class NewFoodItem
    {
     
        public string food_name { get; set; }

        public float serving_size { get; set; }


        public float calories { get; set; }

        public float fat { get; set; }

    
        public float carbohydrate { get; set; }

        public float protein { get; set; }

        public string? food_id {  get; set; } // not needed outside of edit food items
        public string username { get; set; }
    }

}
