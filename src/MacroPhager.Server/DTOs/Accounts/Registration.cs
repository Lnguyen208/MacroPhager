using System.ComponentModel.DataAnnotations;

namespace MacroPhager.Server.DTOs.Accounts
{
    public class Registration
    {
        [Required, StringLength(100, MinimumLength = 3, ErrorMessage = "Must be 3-100 characters")]
        public string username { get; set; }

        [Required, StringLength(100, MinimumLength = 8, ErrorMessage = "Must be 8-100 characters")]
        public string password { get; set; }

        [Required, StringLength(100, MinimumLength = 3, ErrorMessage = "Must be 3-100 characters")]
        public string first_name { get; set; }

        [Required, StringLength(100, MinimumLength = 3, ErrorMessage = "Must be 3-100 characters")]
        public string last_name { get; set; }

        [Required, DataType(DataType.EmailAddress), MaxLength(200, ErrorMessage = "Max Length 200 characters")]
        public string email { get; set; }

        [Required, StringLength(100, MinimumLength = 3, ErrorMessage = "Must be 3-100 characters")]
        public string display_name { get; set; }

        [Required]
        [RegularExpression("([0-9][0-9]%[0-9][0-9]%[0-9]%)", ErrorMessage = "Form must be FF%CC%PP%")]
        public string macro_goal { get; set; }

        [Required]
        public float tdee {  get; set; }
    }
}
