using System.ComponentModel.DataAnnotations;

namespace backend.Helpers
{
    public class EnumValidationAttribute : ValidationAttribute
    {
        private readonly Type _enumType;

        public EnumValidationAttribute(Type enumType)
        {
            _enumType = enumType;
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            // Check if the value is a valid enum value
            if (Enum.IsDefined(_enumType, value))
            {
                return ValidationResult.Success;  // Return success if valid
            }

            // Return an error message if the enum value is invalid
            return new ValidationResult($"Invalid value for enum {_enumType.Name}.");
        }
    }

}
