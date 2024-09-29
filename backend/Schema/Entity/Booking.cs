using backend.Schema.Enum;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Schema.Entity
{
    public class Booking : AbstractRecord
    {
        public BookingType Type { get; set; }
        public int UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }
        public int? VehicleId { get; set; }
        [ForeignKey(nameof(VehicleId))]
        public Vehicle? Vehicle { get; set; }

        // Pickup location
        public string? PickUpLocation { get; set; }  // Optional: start address
        public decimal? PickUpLatitude { get; set; }
        public decimal? PickUpLongitude { get; set; }
        public DateTime? PickUpTime { get; set; }  // Time when the journey starts

        // End location
        public string? DropOffLocation { get; set; }  // Optional: end address
        public decimal? DropOffLatitude { get; set; }
        public decimal? DropOffLongitude { get; set; }
        public DateTime? DropOffTime { get; set; }  // Time when the journey ends

        // Additional properties
        public decimal? Distance { get; set; }  // Optional: total distance of the journey
        public TimeSpan? Duration { get; set; } // Optional: total duration of the journey

        public decimal? Price { get; set; }
        public BookingStatus Status { get; set; }

        [InverseProperty(nameof(UserFeedback.Booking))]
        public UserFeedback? UserFeedback { get; set; }
        [InverseProperty(nameof(DriverFeedback.Booking))]
        public DriverFeedback? DriverFeedback { get; set; }
    }
}
