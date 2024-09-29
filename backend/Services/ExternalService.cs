using backend.Schema.Model;

namespace backend.Services
{
    public class ExternalService : IExternalService
    {
        public async Task<bool> SendRegistrationEmailAsync(UserRegisterRequest model)
        {
            return true;
        }

        public async Task<bool> SendRegistrationSmsAsync(UserRegisterRequest model)
        {
            return true;
        }
    }
}
