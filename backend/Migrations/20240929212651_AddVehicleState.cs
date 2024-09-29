using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class AddVehicleState : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte>(
                name: "State",
                table: "Vehicles",
                type: "tinyint unsigned",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$QzUBtldk43jFNOWgTpDgdw$hkvkstbfXHo72KxVSV2DX6af83k2N9Znsau8bc+qQkw");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$3UX4piSBHL4UiQaMv2fRIA$wFzMxOWwgZbCh4ai8n8fesNt26v6ejT+FKfQun080z0");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$e6v6UPKqn3xso/Cx+LPYFg$nx0lO+myyGWC6ZOTWwbkDjhiLHZtKs1ZdtQo4aWL7vw");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$Q4NRpfQgqvpYvjvOAvIw4g$t8oOgrwpCe9wy6R7SJE5zV07dJkXl4s85AMvjBAWt/Y");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$qckEBTiFcdbqGMe3PQAj8w$Zw5G4csXuESNEw5+o3ObYUGTr8oOI4K0ebYA9EiszIM");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "State",
                table: "Vehicles");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$MfvdknfTc8duuQowTrPuIA$C/1O8rVx4jp3hTTu1YgzOvoCmNdYMkk5lnwa5o4/A1w");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$E0a6uq1bCLyYsjPYEsvyrA$GjLn1nhOVkqBiYDi/YKMNyFI+CG6AbKES/hkd5KC1TI");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$p6POSKjSOllPRq24jZWTmQ$h3ULvutxbVLvV8DybJtloiVBl7lOj8PmaiSCog1Gw6c");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$Yk24czjwdeekjFc2rH6e9w$WCtP7F5SOhHUYpGZLFN3KWTgkJ9/dYphPFT4j2L8YeY");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$lQepQSxAZ7rggN7G8m0TEg$WkT+CAjWda9lb2uHoXFGkONtIkP65iKg3TTre58G0T8");
        }
    }
}
