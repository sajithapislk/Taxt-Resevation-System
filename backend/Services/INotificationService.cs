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

        Task SendRegistrationCompletedSmsAsync(UserRegisterRequestModel model);
        Task SendBookingAddedSmsAsync(Booking model);
        Task SendBookingConfirmedSmsAsync(Booking model);
        Task SendBookingStartedSmsAsync(Booking model);
        Task SendBookingCompletedSmsAsync(Booking model);
        Task SendBookingCancelledSmsAsync(Booking model);
    }
}
