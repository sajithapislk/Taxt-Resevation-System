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
        public int VehicleId { get; set; }
        [ForeignKey(nameof(VehicleId))]
        public Vehicle Vehicle { get; set; }

        // Start location
        public decimal? StartLatitude { get; set; }
        public decimal? StartLongitude { get; set; }
        public DateTime? StartTime { get; set; }  // Time when the journey starts
        public string? StartAddress { get; set; }  // Optional: start address

        // End location
        public decimal? EndLatitude { get; set; }
        public decimal? EndLongitude { get; set; }
        public DateTime? EndTime { get; set; }  // Time when the journey ends
        public string? EndAddress { get; set; }  // Optional: end address

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
