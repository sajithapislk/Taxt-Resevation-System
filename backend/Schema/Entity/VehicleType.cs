using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Schema.Entity
{
    public class VehicleType : AbstractRecord
    {
        public string Name { get; set; }
        public string? Image { get; set; }
        //public string? ImagePath { get; set; }

        [InverseProperty(nameof(Vehicle.VehicleType))]
        public ICollection<Vehicle> Vehicles { get; set; } = [];

        [NotMapped]
        public int VehicleCount { get { return Vehicles.Count; } }
    }
}
