using backend.Schema.Enum;
using System.Text.Json.Serialization;

namespace backend.Schema.Entity
{
    public class User : AbstractRecord
    {
        public UserRole Role { get; set; }
        public string Email { get; set; }
        public string? Username { get; set; }
        //[JsonIgnore]
        public string Password { get; set; }

        public string? Name { get; set; }
        public string? MobileNo { get; set; }
        public bool IsRegistered { get; set; }

        public DriverState? DriverState { get; set; }
    }
}
