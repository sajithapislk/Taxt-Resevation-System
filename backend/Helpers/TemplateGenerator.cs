using backend.Schema.Entity;
using backend.Schema.Model;

namespace backend.Helpers
{
    public static class TemplateGenerator
    {
        public static string BuildRegistrationCompletedEmailBody(SmtpSettings smtpSettings, UserRegisterRequestModel model)
        {
            return $@"
            <html>
                <body style='font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f4f4f4; padding: 20px;'>
                    <div style='max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
                        <header style='text-align: center; margin-bottom: 30px;'>
                            <h2 style='color: #2e6c80;'>Welcome to CarrGo Taxi Service, {model.Name}!</h2>
                        </header>

                        <p style='line-height: 1.6;'>
                            Thank you for registering with CarrGo. We’re excited to have you on board! You are registered as a new {model.Role?.ToString() ?? "User"}.
                        </p>
                
                        <p style='line-height: 1.6;'>
                            <strong>Your Email:</strong> {model.Email}<br />
                            <strong>Your Password:</strong> {model.Password}<br />
                            <strong>Your Username:</strong> {model.Username}
                        </p>

                        <p style='line-height: 1.6;'>
                            You can now easily book rides, track your ride in real-time, and enjoy the convenience of both cash and cashless payments. Your account is ready to use, and we hope you have an exceptional experience!
                        </p>

                        <div style='margin-top: 30px; padding: 15px; background-color: #2e6c80; color: white; text-align: center; border-radius: 8px;'>
                            <p style='margin: 0;'>
                                <strong>Ready to start?</strong> <a href='http://localhost:5173' style='color: white; text-decoration: underline;'>Log in to your account</a>!
                            </p>
                        </div>

                        <p style='margin-top: 30px;'>
                            If you have any questions, feel free to <a href='mailto:{smtpSettings.SenderEmail}' style='color: #2e6c80;'>contact us</a>.
                        </p>

                        <hr style='border-top: 1px solid #ddd; margin-top: 30px;' />

                        <footer style='font-size: 12px; color: #777; text-align: center;'>&copy; 2024 CarrGo Taxi Service. All rights reserved.</footer>
                    </div>
                </body>
            </html>";
        }

        public static string BuildBookingAddedUserEmailBody(SmtpSettings smtpSettings, Booking model)
        {
            return $@"
            <html>
                <body style='font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f4f4f4; padding: 20px;'>
                    <div style='max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
                        <header style='text-align: center; margin-bottom: 30px;'>
                            <h2 style='color: #2e6c80;'>Your Booking has been added!</h2>
                        </header>

                        <p style='line-height: 1.6;'>Thank you for booking a ride with CarrGo, {model.User.Name}. Your booking has been successfully added.</p>

                        <p style='line-height: 1.6;'><strong>Booking Details:</strong><br />
                            <strong>Pickup Location:</strong> {model.PickUpPlace}<br />
                            <strong>Drop-off Location:</strong> {model.DropOffPlace}<br />
                            <strong>Booking ID:</strong> {model.Id}<br />
                            <strong>Driver:</strong> {model.Vehicle.Driver.Name}
                        </p>

                        <p style='line-height: 1.6;'>You will receive further updates once the driver confirms your ride. Stay tuned!</p>

                        <div style='margin-top: 30px; padding: 15px; background-color: #2e6c80; color: white; text-align: center; border-radius: 8px;'>
                            <p style='margin: 0;'>We are here to make your ride smooth and efficient.</p>
                        </div>

                        <p style='margin-top: 30px;'>If you have any questions, feel free to <a href='mailto:{smtpSettings.SenderEmail}' style='color: #2e6c80;'>contact us</a>.</p>
                        <hr style='border-top: 1px solid #ddd; margin-top: 30px;' />
                        <footer style='font-size: 12px; color: #777; text-align: center;'>&copy; 2024 CarrGo Taxi Service. All rights reserved.</footer>
                    </div>
                </body>
            </html>";
        }

