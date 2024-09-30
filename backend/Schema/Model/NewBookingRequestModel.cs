using backend.Helpers;
using backend.Schema.Entity;
using backend.Schema.Enum;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Schema.Model
{
    public class NewBookingRequestModel
    {
        [EnumValidation(typeof(BookingType))]
        public BookingType Type { get; set; } = BookingType.Instant;
        public int UserId { get; set; }
        public int VehicleId { get; set; }

        // Pickup location
        public string PickUpPlace { get; set; }  // Optional: start address
        public double PickUpLongitude { get; set; }
        public double PickUpLatitude { get; set; }

        // End location
        public string DropOffPlace { get; set; }  // Optional: end address
        public double DropOffLongitude { get; set; }
        public double DropOffLatitude { get; set; }
    }
}
