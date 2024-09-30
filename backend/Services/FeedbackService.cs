using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Services
{
    public class FeedbackService : IFeedbackService
    {
        public Task<Booking> AddDriverFeedbackAsync(int bookingId, NewFeedbackRequestModel model)
        {
            throw new NotImplementedException();
        }

        public Task<Booking> AddUserFeedbackAsync(int bookingId, NewFeedbackRequestModel model)
        {
            throw new NotImplementedException();
        }
    }
}
