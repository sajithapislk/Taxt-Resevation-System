using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;

namespace backend.Services
{
    public interface IBookingService : IRepositoryService<Booking>, ICrudService<Booking, NewBookingRequestModel>
    {
        Task<IEnumerable<Booking>> GetAllByDriverAsync(int driverId, BookingStatus? status);
        Task<IEnumerable<Booking>> GetAllByUserAsync(int userId, BookingStatus? status);
        Task<Booking> ConfirmAsync(int id);
        Task<Booking> StartAsync(int id);
        Task<Booking> CompleteAsync(int id);
        Task<Booking> CancelAsync(int id);
        Task<Booking> AddUserFeedbackAsync(int id, NewFeedbackRequestModel model);
        Task<Booking> AddDriverFeedbackAsync(int id, NewFeedbackRequestModel model);

    }
}
