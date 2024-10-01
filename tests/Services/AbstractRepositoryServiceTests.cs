using backend.Schema;
using backend.Schema.Entity;
using backend.Services;
using Microsoft.EntityFrameworkCore;

namespace tests.Services
{
    public class AbstractRepositoryServiceTests
    {
        // Helper method to initialize the context and service with a unique database name for each test
        private AbstractRepositoryService<T> GetService<T>(string dbName) where T : AbstractRecord, new()
        {
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: dbName) // Unique database name
                .Options;

            var context = new AppDbContext(options);
            return new AbstractRepositoryService<T>(context);
        }

        // Test for GetAllAsync
        [Fact]
        public async Task GetAllAsync_ShouldReturnAllRecords()
        {
            // Arrange: Use a unique database name for this test
            var dbName = "GetAllAsyncTestDb";
            using var context = new AppDbContext(
                new DbContextOptionsBuilder<AppDbContext>().UseInMemoryDatabase(dbName).Options
            );

            context.Set<SampleEntity>().AddRange(
                new SampleEntity { Id = 1, Name = "Record 1" },
                new SampleEntity { Id = 2, Name = "Record 2" }
            );
            await context.SaveChangesAsync();

            var service = new AbstractRepositoryService<SampleEntity>(context);

            // Act
            var records = await service.GetAllAsync();

            // Assert
            Assert.Equal(2, records.Count());
        }

        // Test for GetAsync with a valid id
        [Fact]
        public async Task GetAsync_ShouldReturnRecordById()
        {
            // Arrange: Use a unique database name for this test
            var dbName = "GetAsyncTestDb";
            using var context = new AppDbContext(
                new DbContextOptionsBuilder<AppDbContext>().UseInMemoryDatabase(dbName).Options
            );

            context.Set<SampleEntity>().Add(new SampleEntity { Id = 1, Name = "Record 1" });
            await context.SaveChangesAsync();

            var service = new AbstractRepositoryService<SampleEntity>(context);

            // Act
            var record = await service.GetAsync(1);

            // Assert
            Assert.NotNull(record);
            Assert.Equal("Record 1", record.Name);
        }

        // Test for GetAsync with an invalid id
        [Fact]
        public async Task GetAsync_ShouldReturnNullWhenRecordNotFound()
        {
            // Arrange: Use a unique database name for this test
            var service = GetService<SampleEntity>("GetAsyncNotFoundTestDb");

            // Act
            var record = await service.GetAsync(99);

            // Assert
            Assert.Null(record);
        }

        // Test for AddAsync
        [Fact]
        public async Task AddAsync_ShouldAddNewRecord()
        {
            // Arrange: Use a unique database name for this test
            var dbName = "AddAsyncTestDb";
            using var context = new AppDbContext(
                new DbContextOptionsBuilder<AppDbContext>().UseInMemoryDatabase(dbName).Options
            );

            var service = new AbstractRepositoryService<SampleEntity>(context);
            var newRecord = new SampleEntity { Name = "New Record" };

            // Act
            var addedRecord = await service.AddAsync(newRecord);

            // Assert
            Assert.NotNull(addedRecord);
            Assert.Equal("New Record", addedRecord.Name);

            // Verify that the record exists in the database
            var retrievedRecord = await context.Set<SampleEntity>().FirstOrDefaultAsync(x => x.Name == "New Record");
            Assert.NotNull(retrievedRecord);
        }

        // Test for DeleteAsync with a valid id
        [Fact]
        public async Task DeleteAsync_ShouldDeleteRecordById()
        {
            // Arrange: Use a unique database name for this test
            var dbName = "DeleteAsyncTestDb";
            using var context = new AppDbContext(
                new DbContextOptionsBuilder<AppDbContext>().UseInMemoryDatabase(dbName).Options
            );

            context.Set<SampleEntity>().Add(new SampleEntity { Id = 1, Name = "Record to Delete" });
            await context.SaveChangesAsync();

            var service = new AbstractRepositoryService<SampleEntity>(context);

            // Act
            var result = await service.DeleteAsync(1);

            // Assert
            Assert.True(result);
            Assert.Null(await context.Set<SampleEntity>().FirstOrDefaultAsync(x => x.Id == 1));
        }

        // Test for DeleteAsync with an invalid id
        [Fact]
        public async Task DeleteAsync_ShouldThrowExceptionWhenRecordNotFound()
        {
            // Arrange: Use a unique database name for this test
            var service = GetService<SampleEntity>("DeleteAsyncNotFoundTestDb");

            // Act & Assert
            await Assert.ThrowsAsync<KeyNotFoundException>(() => service.DeleteAsync(99));
        }

        // Theory Test with multiple inputs
        [Theory]
        [InlineData(1, "Record 1")]
        [InlineData(2, "Record 2")]
        public async Task GetAsync_ShouldReturnCorrectRecord(int id, string expectedName)
        {
            // Use a unique database name for each test execution to avoid key conflicts
            var dbName = Guid.NewGuid().ToString();  // Generate a unique database name

            using var context = new AppDbContext(
                new DbContextOptionsBuilder<AppDbContext>().UseInMemoryDatabase(dbName).Options
            );

            // Add sample records
            context.Set<SampleEntity>().AddRange(
                new SampleEntity { Id = 1, Name = "Record 1" },
                new SampleEntity { Id = 2, Name = "Record 2" }
            );
            await context.SaveChangesAsync();

            // Create the service
            var service = new AbstractRepositoryService<SampleEntity>(context);

            // Act
            var record = await service.GetAsync(id);

            // Assert
            Assert.NotNull(record);
            Assert.Equal(expectedName, record.Name);
        }

    }
}
