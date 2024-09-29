using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Schema.Entity
{
    public class Vehicle : AbstractRecord
    {
        public int DriverId { get; set; }
        [ForeignKey(nameof(DriverId))]
        public User Driver { get; set; }

        public int VehicleTypeId { get; set; }
        [ForeignKey(nameof(VehicleTypeId))]
        public VehicleType VehicleType { get; set; }

        public decimal CostPerKm { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
        public string VehicleNumber { get; set; }
        public int PassengerSeat { get; set; }
        public bool IsAvailableAC { get; set; }
        public decimal MaxLoad { get; set; }

        [InverseProperty(nameof(Booking.Vehicle))]
        public ICollection<Booking> Bookings { get; set; } = [];
    }
}
