using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Services
{
    public interface INotificationService
    {
        Task SendRegistrationCompletedEmailAsync(UserRegisterRequestModel model);
        Task SendBookingAddedEmailAsync(Booking model);
        Task SendBookingConfirmedEmailAsync(Booking model);
        Task SendBookingStartedEmailAsync(Booking model);
        Task SendBookingCompletedEmailAsync(Booking model);
        Task SendBookingCancelledEmailAsync(Booking model);
        Task<bool> SendRegistrationSmsAsync(UserRegisterRequestModel model);
    }
}
