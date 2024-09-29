using backend.Helpers;
using backend.Schema.Entity;
using backend.Schema.Enum;
using Microsoft.EntityFrameworkCore;

namespace backend.Schema
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<PasswordReset> PasswordResets { get; set; }
        public DbSet<VehicleType> VehicleTypes { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<UserFeedback> UserFeedbacks { get; set; }
        public DbSet<DriverFeedback> DriverFeedbacks { get; set; }


        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            foreach (var entityEntry in ChangeTracker.Entries()) // Iterate all made changes
            {
                if (entityEntry.Entity is AbstractRecord record)
                {
                    switch (entityEntry.State)
                    {
                        case EntityState.Detached:
                            break;
                        case EntityState.Unchanged:
                            break;
                        case EntityState.Deleted:
                            record.DeletedUserId = 1; // Set the user ID who deleted the record
                            record.DeletedTime = DateTime.Now; // Set the deletion time
                            entityEntry.State = EntityState.Modified; // Change state to Modified to perform a soft delete
                            break;
                        case EntityState.Modified:
                            record.LastModifiedUserId = 1; // Set the user ID who modified the record
                            record.LastModifiedTime = DateTime.Now; // Set the modification time
                            break;
                        case EntityState.Added:
                            record.CreatedUserId = 1; // Set the user ID who created the record
                            record.CreatedTime = DateTime.Now; // Set the creation time
                            break;
                        default:
                            break;
                    }
                }
            }
            return base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Role = UserRole.Admin,
                    Email = "admin@system.com",
                    Username = "admin_1",
                    Password = PasswordHasher.HashPassword("1111"),
                    Name = "System",
                    MobileNo = "0712312312",
                },
                new User
                {
                    Id = 2,
                    Role = UserRole.Driver,
                    Email = "sajith@apis.lk",
                    Username = "sajith_2",
                    Password = PasswordHasher.HashPassword("2222"),
                    Name = "Sajith",
                    MobileNo = "0772193832",
                },
                new User
                {
                    Id = 3,
                    Role = UserRole.Driver,
                    Email = "mohammedsaheer987@gmail.com",
                    Username = "mohammedsaheer987_3",
                    Password = PasswordHasher.HashPassword("3333"),
                    Name = "Saheer",
                    MobileNo = "0712805509",
                },
                new User
                {
                    Id = 4,
                    Role = UserRole.User,
                    Email = "abduljizzi@gmail.com",
                    Username = "abduljizzi_4",
                    Password = PasswordHasher.HashPassword("4444"),
                    Name = "Abdul",
                    MobileNo = "0759424247",
                },
                new User
                {
                    Id = 5,
                    Role = UserRole.User,
                    Email = "nifraz@live.com",
                    Username = "nifraz_5",
                    Password = PasswordHasher.HashPassword("5555"),
                    Name = "Nifraz",
                    MobileNo = "0712319319",
                }
            );
        }

    }
}
