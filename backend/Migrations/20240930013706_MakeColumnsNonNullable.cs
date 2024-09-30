using Microsoft.EntityFrameworkCore.Migrations;
using NetTopologySuite.Geometries;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class MakeColumnsNonNullable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_Vehicles_VehicleId",
                table: "Bookings");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Users",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<int>(
                name: "VehicleId",
                table: "Bookings",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Bookings",
                keyColumn: "PickUpPlace",
                keyValue: null,
                column: "PickUpPlace",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "PickUpPlace",
                table: "Bookings",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<double>(
                name: "PickUpLongitude",
                table: "Bookings",
                type: "double",
                nullable: false,
                defaultValue: 0.0,
                oldClrType: typeof(double),
                oldType: "double",
                oldNullable: true);

            migrationBuilder.AlterColumn<Point>(
                name: "PickUpLocation",
                table: "Bookings",
                type: "point",
                nullable: false,
                oldClrType: typeof(Point),
                oldType: "point",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "PickUpLatitude",
                table: "Bookings",
                type: "double",
                nullable: false,
                defaultValue: 0.0,
                oldClrType: typeof(double),
                oldType: "double",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Bookings",
                keyColumn: "DropOffPlace",
                keyValue: null,
                column: "DropOffPlace",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "DropOffPlace",
                table: "Bookings",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<double>(
                name: "DropOffLongitude",
                table: "Bookings",
                type: "double",
                nullable: false,
                defaultValue: 0.0,
                oldClrType: typeof(double),
                oldType: "double",
                oldNullable: true);

            migrationBuilder.AlterColumn<Point>(
                name: "DropOffLocation",
                table: "Bookings",
                type: "point",
                nullable: false,
                oldClrType: typeof(Point),
                oldType: "point",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "DropOffLatitude",
                table: "Bookings",
                type: "double",
                nullable: false,
                defaultValue: 0.0,
                oldClrType: typeof(double),
                oldType: "double",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Description", "Password" },
                values: new object[] { null, "$argon2id$v=19$m=65536,t=3,p=1$ZjCfQ9yUQGnwUMbc/cGd6w$pr1aM4PAHCQsJFXaqOUXWJRgJaqhYK8971GpJ2CbXKU" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Description", "Password" },
                values: new object[] { null, "$argon2id$v=19$m=65536,t=3,p=1$+fonD39nASHep1fht14f/Q$Q9graCWT/DO/NndIuaAGgA60ei+5/QdzdDuAZjiUSoM" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Description", "Password" },
                values: new object[] { null, "$argon2id$v=19$m=65536,t=3,p=1$LtppRlPhSGfG2YFY+uehHA$d/TMS9gKughMiiRT1XiMN3DCtXVPLc9Lylky28gN4Kc" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Description", "Password" },
                values: new object[] { null, "$argon2id$v=19$m=65536,t=3,p=1$wDPJpiIe1Oo3vTqCEX5fnQ$KvZbrutpuYCsmM0SpIE7G6I2faTkw0j0gsMd7mhCeu4" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Description", "Password" },
                values: new object[] { null, "$argon2id$v=19$m=65536,t=3,p=1$sEXnWVRwo4qW2QzbbfKkdQ$phFbTPNuMbFWQtUm2xCs5EXFe3RWN521FjQiktXcoqw" });

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_Vehicles_VehicleId",
                table: "Bookings",
                column: "VehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_Vehicles_VehicleId",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "VehicleId",
                table: "Bookings",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "PickUpPlace",
                table: "Bookings",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<double>(
                name: "PickUpLongitude",
                table: "Bookings",
                type: "double",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double");

            migrationBuilder.AlterColumn<Point>(
                name: "PickUpLocation",
                table: "Bookings",
                type: "point",
                nullable: true,
                oldClrType: typeof(Point),
                oldType: "point");

            migrationBuilder.AlterColumn<double>(
                name: "PickUpLatitude",
                table: "Bookings",
                type: "double",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double");

            migrationBuilder.AlterColumn<string>(
                name: "DropOffPlace",
                table: "Bookings",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<double>(
                name: "DropOffLongitude",
                table: "Bookings",
                type: "double",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double");

            migrationBuilder.AlterColumn<Point>(
                name: "DropOffLocation",
                table: "Bookings",
                type: "point",
                nullable: true,
                oldClrType: typeof(Point),
                oldType: "point");

            migrationBuilder.AlterColumn<double>(
                name: "DropOffLatitude",
                table: "Bookings",
                type: "double",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "double");

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

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_Vehicles_VehicleId",
                table: "Bookings",
                column: "VehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id");
        }
    }
}
