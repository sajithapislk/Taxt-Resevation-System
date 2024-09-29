using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Schema.Entity
{
    public class VehicleType : AbstractRecord
    {
        public string Name { get; set; }

        [InverseProperty(nameof(Vehicle.VehicleType))]
        public ICollection<Vehicle> Vehicles { get; set; } = [];
    }
}
