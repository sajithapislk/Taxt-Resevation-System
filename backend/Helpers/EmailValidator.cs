using System.Net.Mail;

namespace backend.Helpers
{
    public static class EmailValidator
    {
        public static bool IsValidEmail(string email)
        {
            try
            {
                // Try to create a new MailAddress object
                var mailAddress = new MailAddress(email);
                return true;
            }
            catch (FormatException)
            {
                // If the format is invalid, return false
                return false;
            }
        }

        public static string ExtractEmailId(string email)
        {
            if (string.IsNullOrEmpty(email))
            {
                throw new ArgumentException("Email cannot be null or empty", nameof(email));
            }

            if (!IsValidEmail(email))
            {
                throw new FormatException("Email address in not valid");
            }

            // Split the email by '@' and return the first part
            return email.Split('@')[0];
        }

    }
}
