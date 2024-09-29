namespace backend.Schema.Enum
{
    public enum VehicleState : byte
    {
        Available = 1,    // The vehicle is available for use
        InService = 2,    // The vehicle is currently being used or on a trip
        Maintenance = 3,  // The vehicle is under maintenance
        Offline = 4,      // The vehicle is temporarily unavailable or offline
        Retired = 5       // The vehicle has been retired from service
    }

}
