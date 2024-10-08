using backend.Helpers;
using backend.Schema.Entity;
using backend.Schema.Enum;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Schema.Model
{
    public class NewVehicleTypeRequestModel
    {
        [Required(ErrorMessage = "Vehicle Type Name is Required")]
        public string Name { get; set; }
        public string? Image { get; set; }

    }
}
