using backend.Schema.Enum;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace backend.Schema.Model
{
    public class LoginRequest
    {
        [DefaultValue("System")]
        [EmailAddress]
        public required string Email { get; set; }

        [DefaultValue("System")]
        public required string Password { get; set; }
        public string? MobileNo { get; set; }
        public UserRole? Role { get; set; }
    }
}
