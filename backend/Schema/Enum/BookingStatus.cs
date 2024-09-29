namespace backend.Schema.Enum
{
    public enum BookingStatus : byte
    {
        Pending = 1,       // Booking has been created but not yet confirmed
        Confirmed = 2,     // Booking is confirmed and ready
        InProgress = 3,    // The trip is currently ongoing
        Completed = 4,     // The trip has been completed
        Cancelled = 5      // The booking was cancelled
    }

}
