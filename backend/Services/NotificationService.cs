using backend.Schema.Model;
using Microsoft.Extensions.Options;
using MailKit.Net.Smtp;
using MimeKit;
using backend.Schema.Entity;
using backend.Helpers;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json;

namespace backend.Services
{
    public class NotificationService : INotificationService
    {
        private readonly SmtpSettings smtpSettings;
        private readonly SmsSettings smsSettings;
        private readonly HttpClient httpClient;

        public NotificationService(
            IOptions<SmtpSettings> smtpSettings,
            IOptions<SmsSettings> smsSettings,
            HttpClient httpClient
            )
        {
            this.smtpSettings = smtpSettings.Value;
            this.smsSettings = smsSettings.Value;
            this.httpClient = httpClient;

            httpClient.DefaultRequestHeaders.Add("x-api-key", this.smsSettings.ApiKey);
        }

        public async Task SendEmailAsync(string toName, string toEmail, string subject, string htmlContent)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress(smtpSettings.SenderName, smtpSettings.SenderEmail));
            message.To.Add(new MailboxAddress(toName, toEmail));
            message.Subject = subject;

            var bodyBuilder = new BodyBuilder
            {
                HtmlBody = htmlContent
            };

            message.Body = bodyBuilder.ToMessageBody();

            using var client = new SmtpClient();
            client.ServerCertificateValidationCallback = (s, c, h, e) => true; // Disable SSL validation
            await client.ConnectAsync(smtpSettings.Server, smtpSettings.Port, smtpSettings.EnableSsl);
            await client.AuthenticateAsync(smtpSettings.Username, smtpSettings.Password);
            await client.SendAsync(message);
            await client.DisconnectAsync(true);
        }

        public async Task<string> SendSmsAsync(string toPhoneNumber, string messageContent)
        {
            var messagePayload = new
            {
                from = smsSettings.FromPhoneNumber,
                to = toPhoneNumber,
                content = messageContent
            };

            var jsonPayload = JsonConvert.SerializeObject(messagePayload);
            var httpContent = new StringContent(jsonPayload, Encoding.UTF8, "application/json");

            var response = await httpClient.PostAsync("https://api.httpsms.com/v1/messages/send", httpContent);

            return await response.Content.ReadAsStringAsync();
        }

        public async Task SendRegistrationCompletedEmailAsync(UserRegisterRequestModel model)
        {
            if (!string.IsNullOrWhiteSpace(model.Email))
            {
                var emailBody = TemplateGenerator.BuildRegistrationCompletedEmailBody(smtpSettings, model);
                await SendEmailAsync(model.Name, model.Email, "Welcome to CarrGo Taxi Service!", emailBody);
            }
        }

        public async Task SendBookingAddedEmailAsync(Booking model)
        {
            if (!string.IsNullOrWhiteSpace(model.User.Email))
            {
                var userEmailBody = TemplateGenerator.BuildBookingAddedUserEmailBody(smtpSettings, model);
                await SendEmailAsync(model.User.Name, model.User.Email, "Booking Added - CarrGo Taxi Service!", userEmailBody);
            }

            if (!string.IsNullOrWhiteSpace(model.Vehicle.Driver.Email))
            {
                var driverEmailBody = TemplateGenerator.BuildBookingAddedDriverEmailBody(smtpSettings, model);
                await SendEmailAsync(model.Vehicle.Driver.Name, model.Vehicle.Driver.Email, "Booking Added - CarrGo Taxi Service!", driverEmailBody);
            }
        }

        public async Task SendBookingConfirmedEmailAsync(Booking model)
        {
            if (!string.IsNullOrWhiteSpace(model.User.Email))
            {
                var userEmailBody = TemplateGenerator.BuildBookingConfirmedUserEmailBody(smtpSettings, model);
                await SendEmailAsync(model.User.Name, model.User.Email, "Booking Confirmed - CarrGo Taxi Service!", userEmailBody);
            }

            if (!string.IsNullOrWhiteSpace(model.Vehicle.Driver.Email))
            {
                var driverEmailBody = TemplateGenerator.BuildBookingConfirmedDriverEmailBody(smtpSettings, model);
                await SendEmailAsync(model.Vehicle.Driver.Name, model.Vehicle.Driver.Email, "Booking Confirmed - CarrGo Taxi Service!", driverEmailBody);
            }
        }

        public async Task SendBookingStartedEmailAsync(Booking model)
        {
            if (!string.IsNullOrWhiteSpace(model.User.Email))
            {
                var userEmailBody = TemplateGenerator.BuildBookingStartedUserEmailBody(smtpSettings, model);
                await SendEmailAsync(model.User.Name, model.User.Email, "Booking Started - CarrGo Taxi Service!", userEmailBody);
            }

            if (!string.IsNullOrWhiteSpace(model.Vehicle.Driver.Email))
            {
                var driverEmailBody = TemplateGenerator.BuildBookingStartedDriverEmailBody(smtpSettings, model);
                await SendEmailAsync(model.Vehicle.Driver.Name, model.Vehicle.Driver.Email, "Booking Started - CarrGo Taxi Service!", driverEmailBody);
            }
        }

        public async Task SendBookingCompletedEmailAsync(Booking model)
        {
            if (!string.IsNullOrWhiteSpace(model.User.Email))
            {
                var userEmailBody = TemplateGenerator.BuildBookingCompletedUserEmailBody(smtpSettings, model);
                await SendEmailAsync(model.User.Name, model.User.Email, "Booking Completed - CarrGo Taxi Service!", userEmailBody);
            }

            if (!string.IsNullOrWhiteSpace(model.Vehicle.Driver.Email))
            {
                var driverEmailBody = TemplateGenerator.BuildBookingCompletedDriverEmailBody(smtpSettings, model);
                await SendEmailAsync(model.Vehicle.Driver.Name, model.Vehicle.Driver.Email, "Booking Completed - CarrGo Taxi Service!", driverEmailBody);
            }
        }

        public async Task SendBookingCancelledEmailAsync(Booking model)
        {
            if (!string.IsNullOrWhiteSpace(model.User.Email))
            {
                var userEmailBody = TemplateGenerator.BuildBookingCancelledUserEmailBody(smtpSettings, model);
                await SendEmailAsync(model.User.Name, model.User.Email, "Booking Cancelled - CarrGo Taxi Service!", userEmailBody);
            }

            if (!string.IsNullOrWhiteSpace(model.Vehicle.Driver.Email))
            {
                var driverEmailBody = TemplateGenerator.BuildBookingCancelledDriverEmailBody(smtpSettings, model);
                await SendEmailAsync(model.Vehicle.Driver.Name, model.Vehicle.Driver.Email, "Booking Cancelled - CarrGo Taxi Service!", driverEmailBody);
            }
        }


        public async Task SendRegistrationCompletedSmsAsync(UserRegisterRequestModel model)
        {
            if (!string.IsNullOrWhiteSpace(model.MobileNo))
            {
                var smsBody = TemplateGenerator.BuildRegistrationCompletedSmsBody(model);
                await SendSmsAsync(model.MobileNo, smsBody);
            }
        }

        public async Task SendBookingAddedSmsAsync(Booking model)
        {
            if (!string.IsNullOrWhiteSpace(model.User.MobileNo))
            {
                var userSmsBody = TemplateGenerator.BuildBookingAddedUserSms(model);
                await SendSmsAsync(model.User.MobileNo, userSmsBody);
            }

            if (!string.IsNullOrWhiteSpace(model.Vehicle.Driver.MobileNo))
            {
                var driverSmsBody = TemplateGenerator.BuildBookingAddedDriverSms(model);
                await SendSmsAsync(model.Vehicle.Driver.MobileNo, driverSmsBody);
            }
        }

        public async Task SendBookingConfirmedSmsAsync(Booking model)
        {
            if (!string.IsNullOrWhiteSpace(model.User.MobileNo))
            {
                var userSmsBody = TemplateGenerator.BuildBookingConfirmedUserSms(model);
                await SendSmsAsync(model.User.MobileNo, userSmsBody);
            }

            if (!string.IsNullOrWhiteSpace(model.Vehicle.Driver.MobileNo))
            {
                var driverSmsBody = TemplateGenerator.BuildBookingConfirmedDriverSms(model);
                await SendSmsAsync(model.Vehicle.Driver.MobileNo, driverSmsBody);
            }
        }

        public async Task SendBookingStartedSmsAsync(Booking model)
        {
            if (!string.IsNullOrWhiteSpace(model.User.MobileNo))
            {
                var userSmsBody = TemplateGenerator.BuildBookingStartedUserSms(model);
                await SendSmsAsync(model.User.MobileNo, userSmsBody);
            }

            if (!string.IsNullOrWhiteSpace(model.Vehicle.Driver.MobileNo))
            {
                var driverSmsBody = TemplateGenerator.BuildBookingStartedDriverSms(model);
                await SendSmsAsync(model.Vehicle.Driver.MobileNo, driverSmsBody);
            }
        }

        public async Task SendBookingCompletedSmsAsync(Booking model)
        {
            if (!string.IsNullOrWhiteSpace(model.User.MobileNo))
            {
                var userSmsBody = TemplateGenerator.BuildBookingCompletedUserSms(model);
                await SendSmsAsync(model.User.MobileNo, userSmsBody);
            }

            if (!string.IsNullOrWhiteSpace(model.Vehicle.Driver.MobileNo))
            {
                var driverSmsBody = TemplateGenerator.BuildBookingCompletedDriverSms(model);
                await SendSmsAsync(model.Vehicle.Driver.MobileNo, driverSmsBody);
            }
        }

        public async Task SendBookingCancelledSmsAsync(Booking model)
        {
            if (!string.IsNullOrWhiteSpace(model.User.MobileNo))
            {
                var userSmsBody = TemplateGenerator.BuildBookingCancelledUserSms(model);
                await SendSmsAsync(model.User.MobileNo, userSmsBody);
            }

            if (!string.IsNullOrWhiteSpace(model.Vehicle.Driver.MobileNo))
            {
                var driverSmsBody = TemplateGenerator.BuildBookingCancelledDriverSms(model);
                await SendSmsAsync(model.Vehicle.Driver.MobileNo, driverSmsBody);
            }
        }
    }
}
