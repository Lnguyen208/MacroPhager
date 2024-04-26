using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MacroPhager.Server.Helpers
{
    public class BufferedSingleFileUploadModel : PageModel
    {
        [BindProperty]
        public BufferedSingleFileUpload FileUpload { get; set; }
    }
    public class BufferedSingleFileUpload
    {
        [Required]
        [Display(Name = "File")]
        public IFormFile FormFile { get; set; }
    }
}
