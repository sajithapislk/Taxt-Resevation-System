using backend.WebSockets;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

var app = builder.Build();

// Enable WebSockets
var webSocketOptions = new WebSocketOptions
{
    KeepAliveInterval = TimeSpan.FromMinutes(2),
};
app.UseWebSockets(webSocketOptions);

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers(); // Map API controllers
});

// Instantiate the WebSocket handler
var webSocketHandler = new WebSocketHandler();

// Middleware to handle WebSocket requests at the "/ws" path
app.Use(async (context, next) =>
{
    if (context.Request.Path == "/ws")
    {
        await webSocketHandler.Handle(context); // Delegate WebSocket handling to the handler
    }
    else
    {
        await next(); // Continue processing the HTTP pipeline for non-WebSocket requests
    }
});

app.Run();