using backend.Schema.Model;

namespace backend.Services
{
    public interface IExternalService
    {
        Task<bool> SendRegistrationEmailAsync(UserRegisterRequestModel model);
        Task<bool> SendRegistrationSmsAsync(UserRegisterRequestModel model);
    }
}
