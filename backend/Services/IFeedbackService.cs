using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Services
{
    public interface IFeedbackService
    {
        Task<Booking> AddUserFeedbackAsync(int bookingId, NewFeedbackRequestModel model);
        Task<Booking> AddDriverFeedbackAsync(int bookingId, NewFeedbackRequestModel model);
    }
}
