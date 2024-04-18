using System.ComponentModel.DataAnnotations;

namespace MacroPhager.Server.DTOs.Foods
{
    public class NewFoodItem
    {
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
}
