using backend.Helpers;
using backend.Schema.Enum;
using NetTopologySuite.Geometries;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace backend.Schema.Model
{
    public class UserRegisterRequestModel
    {
        [EnumValidation(typeof(UserRole?))]
        public UserRole? Role { get; set; }
        [EmailAddress]
        public string? Email { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Name { get; set; }
        //[RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Not a valid phone number")]
        public string? MobileNo { get; set; }
        [EnumValidation(typeof(DriverState?))]
        public DriverState? DriverState { get; set; }

        public string? Image { get; set; }
        public string? Website { get; set; }
        public DateOnly? DateOfBirth { get; set; }
        [EnumValidation(typeof(Sex?))]
        public Sex? Gender { get; set; }
        [EnumValidation(typeof(MaritalStatus?))]
        public MaritalStatus? Status { get; set; }
        public string? Description { get; set; }
        //public LocationModel? Location { get; set; }
    }
}
