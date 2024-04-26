using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MacroPhager.Server.DTOs.Accounts
{
    public class Login
    {
        public string username { get; set; }

        public string password { get; set; }
    }
}