        public static string BuildBookingAddedDriverEmailBody(SmtpSettings smtpSettings, Booking model)
        {
            return $@"
            <html>
                <body style='font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f4f4f4; padding: 20px;'>
                    <div style='max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
                        <header style='text-align: center; margin-bottom: 30px;'>
                            <h2 style='color: #2e6c80;'>A New Booking has been added!</h2>
                        </header>

                        <p style='line-height: 1.6;'>A new booking has been added, and you have been assigned as the driver.</p>

                        <p style='line-height: 1.6;'><strong>Booking Details:</strong><br />
                            <strong>Pickup Location:</strong> {model.PickUpPlace}<br />
                            <strong>Drop-off Location:</strong> {model.DropOffPlace}<br />
                            <strong>Booking ID:</strong> {model.Id}<br />
                            <strong>Passenger:</strong> {model.User.Name}
                        </p>

                        <p style='line-height: 1.6;'>Please review the booking details and confirm your availability to the passenger.</p>

                        <div style='margin-top: 30px; padding: 15px; background-color: #2e6c80; color: white; text-align: center; border-radius: 8px;'>
                            <p style='margin: 0;'>Confirm the booking to proceed with the ride.</p>
                        </div>

                        <p style='margin-top: 30px;'>If you have any questions, feel free to <a href='mailto:{smtpSettings.SenderEmail}' style='color: #2e6c80;'>contact us</a>.</p>
                        <hr style='border-top: 1px solid #ddd; margin-top: 30px;' />
                        <footer style='font-size: 12px; color: #777; text-align: center;'>&copy; 2024 CarrGo Taxi Service. All rights reserved.</footer>
                    </div>
                </body>
            </html>";
        }

        public static string BuildBookingConfirmedUserEmailBody(SmtpSettings smtpSettings, Booking model)
        {
            return $@"
            <html>
                <body style='font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f4f4f4; padding: 20px;'>
                    <div style='max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
                        <header style='text-align: center; margin-bottom: 30px;'>
                            <h2 style='color: #2e6c80;'>Your Booking is Confirmed!</h2>
                        </header>

                        <p style='line-height: 1.6;'>Your booking with CarrGo has been confirmed. The driver is on the way.</p>

                        <p style='line-height: 1.6;'><strong>Booking Details:</strong><br />
                            <strong>Pickup Location:</strong> {model.PickUpPlace}<br />
                            <strong>Drop-off Location:</strong> {model.DropOffPlace}<br />
                            <strong>Booking ID:</strong> {model.Id}<br />
                            <strong>Driver:</strong> {model.Vehicle.Driver.Name}
                        </p>

                        <div style='margin-top: 30px; padding: 15px; background-color: #2e6c80; color: white; text-align: center; border-radius: 8px;'>
                            <p style='margin: 0;'>Track your driver in real-time.</p>
                        </div>

                        <p style='margin-top: 30px;'>If you have any questions, feel free to <a href='mailto:{smtpSettings.SenderEmail}' style='color: #2e6c80;'>contact us</a>.</p>
                        <hr style='border-top: 1px solid #ddd; margin-top: 30px;' />
                        <footer style='font-size: 12px; color: #777; text-align: center;'>&copy; 2024 CarrGo Taxi Service. All rights reserved.</footer>
                    </div>
                </body>
            </html>";
        }

        public static string BuildBookingConfirmedDriverEmailBody(SmtpSettings smtpSettings, Booking model)
        {
            return $@"
            <html>
                <body style='font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f4f4f4; padding: 20px;'>
                    <div style='max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
                        <header style='text-align: center; margin-bottom: 30px;'>
                            <h2 style='color: #2e6c80;'>You Have Confirmed a Booking!</h2>
                        </header>

                        <p style='line-height: 1.6;'>Thank you for confirming the booking. Please proceed to the pickup location.</p>

                        <p style='line-height: 1.6;'><strong>Booking Details:</strong><br />
                            <strong>Pickup Location:</strong> {model.PickUpPlace}<br />
                            <strong>Drop-off Location:</strong> {model.DropOffPlace}<br />
                            <strong>Booking ID:</strong> {model.Id}<br />
                            <strong>Passenger:</strong> {model.User.Name}
                        </p>

                        <div style='margin-top: 30px; padding: 15px; background-color: #2e6c80; color: white; text-align: center; border-radius: 8px;'>
                            <p style='margin: 0;'>Proceed to the pickup location and start the ride.</p>
                        </div>

                        <p style='margin-top: 30px;'>If you have any questions, feel free to <a href='mailto:{smtpSettings.SenderEmail}' style='color: #2e6c80;'>contact us</a>.</p>
                        <hr style='border-top: 1px solid #ddd; margin-top: 30px;' />
                        <footer style='font-size: 12px; color: #777; text-align: center;'>&copy; 2024 CarrGo Taxi Service. All rights reserved.</footer>
                    </div>
                </body>
            </html>";
        }

