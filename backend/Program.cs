using backend.Helpers;
using backend.Schema;
using backend.Schema.Model;
using backend.Services;
using backend.WebSockets;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IDriverService, DriverService>();
builder.Services.AddScoped<IAdminService, AdminService>();
builder.Services.AddScoped<IEmailService, EmailService>();

// Add services to the container
builder.Services.AddControllers();

var connectionString = builder.Configuration.GetConnectionString("MariaDbConnection");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, new MySqlServerVersion(new Version(11, 4, 0)))
);

// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("AllowLocalhost5173", policy =>
//     {
//         policy.WithOrigins("http://localhost:5173")
//               .AllowAnyHeader()
//               .AllowAnyMethod()
//               .AllowCredentials(); // Allows sending cookies and authentication headers if needed
//     });
// });

var app = builder.Build();

// Ensure database is created
//using (var scope = app.Services.CreateScope())
//{
//    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
//    await dbContext.Database.EnsureCreatedAsync();
//}

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

app.UseMiddleware<JwtMiddleware>();

app.UseRouting();

app.MapControllers();

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
app.UseCors("AllowLocalhost5173");
app.Run();