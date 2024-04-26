using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MacroPhager.Server.DTOs.Accounts
{
    public class ProfileResponse
    {
        public string username { get; set; }
        public string email { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public float macro_fat { get; set; }
        public float macro_carb { get; set; }
        public float macro_protein { get; set; }
        public float tdee { get; set; }
        public byte[] profile_picture { get; set; }
        public string img_type { get; set; }
    }
}