        public static string BuildBookingStartedUserEmailBody(SmtpSettings smtpSettings, Booking model)
        {
            return $@"
            <html>
                <body style='font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f4f4f4; padding: 20px;'>
                    <div style='max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
                        <header style='text-align: center; margin-bottom: 30px;'>
                            <h2 style='color: #2e6c80;'>Your Ride Has Started!</h2>
                        </header>

                        <p style='line-height: 1.6;'>Your ride with CarrGo has started. You are on your way to your destination.</p>

                        <p style='line-height: 1.6;'><strong>Ride Details:</strong><br />
                            <strong>Pickup Location:</strong> {model.PickUpPlace}<br />
                            <strong>Drop-off Location:</strong> {model.DropOffPlace}<br />
                            <strong>Driver:</strong> {model.Vehicle.Driver.Name}<br />
                            <strong>Booking ID:</strong> {model.Id}
                        </p>

                        <div style='margin-top: 30px; padding: 15px; background-color: #2e6c80; color: white; text-align: center; border-radius: 8px;'>
                            <p style='margin: 0;'>Enjoy your ride with CarrGo!</p>
                        </div>

                        <p style='margin-top: 30px;'>If you have any questions, feel free to <a href='mailto:{smtpSettings.SenderEmail}' style='color: #2e6c80;'>contact us</a>.</p>
                        <hr style='border-top: 1px solid #ddd; margin-top: 30px;' />
                        <footer style='font-size: 12px; color: #777; text-align: center;'>&copy; 2024 CarrGo Taxi Service. All rights reserved.</footer>
                    </div>
                </body>
            </html>";
        }

        public static string BuildBookingStartedDriverEmailBody(SmtpSettings smtpSettings, Booking model)
        {
            return $@"
            <html>
                <body style='font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f4f4f4; padding: 20px;'>
                    <div style='max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
                        <header style='text-align: center; margin-bottom: 30px;'>
                            <h2 style='color: #2e6c80;'>You Have Started the Ride!</h2>
                        </header>

                        <p style='line-height: 1.6;'>You have successfully started the ride. Please follow the optimal route to the drop-off location.</p>

                        <p style='line-height: 1.6;'><strong>Ride Details:</strong><br />
                            <strong>Pickup Location:</strong> {model.PickUpPlace}<br />
                            <strong>Drop-off Location:</strong> {model.DropOffPlace}<br />
                            <strong>Passenger:</strong> {model.User.Name}<br />
                            <strong>Booking ID:</strong> {model.Id}
                        </p>

                        <div style='margin-top: 30px; padding: 15px; background-color: #2e6c80; color: white; text-align: center; border-radius: 8px;'>
                            <p style='margin: 0;'>Drive safely and ensure a smooth experience for the passenger.</p>
                        </div>

                        <p style='margin-top: 30px;'>If you have any questions, feel free to <a href='mailto:{smtpSettings.SenderEmail}' style='color: #2e6c80;'>contact us</a>.</p>
                        <hr style='border-top: 1px solid #ddd; margin-top: 30px;' />
                        <footer style='font-size: 12px; color: #777; text-align: center;'>&copy; 2024 CarrGo Taxi Service. All rights reserved.</footer>
                    </div>
                </body>
            </html>";
        }

