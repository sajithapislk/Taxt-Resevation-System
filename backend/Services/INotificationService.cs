using backend.Schema.Model;

namespace backend.Services
{
    public interface INotificationService
    {
        Task SendRegistrationEmailAsync(UserRegisterRequestModel model);
        Task<bool> SendRegistrationSmsAsync(UserRegisterRequestModel model);
    }
}
