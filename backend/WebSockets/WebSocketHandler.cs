using Microsoft.AspNetCore.Http;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace backend.WebSockets
{
    public class WebSocketHandler
    {
        public async Task Handle(HttpContext context)
        {
            if (context.WebSockets.IsWebSocketRequest)
            {
                // Accept the WebSocket request
                var webSocket = await context.WebSockets.AcceptWebSocketAsync();
                await SendPeriodicUpdates(webSocket);
            }
            else
            {
                context.Response.StatusCode = 400; // Bad request if not a WebSocket request
            }
        }

        private async Task SendPeriodicUpdates(WebSocket webSocket)
        {
            var cancellationToken = CancellationToken.None;
            int updateCount = 0;

            // Send a message every 5 seconds while WebSocket is open
            while (webSocket.State == WebSocketState.Open)
            {
                // Create the update message
                string message = $"Update {++updateCount}: The current time is {DateTime.Now:T}";
                var messageBytes = Encoding.UTF8.GetBytes(message);

                // Send the message to the client
                await webSocket.SendAsync(
                    new ArraySegment<byte>(messageBytes, 0, messageBytes.Length),
                    WebSocketMessageType.Text,
                    endOfMessage: true,
                    cancellationToken
                );

                // Wait for 5 seconds
                await Task.Delay(5000, cancellationToken);
            }

            // Close the WebSocket connection if no longer open
            await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing", cancellationToken);
        }
    }
}