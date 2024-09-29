using backend.Schema.Model;

namespace backend.Services
{
    public interface IExternalService
    {
        Task<bool> SendRegistrationEmailAsync(UserRegisterRequest model);
        Task<bool> SendRegistrationSmsAsync(UserRegisterRequest model);
    }
}
