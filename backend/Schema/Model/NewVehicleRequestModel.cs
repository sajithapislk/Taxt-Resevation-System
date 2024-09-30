using backend.Helpers;
using backend.Schema.Entity;
using backend.Schema.Enum;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Schema.Model
{
    public class NewVehicleRequestModel
    {
        public int DriverId { get; set; }
        public int VehicleTypeId { get; set; }
        public string VehicleNumber { get; set; }
        public int PassengerSeats { get; set; }
        public decimal CostPerKm { get; set; }
        public string? Color { get; set; }
        public bool? IsAcAvailable { get; set; }
        public string? Description { get; set; }
        public decimal? MaxLoad { get; set; }
        public string? Image { get; set; }
        [EnumValidation(typeof(VehicleState))]
        public VehicleState? State { get; set; }

    }
}
