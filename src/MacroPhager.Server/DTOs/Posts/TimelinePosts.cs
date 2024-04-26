using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MacroPhager.Server.DTOs.Posts
{
    public class TimelinePosts
    {
        public string post_id { get; set; }

        public string title { get; set; }

        public string description { get; set; }

        public string posted_by { get; set; }

        public DateTime time_stamp { get; set; }

        public byte[] poster_picture { get; set; }

        public string img_type { get; set; }  
    }
}
