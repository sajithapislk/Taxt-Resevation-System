using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class RenameLocationColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Location",
                table: "Vehicles",
                newName: "Place");

            migrationBuilder.RenameColumn(
                name: "Location",
                table: "Users",
                newName: "Place");

            migrationBuilder.RenameColumn(
                name: "PickUpLocation",
                table: "Bookings",
                newName: "PickUpPlace");

            migrationBuilder.RenameColumn(
                name: "DropOffLocation",
                table: "Bookings",
                newName: "DropOffPlace");

            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "VehicleTypes",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "MEDIUMTEXT",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "Vehicles",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "MEDIUMTEXT",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "Users",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "MEDIUMTEXT",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Place",
                table: "Vehicles",
                newName: "Location");

            migrationBuilder.RenameColumn(
                name: "Place",
                table: "Users",
                newName: "Location");

            migrationBuilder.RenameColumn(
                name: "PickUpPlace",
                table: "Bookings",
                newName: "PickUpLocation");

            migrationBuilder.RenameColumn(
                name: "DropOffPlace",
                table: "Bookings",
                newName: "DropOffLocation");

            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "VehicleTypes",
                type: "MEDIUMTEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "Vehicles",
                type: "MEDIUMTEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "Users",
                type: "MEDIUMTEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$BB4FfcUxYl0eDvXDqLn7QA$5wiHWSbP+U0x9ko8bJwMBqolwozLHJ2YRUKrqJAQ4/o");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$jyHfEk5ueV6rp7DGf8jgOQ$ffksl3Zia5ZuNzsqOcZCgJ3+lyPMJ4dwrXTzadZgX3o");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$+iNoyLGZZXbdcidtp1bZnw$cXGNvMlmqqk9D23bIz9D1VqjRWV4jqbSjnhG//ZIZlg");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$6JsKflXfegNsAAgAVEm5dg$h7l0KlePudQeWXeYlFnz++Sw9aM/SSiToZg//MMMReU");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$2t8C4CovXCEnICaZvyvsig$cDBaPHW7jtu/mshVUZbIa9ywOpOPZusuhhfQjGFlsnU");
        }
    }
}
