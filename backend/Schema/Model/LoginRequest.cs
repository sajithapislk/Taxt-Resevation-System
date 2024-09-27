using backend.Schema.Enum;
using System.ComponentModel;

namespace backend.Schema.Model
{
    public class LoginRequest
    {
        [DefaultValue("System")]
        public required string Email { get; set; }

        [DefaultValue("System")]
        public required string Password { get; set; }
        public UserRole? Role { get; set; }
    }
}
