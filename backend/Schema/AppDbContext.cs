using backend.Helpers;
using backend.Schema.Entity;
using backend.Schema.Enum;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

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

        //public DbSet<SampleEntity> SampleEntities { get; set; }


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
            //modelBuilder.Entity<User>().UseTptMappingStrategy();

            // Apply global query filter for all entities that inherit from AbstractRecord
            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                if (typeof(AbstractRecord).IsAssignableFrom(entityType.ClrType))
                {
                    modelBuilder.Entity(entityType.ClrType)
                        .HasQueryFilter(CreateSoftDeleteFilter(entityType.ClrType));
                }
            }

            modelBuilder.Seed();
        }

        private static LambdaExpression CreateSoftDeleteFilter(Type entityType)
        {
            var parameter = Expression.Parameter(entityType, "e");
            var property = Expression.Property(parameter, nameof(AbstractRecord.DeletedTime));
            var nullConstant = Expression.Constant(null, typeof(DateTime?));
            var comparison = Expression.Equal(property, nullConstant);

            return Expression.Lambda(comparison, parameter);
        }
    }
}
