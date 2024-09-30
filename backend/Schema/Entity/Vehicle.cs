using backend.Schema.Enum;
using NetTopologySuite.Geometries;
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

        public string VehicleNumber { get; set; }
        public int PassengerSeats { get; set; }
        public decimal CostPerKm { get; set; }
        public string? Color { get; set; }
        public bool? IsAcAvailable { get; set; }
        public string? Description { get; set; }
        public decimal? MaxLoad { get; set; }
        public string? Image { get; set; }
        public VehicleState? State { get; set; }

        //location
        public Point? Location { get; set; }
        public string? Place { get; set; }


        [InverseProperty(nameof(Booking.Vehicle))]
        public ICollection<Booking> Bookings { get; set; } = [];

        [NotMapped]
        public decimal Distance { get; set; }
    }
}
