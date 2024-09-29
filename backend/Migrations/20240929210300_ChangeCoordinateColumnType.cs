using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class ChangeCoordinateColumnType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Longitude",
                table: "Vehicles",
                type: "double",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(65,30)",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "Latitude",
                table: "Vehicles",
                type: "double",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(65,30)",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "Longitude",
                table: "Users",
                type: "double",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(65,30)",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "Latitude",
                table: "Users",
                type: "double",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(65,30)",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "PickUpLongitude",
                table: "Bookings",
                type: "double",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(65,30)",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "PickUpLatitude",
                table: "Bookings",
                type: "double",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(65,30)",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "DropOffLongitude",
                table: "Bookings",
                type: "double",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(65,30)",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "DropOffLatitude",
                table: "Bookings",
                type: "double",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(65,30)",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$MfvdknfTc8duuQowTrPuIA$C/1O8rVx4jp3hTTu1YgzOvoCmNdYMkk5lnwa5o4/A1w" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$E0a6uq1bCLyYsjPYEsvyrA$GjLn1nhOVkqBiYDi/YKMNyFI+CG6AbKES/hkd5KC1TI" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$p6POSKjSOllPRq24jZWTmQ$h3ULvutxbVLvV8DybJtloiVBl7lOj8PmaiSCog1Gw6c" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$Yk24czjwdeekjFc2rH6e9w$WCtP7F5SOhHUYpGZLFN3KWTgkJ9/dYphPFT4j2L8YeY" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$lQepQSxAZ7rggN7G8m0TEg$WkT+CAjWda9lb2uHoXFGkONtIkP65iKg3TTre58G0T8" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Longitude",
                table: "Vehicles",
                type: "decimal(65,30)",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Latitude",
                table: "Vehicles",
                type: "decimal(65,30)",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Longitude",
                table: "Users",
                type: "decimal(65,30)",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Latitude",
                table: "Users",
                type: "decimal(65,30)",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "PickUpLongitude",
                table: "Bookings",
                type: "decimal(65,30)",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "PickUpLatitude",
                table: "Bookings",
                type: "decimal(65,30)",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "DropOffLongitude",
                table: "Bookings",
                type: "decimal(65,30)",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "DropOffLatitude",
                table: "Bookings",
                type: "decimal(65,30)",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$9Ut68rk7HrbbAplOKfAILA$7Qhh9+Ge4kVvD6HhYOPUcntvljSIPR1tTP/XxhCJBCM" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$roXKk2pX6neyhB40CLFvjQ$oFp9pYJVRRqbD13DjhImQ7THmGpW+bt3jKJB7gnie/U" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$gcUjGu9JstInWaxld68gTQ$Zt9CKoVxx5tizjRI8OF7WeP3hYJ6W+TxcWT4n/tWQ94" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$5P0jpkRD/E68xKYmC+oJUw$ZitdQHqtqNjgH0ApFJSa962H97aMTGKUcrOBO+K/8rw" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$GWRT/RuZhpMlqOi0rTOThg$UgLsrmXOtr5NoJ0uGvf80hUszoCRkr1BnsEN55EpyGE" });
        }
    }
}
