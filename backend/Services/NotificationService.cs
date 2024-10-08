using backend.Schema.Model;
using Microsoft.Extensions.Options;
using MailKit.Net.Smtp;
using MimeKit;
using backend.Schema.Entity;

namespace backend.Services
{
    public class NotificationService : INotificationService
    {
        private readonly SmtpSettings smtpSettings;

        public NotificationService(
            IOptions<SmtpSettings> smtpSettings
            )
        {
            this.smtpSettings = smtpSettings.Value;
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

        public async Task SendRegistrationEmailAsync(UserRegisterRequestModel model)
        {
            var emailBody = BuildRegistrationEmailBody(model);
            await SendEmailAsync(model.Name, model.Email, "Welcome to CarrGo Taxi Service!", emailBody);
        }

        public async Task<bool> SendRegistrationSmsAsync(UserRegisterRequestModel model)
        {
            return true;
        }

        private string BuildRegistrationEmailBody(UserRegisterRequestModel model)
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

                        <footer style='font-size: 12px; color: #777; text-align: center;'>
                            &copy; 2024 CarrGo Taxi Service. All rights reserved.<br />
                            <a href='#' style='color: #2e6c80;'>Unsubscribe</a> from future emails.
                        </footer>
                    </div>
                </body>
            </html>";
        }

    }
}
