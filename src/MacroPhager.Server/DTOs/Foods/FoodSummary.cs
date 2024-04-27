namespace MacroPhager.Server.DTOs.Foods
{
    public class FoodSummary
    {
        public int id { get; set; }
        public string logged_food_id { get; set; }
        public string foodname {  get; set; }
        public float serving {  get; set; } // the OG values are here
        public float calories { get; set; }
        public float fats {  get; set; }
        public float carbs {  get; set; }
        public float protein { get; set; }
        public float logged_serving {  get; set; } // uses for ration
    }

}
