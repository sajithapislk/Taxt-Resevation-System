using Microsoft.EntityFrameworkCore.Migrations;
using NetTopologySuite.Geometries;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class AddSpacialLocation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Point>(
                name: "Location",
                table: "Vehicles",
                type: "point",
                nullable: true);

            migrationBuilder.AddColumn<Point>(
                name: "Location",
                table: "Users",
                type: "point",
                nullable: true);

            migrationBuilder.AddColumn<Point>(
                name: "DropOffLocation",
                table: "Bookings",
                type: "point",
                nullable: true);

            migrationBuilder.AddColumn<Point>(
                name: "PickUpLocation",
                table: "Bookings",
                type: "point",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Location", "Password" },
                values: new object[] { null, "$argon2id$v=19$m=65536,t=3,p=1$9Ut68rk7HrbbAplOKfAILA$7Qhh9+Ge4kVvD6HhYOPUcntvljSIPR1tTP/XxhCJBCM" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Location", "Password" },
                values: new object[] { null, "$argon2id$v=19$m=65536,t=3,p=1$roXKk2pX6neyhB40CLFvjQ$oFp9pYJVRRqbD13DjhImQ7THmGpW+bt3jKJB7gnie/U" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Location", "Password" },
                values: new object[] { null, "$argon2id$v=19$m=65536,t=3,p=1$gcUjGu9JstInWaxld68gTQ$Zt9CKoVxx5tizjRI8OF7WeP3hYJ6W+TxcWT4n/tWQ94" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Location", "Password" },
                values: new object[] { null, "$argon2id$v=19$m=65536,t=3,p=1$5P0jpkRD/E68xKYmC+oJUw$ZitdQHqtqNjgH0ApFJSa962H97aMTGKUcrOBO+K/8rw" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Location", "Password" },
                values: new object[] { null, "$argon2id$v=19$m=65536,t=3,p=1$GWRT/RuZhpMlqOi0rTOThg$UgLsrmXOtr5NoJ0uGvf80hUszoCRkr1BnsEN55EpyGE" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Location",
                table: "Vehicles");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DropOffLocation",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "PickUpLocation",
                table: "Bookings");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$nmIpKN2mKEZHawZBSV/Dkw$uPcF0jES/hpMJnEx7IyqrIOC3RgE2OiwiboM8icTM2M");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$LILvlikZuzB025AA5U3UdA$FK2RCibEG9x3FSp6RVxm4qpFxX5YhZSMTEeHSE70WZk");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$If8mULe1WPyI7s7XTlNGGQ$ynt1XV5D2gjOAw3KvRi2EQ7KhbhF/PUxmx+RT+eV4dg");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$f+daYMqeAmylaQsnWEsVNg$MkLkPu1PIHdQBpM2PurphyvePmAnkkC+WDgNT/a2D5Y");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$FazzfzBcrf3NpAZTiE0esg$Z77s1s4QEa+y7oTmoEYuFxCg9C/CDr10xMyFGcs3EGU");
        }
    }
}
