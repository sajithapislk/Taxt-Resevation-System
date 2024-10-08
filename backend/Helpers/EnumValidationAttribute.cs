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
            if (Nullable.GetUnderlyingType(_enumType) != null)
            {
                return ValidationResult.Success; // Return success if nullable
            }

            if (value == null)
            {
                return ValidationResult.Success; // Return success if null
            }

            if (Enum.IsDefined(_enumType, value))
            {
                return ValidationResult.Success;  // Return success if valid
            }

            // Return an error message if the enum value is invalid
            return new ValidationResult($"Invalid value for enum {_enumType.Name}.");
        }
    }

}
