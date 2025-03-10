﻿using backend.Helpers;
using backend.Schema;
using backend.Schema.Entity;
using backend.Schema.Enum;
using backend.Schema.Model;
using Microsoft.EntityFrameworkCore;
using NetTopologySuite.Geometries;
using static System.Net.Mime.MediaTypeNames;

namespace backend.Services
{
    public class BookingService : AbstractRepositoryService<Booking>, IBookingService
    {
        private readonly AppDbContext dbContext;
        private readonly IUserService userService;
        private readonly IDriverService driverService;
        private readonly IVehicleService vehicleService;
        private readonly INotificationService notificationService;

        public BookingService(
            AppDbContext dbContext,
            IUserService userService,
            IDriverService driverService,
            IVehicleService vehicleService,
            INotificationService notificationService
        ) : base(dbContext)
        {
            this.dbContext = dbContext;
            this.userService = userService;
            this.driverService = driverService;
            this.vehicleService = vehicleService;
            this.notificationService = notificationService;
        }

        public async Task<Booking> AddAsync(NewBookingRequestModel model)
        {
            var user = await userService.GetAsync(model.UserId)
                ?? throw new KeyNotFoundException($"No matching user record found for the id {model.UserId}");

            var vehicle = await vehicleService.GetAsync(model.VehicleId)
                ?? throw new KeyNotFoundException($"No matching vehicle record found for the id {model.VehicleId}");

            var entity = new Booking
            {
                Type = model.Type,
                UserId = user.Id,
                VehicleId = vehicle.Id,

                PickUpLocation = new Point(model.PickUpLongitude, model.PickUpLatitude) { SRID = 4326 },
                PickUpPlace = model.PickUpPlace,

                DropOffLocation = new Point(model.DropOffLongitude, model.DropOffLatitude) { SRID = 4326 },
                DropOffPlace = model.DropOffPlace,

                Status = BookingStatus.Pending,
            };

            entity.Distance = (decimal)DistanceCalculator.GetExactDistance(entity.PickUpLocation, entity.DropOffLocation);
            entity.Price = entity.Distance * vehicle.CostPerKm;

            user.Location = entity.PickUpLocation;
            user.Place = entity.PickUpPlace;

            entity = await AddAsync(entity);

            var existingRecord = await GetWithNavigationProps(entity.Id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {entity.Id}");
            _ = Task.Run(() => notificationService.SendBookingAddedEmailAsync(existingRecord));
            await notificationService.SendBookingAddedSmsAsync(existingRecord);

            return entity;
        }

        public async Task<Booking> UpdateAsync(int id, NewBookingRequestModel model)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            var vehicle = await vehicleService.GetAsync(model.VehicleId)
                ?? throw new KeyNotFoundException($"No matching vehicle record found for the id {model.VehicleId}");

            existingRecord.Type = model.Type;
            existingRecord.UserId = model.UserId;
            existingRecord.VehicleId = model.VehicleId;

            existingRecord.PickUpLocation = new Point(model.PickUpLongitude, model.PickUpLatitude) { SRID = 4326 };
            existingRecord.PickUpPlace = model.PickUpPlace;

            existingRecord.DropOffLocation = new Point(model.DropOffLongitude, model.DropOffLatitude) { SRID = 4326 };
            existingRecord.DropOffPlace = model.DropOffPlace;
            //existingRecord.Status = BookingStatus.Pending;

            existingRecord.Distance = (decimal)DistanceCalculator.GetExactDistance(existingRecord.PickUpLocation, existingRecord.DropOffLocation);
            existingRecord.Price = existingRecord.Distance * vehicle.CostPerKm;

            await dbContext.SaveChangesAsync();
            return existingRecord;
        }

        public async Task<IEnumerable<Booking>> GetAllByDriverAsync(int driverId, BookingStatus? status)
        {
            return await dbContext.Bookings
                .Include(x => x.Vehicle)
                .Where(x => x.Vehicle.DriverId == driverId
                    && (status == null || x.Status == status))
                .ToListAsync();
        }

        public async Task<IEnumerable<Booking>> GetAllByUserAsync(int userId, BookingStatus? status)
        {
            return await dbContext.Bookings
                .Where(x => x.UserId == userId
                    && (status == null || x.Status == status))
                .ToListAsync();
        }

