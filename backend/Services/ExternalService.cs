using backend.Schema.Model;

namespace backend.Services
{
    public class ExternalService : IExternalService
    {
        public async Task<bool> SendRegistrationEmailAsync(UserRegisterRequestModel model)
        {
            return true;
        }

        public async Task<bool> SendRegistrationSmsAsync(UserRegisterRequestModel model)
        {
            return true;
        }
    }
}
