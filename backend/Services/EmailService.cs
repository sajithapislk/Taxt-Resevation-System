using backend.Schema.Model;

namespace backend.Services
{
    public class EmailService : IEmailService
    {
        public async Task<bool> SendRegistrationEmailAsync(UserRegisterRequest model)
        {
            return true;
        }
    }
}