        public async Task<Booking> ConfirmAsync(int id)
        {
            var existingRecord = await GetWithNavigationProps(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            existingRecord.Status = BookingStatus.Confirmed;
            await dbContext.SaveChangesAsync();
            _ = Task.Run(() => notificationService.SendBookingConfirmedEmailAsync(existingRecord));
            await notificationService.SendBookingConfirmedSmsAsync(existingRecord);
            return existingRecord;
        }

        public async Task<Booking> StartAsync(int id)
        {
            var existingRecord = await GetWithNavigationProps(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            existingRecord.Status = BookingStatus.InProgress;
            existingRecord.PickUpTime = DateTime.Now;

            existingRecord.Vehicle.Location = existingRecord.Vehicle.Driver.Location = existingRecord.PickUpLocation;
            existingRecord.Vehicle.Place = existingRecord.Vehicle.Driver.Place = existingRecord.PickUpPlace;

            await dbContext.SaveChangesAsync();
            _ = Task.Run(() => notificationService.SendBookingStartedEmailAsync(existingRecord));
            await notificationService.SendBookingStartedSmsAsync(existingRecord);
            return existingRecord;
        }

        public async Task<Booking> CompleteAsync(int id)
        {
            var existingRecord = await GetWithNavigationProps(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            existingRecord.Status = BookingStatus.Completed;
            existingRecord.DropOffTime = DateTime.Now;
            existingRecord.Duration = existingRecord.DropOffTime - existingRecord.PickUpTime;

            existingRecord.Vehicle.Location = existingRecord.Vehicle.Driver.Location = existingRecord.User.Location = existingRecord.DropOffLocation;
            existingRecord.Vehicle.Place = existingRecord.Vehicle.Driver.Place = existingRecord.User.Place = existingRecord.DropOffPlace;

            await dbContext.SaveChangesAsync();
            _ = Task.Run(() => notificationService.SendBookingCompletedEmailAsync(existingRecord));
            await notificationService.SendBookingCompletedSmsAsync(existingRecord);
            return existingRecord;
        }

        public async Task<Booking> CancelAsync(int id)
        {
            var existingRecord = await GetWithNavigationProps(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            existingRecord.Status = BookingStatus.Cancelled;
            await dbContext.SaveChangesAsync();
            _ = Task.Run(() => notificationService.SendBookingCancelledEmailAsync(existingRecord));
            await notificationService.SendBookingCancelledSmsAsync(existingRecord);
            return existingRecord;
        }

        public async Task<Booking> AddUserFeedbackAsync(int id, NewFeedbackRequestModel model)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            var existingFeedback = await dbContext.UserFeedbacks
                .FirstOrDefaultAsync(x => x.BookingId == id);

            if (existingFeedback != null)
            {
                existingFeedback.Rate = model.Rate;
                existingFeedback.Feedback = model.Feedback;
            }
            else
            {
                var entity = new UserFeedback
                {
                    Rate = model.Rate,
                    Feedback = model.Feedback,
                };
                existingRecord.UserFeedback = entity;
            }

            await dbContext.SaveChangesAsync();
            return existingRecord;
        }

        public async Task<Booking> AddDriverFeedbackAsync(int id, NewFeedbackRequestModel model)
        {
            var existingRecord = await GetAsync(id)
                ?? throw new KeyNotFoundException($"No matching record found for the id {id}");

            var existingFeedback = await dbContext.DriverFeedbacks
                .FirstOrDefaultAsync(x => x.BookingId == id);

            if (existingFeedback != null)
            {
                existingFeedback.Rate = model.Rate;
                existingFeedback.Feedback = model.Feedback;
            }
            else
            {
                var entity = new DriverFeedback
                {
                    Rate = model.Rate,
                    Feedback = model.Feedback,
                };
                existingRecord.DriverFeedback = entity;
            }

            await dbContext.SaveChangesAsync();
            return existingRecord;
        }

        private async Task<Booking?> GetWithNavigationProps(int id)
        {
            return await dbContext.Bookings
                .Include(x => x.User)
                .Include(x => x.Vehicle)
                .ThenInclude(x => x.Driver)
                .Where(x => x.Id == id)
                .FirstOrDefaultAsync();
        }
    }
}
