using System.ComponentModel.DataAnnotations;

namespace MacroPhager.Server.DTOs.Posts
{
    public class NewPost
    {
        public string title { get; set; }

       
        public string description { get; set; }

    
        public string posted_by { get; set; }
    }
}
