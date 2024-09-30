using backend.Helpers;
using backend.Schema.Enum;
using System.Text.Json.Serialization;

namespace backend.Schema.Model
{
    public class UserRegisterRequest
    {
        [EnumValidation(typeof(UserRole?))]
        public UserRole? Role { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Name { get; set; }
        public string? MobileNo { get; set; }
        [EnumValidation(typeof(DriverState?))]
        public DriverState? DriverState { get; set; }
    }
}
