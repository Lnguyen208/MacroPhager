using Microsoft.Identity.Client;

namespace MacroPhager.Server.DTOs.Foods
{
    public class FDCSearchRequest
    {
        public string search_term { get; set; }

        public string username { get; set; }
    }

    public class FDCSearchResponse
    {
        public string List<> search_results { get; set; }
    }
}
