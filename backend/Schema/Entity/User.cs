using backend.Schema.Enum;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace backend.Schema.Entity
{
    public class User : AbstractRecord
    {
        public UserRole Role { get; set; }
        public string? Email { get; set; }
        public string? Username { get; set; }
        //[JsonIgnore]
        public string? Password { get; set; }

        public string? Name { get; set; }
        public string? MobileNo { get; set; }

        //location
        public decimal? Latitude { get; set; }
        public decimal? Longitude { get; set; }

        public DriverState? DriverState { get; set; }

        [InverseProperty(nameof(Vehicle.Driver))]
        public ICollection<Vehicle> Vehicles { get; set; } = [];
        [InverseProperty(nameof(Booking.User))]
        public ICollection<Booking> Bookings { get; set; } = [];
        [InverseProperty(nameof(PasswordReset.User))]
        public ICollection<PasswordReset> PasswordResets { get; set; } = [];

        //User
        [InverseProperty(nameof(User.CreatedUser))]
        public ICollection<User> CreatedUsers { get; set; } = [];
        [InverseProperty(nameof(User.LastModifiedUser))]
        public ICollection<User> LastModifiedUsers { get; set; } = [];
        [InverseProperty(nameof(User.DeletedUser))]
        public ICollection<User> DeletedUsers { get; set; } = [];

        //PasswordReset
        [InverseProperty(nameof(PasswordReset.CreatedUser))]
        public ICollection<PasswordReset> CreatedPasswordResets { get; set; } = [];
        [InverseProperty(nameof(PasswordReset.LastModifiedUser))]
        public ICollection<PasswordReset> LastModifiedPasswordResets { get; set; } = [];
        [InverseProperty(nameof(PasswordReset.DeletedUser))]
        public ICollection<PasswordReset> DeletedPasswordResets { get; set; } = [];

        //VehicleType
        [InverseProperty(nameof(VehicleType.CreatedUser))]
        public ICollection<VehicleType> CreatedVehicleTypes { get; set; } = [];
        [InverseProperty(nameof(VehicleType.LastModifiedUser))]
        public ICollection<VehicleType> LastModifiedVehicleTypes { get; set; } = [];
        [InverseProperty(nameof(VehicleType.DeletedUser))]
        public ICollection<VehicleType> DeletedVehicleTypes { get; set; } = [];

        //Vehicle
        [InverseProperty(nameof(Vehicle.CreatedUser))]
        public ICollection<Vehicle> CreatedVehicles { get; set; } = [];
        [InverseProperty(nameof(Vehicle.LastModifiedUser))]
        public ICollection<Vehicle> LastModifiedVehicles { get; set; } = [];
        [InverseProperty(nameof(Vehicle.DeletedUser))]
        public ICollection<Vehicle> DeletedVehicles { get; set; } = [];

        //Booking
        [InverseProperty(nameof(Booking.CreatedUser))]
        public ICollection<Booking> CreatedBookings { get; set; } = [];
        [InverseProperty(nameof(Booking.LastModifiedUser))]
        public ICollection<Booking> LastModifiedBookings { get; set; } = [];
        [InverseProperty(nameof(Booking.DeletedUser))]
        public ICollection<Booking> DeletedBookings { get; set; } = [];

        //UserFeedback
        [InverseProperty(nameof(UserFeedback.CreatedUser))]
        public ICollection<UserFeedback> CreatedUserFeedbacks { get; set; } = [];
        [InverseProperty(nameof(UserFeedback.LastModifiedUser))]
        public ICollection<UserFeedback> LastModifiedUserFeedbacks { get; set; } = [];
        [InverseProperty(nameof(UserFeedback.DeletedUser))]
        public ICollection<UserFeedback> DeletedUserFeedbacks { get; set; } = [];

        //DriverFeedback
        [InverseProperty(nameof(DriverFeedback.CreatedUser))]
        public ICollection<DriverFeedback> CreatedDriverFeedbacks { get; set; } = [];
        [InverseProperty(nameof(DriverFeedback.LastModifiedUser))]
        public ICollection<DriverFeedback> LastModifiedDriverFeedbacks { get; set; } = [];
        [InverseProperty(nameof(DriverFeedback.DeletedUser))]
        public ICollection<DriverFeedback> DeletedDriverFeedbacks { get; set; } = [];
        
    }
}