        public static string BuildBookingCompletedUserEmailBody(SmtpSettings smtpSettings, Booking model)
        {
            return $@"
            <html>
                <body style='font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f4f4f4; padding: 20px;'>
                    <div style='max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
                        <header style='text-align: center; margin-bottom: 30px;'>
                            <h2 style='color: #2e6c80;'>Your Ride is Complete!</h2>
                        </header>

                        <p style='line-height: 1.6;'>Your ride with CarrGo has been successfully completed. Thank you for choosing us!</p>

                        <p style='line-height: 1.6;'><strong>Ride Summary:</strong><br />
                            <strong>Pickup Location:</strong> {model.PickUpPlace}<br />
                            <strong>Drop-off Location:</strong> {model.DropOffPlace}<br />
                            <strong>Driver:</strong> {model.Vehicle.Driver.Name}<br />
                            <strong>Booking ID:</strong> {model.Id}<br />
                            <strong>Total Fare:</strong> {model.Price:C}
                        </p>

                        <div style='margin-top: 30px; padding: 15px; background-color: #2e6c80; color: white; text-align: center; border-radius: 8px;'>
                            <p style='margin: 0;'>We hope you had a great experience. See you next time!</p>
                        </div>

                        <p style='margin-top: 30px;'>If you have any questions, feel free to <a href='mailto:{smtpSettings.SenderEmail}' style='color: #2e6c80;'>contact us</a>.</p>
                        <hr style='border-top: 1px solid #ddd; margin-top: 30px;' />
                        <footer style='font-size: 12px; color: #777; text-align: center;'>&copy; 2024 CarrGo Taxi Service. All rights reserved.</footer>
                    </div>
                </body>
            </html>";
        }

        public static string BuildBookingCompletedDriverEmailBody(SmtpSettings smtpSettings, Booking model)
        {
            return $@"
            <html>
                <body style='font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f4f4f4; padding: 20px;'>
                    <div style='max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
                        <header style='text-align: center; margin-bottom: 30px;'>
                            <h2 style='color: #2e6c80;'>The Ride is Complete!</h2>
                        </header>

                        <p style='line-height: 1.6;'>The ride has been successfully completed. Thank you for providing excellent service.</p>

                        <p style='line-height: 1.6;'><strong>Ride Summary:</strong><br />
                            <strong>Pickup Location:</strong> {model.PickUpPlace}<br />
                            <strong>Drop-off Location:</strong> {model.DropOffPlace}<br />
                            <strong>Passenger:</strong> {model.User.Name}<br />
                            <strong>Booking ID:</strong> {model.Id}<br />
                            <strong>Total Fare:</strong> {model.Price:C}
                        </p>

                        <div style='margin-top: 30px; padding: 15px; background-color: #2e6c80; color: white; text-align: center; border-radius: 8px;'>
                            <p style='margin: 0;'>Thank you for being part of CarrGo. We hope to see you again soon.</p>
                        </div>

                        <p style='margin-top: 30px;'>If you have any questions, feel free to <a href='mailto:{smtpSettings.SenderEmail}' style='color: #2e6c80;'>contact us</a>.</p>
                        <hr style='border-top: 1px solid #ddd; margin-top: 30px;' />
                        <footer style='font-size: 12px; color: #777; text-align: center;'>&copy; 2024 CarrGo Taxi Service. All rights reserved.</footer>
                    </div>
                </body>
            </html>";
        }

        public static string BuildBookingCancelledUserEmailBody(SmtpSettings smtpSettings, Booking model)
        {
            return $@"
            <html>
                <body style='font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f4f4f4; padding: 20px;'>
                    <div style='max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
                        <header style='text-align: center; margin-bottom: 30px;'>
                            <h2 style='color: #2e6c80;'>Your Booking was Cancelled</h2>
                        </header>

                        <p style='line-height: 1.6;'>Your booking with CarrGo has been cancelled.</p>

                        <p style='line-height: 1.6;'><strong>Booking Details:</strong><br />
                            <strong>Pickup Location:</strong> {model.PickUpPlace}<br />
                            <strong>Drop-off Location:</strong> {model.DropOffPlace}<br />
                            <strong>Booking ID:</strong> {model.Id}
                        </p>

                        <div style='margin-top: 30px; padding: 15px; background-color: #2e6c80; color: white; text-align: center; border-radius: 8px;'>
                            <p style='margin: 0;'>We’re sorry for the inconvenience. Feel free to book another ride when you're ready.</p>
                        </div>

                        <p style='margin-top: 30px;'>If you have any questions, feel free to <a href='mailto:{smtpSettings.SenderEmail}' style='color: #2e6c80;'>contact us</a>.</p>
                        <hr style='border-top: 1px solid #ddd; margin-top: 30px;' />
                        <footer style='font-size: 12px; color: #777; text-align: center;'>&copy; 2024 CarrGo Taxi Service. All rights reserved.</footer>
                    </div>
                </body>
            </html>";
        }

