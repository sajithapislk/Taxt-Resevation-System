using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Schema.Entity
{
    public class DriverFeedback : AbstractRecord
    {
        public int BookingId { get; set; }
        [ForeignKey(nameof(BookingId))]
        public Booking Booking { get; set; }

        public int Rate { get; set; }
        public string Feedback { get; set; }
    }
}
