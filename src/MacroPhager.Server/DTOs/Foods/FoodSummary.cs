namespace MacroPhager.Server.DTOs.Foods
{
    public class FoodSummary
    {
        public string log_id { get; set; }
        public string logged_food_id { get; set; }
        public string food_id {  get; set; }
        public string food_name {  get; set; }
        public float serving_size {  get; set; } // the OG values are here
        public float calories { get; set; }
        public float fat {  get; set; }
        public float carbohydrate {  get; set; }
        public float protein { get; set; }
        public float logged_serving {  get; set; } // uses for ration
    }

}