        public static string BuildBookingCancelledDriverEmailBody(SmtpSettings smtpSettings, Booking model)
        {
            return $@"
            <html>
                <body style='font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f4f4f4; padding: 20px;'>
                    <div style='max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);'>
                        <header style='text-align: center; margin-bottom: 30px;'>
                            <h2 style='color: #2e6c80;'>The Booking was Cancelled</h2>
                        </header>

                        <p style='line-height: 1.6;'>The booking you were assigned to has been cancelled.</p>

                        <p style='line-height: 1.6;'><strong>Booking Details:</strong><br />
                            <strong>Pickup Location:</strong> {model.PickUpPlace}<br />
                            <strong>Drop-off Location:</strong> {model.DropOffPlace}<br />
                            <strong>Passenger:</strong> {model.User.Name}<br />
                            <strong>Booking ID:</strong> {model.Id}
                        </p>

                        <div style='margin-top: 30px; padding: 15px; background-color: #2e6c80; color: white; text-align: center; border-radius: 8px;'>
                            <p style='margin: 0;'>We’re sorry for the inconvenience. We hope to see you again soon.</p>
                        </div>

                        <p style='margin-top: 30px;'>If you have any questions, feel free to <a href='mailto:{smtpSettings.SenderEmail}' style='color: #2e6c80;'>contact us</a>.</p>
                        <hr style='border-top: 1px solid #ddd; margin-top: 30px;' />
                        <footer style='font-size: 12px; color: #777; text-align: center;'>&copy; 2024 CarrGo Taxi Service. All rights reserved.</footer>
                    </div>
                </body>
            </html>";
        }

        public static string BuildRegistrationCompletedSmsBody(UserRegisterRequestModel model)
        {
            return $"Welcome to CarrGo, {model.Name}! Your account has been created. You can now log in and start booking rides. We're excited to have you onboard!";
        }

        public static string BuildBookingAddedUserSms(Booking model)
        {
            return $"Your ride has been booked! Pickup: {model.PickUpPlace}. Driver: {model.Vehicle.Driver.Name}. Booking ID: {model.Id}. You'll get a confirmation soon.";
        }

        public static string BuildBookingAddedDriverSms(Booking model)
        {
            return $"New ride booked! Pickup: {model.PickUpPlace}. Drop-off: {model.DropOffPlace}. Passenger: {model.User.Name}. Booking ID: {model.Id}. Confirm to proceed.";
        }

        public static string BuildBookingConfirmedUserSms(Booking model)
        {
            return $"Your ride is confirmed! Driver {model.Vehicle.Driver.Name} is on the way. Booking ID: {model.Id}. Pickup at {model.PickUpPlace}. Track in real-time.";
        }

        public static string BuildBookingConfirmedDriverSms(Booking model)
        {
            return $"Booking confirmed! Pickup {model.PickUpPlace}. Drop-off {model.DropOffPlace}. Passenger: {model.User.Name}. Booking ID: {model.Id}. Proceed to pickup.";
        }

        public static string BuildBookingStartedUserSms(Booking model)
        {
            return $"Your ride has started! Enjoy your journey with Driver {model.Vehicle.Driver.Name}. Booking ID: {model.Id}. Drop-off at {model.DropOffPlace}.";
        }

        public static string BuildBookingStartedDriverSms(Booking model)
        {
            return $"Ride started! Passenger: {model.User.Name}. Booking ID: {model.Id}. Pickup {model.PickUpPlace}. Drop-off {model.DropOffPlace}. Drive safe!";
        }

        public static string BuildBookingCompletedUserSms(Booking model)
        {
            return $"Your ride is complete! Total fare: {model.Price:C}. Thanks for riding with CarrGo. Booking ID: {model.Id}. We hope to see you again!";
        }

        public static string BuildBookingCompletedDriverSms(Booking model)
        {
            return $"Ride completed! Passenger: {model.User.Name}. Booking ID: {model.Id}. Fare: {model.Price:C}. Thanks for providing excellent service!";
        }

        public static string BuildBookingCancelledUserSms(Booking model)
        {
            return $"Your booking has been cancelled. We're sorry for the inconvenience. Booking ID: {model.Id}. You can book another ride anytime.";
        }

        public static string BuildBookingCancelledDriverSms(Booking model)
        {
            return $"The booking has been cancelled. Passenger: {model.User.Name}. Booking ID: {model.Id}. We're sorry for the inconvenience. Please standby for new bookings.";
        }

    }
}
