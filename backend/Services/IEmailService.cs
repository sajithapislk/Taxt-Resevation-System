using backend.Schema.Model;

namespace backend.Services
{
    public interface IEmailService
    {
        Task<bool> SendRegistrationEmailAsync(UserRegisterRequest model);
    }
}
