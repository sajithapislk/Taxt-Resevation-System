using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class DropCoordinateColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Vehicles");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Vehicles");

            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DropOffLatitude",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "DropOffLongitude",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "PickUpLatitude",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "PickUpLongitude",
                table: "Bookings");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$Pn0RyusSKK4JGWhcSNcElw$aVPoQk/wxX3YArCQXb1z1B3FEPZvR0SS86OeZQ5qPM0");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$pca//MPGFvyiPr1zg/Wv1A$VxXw87nHeqLRnVsknvEr7t6B225CZJD5fuPComuh2Ao");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$gAVkMgJ/X1uNG2wrSIGEtA$nnLdc/E4NYiFFfiCT/0U5YobX87nPnNINtbiJQ785Fw");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$Zg4B/5Exg32RYg9/VHtLEQ$QXUtDy/MlSlDzarL1h5KBJDiUwNBucJur/dwoPtIxRE");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$mnS5aTMK7Xvdg8uxlsLKPw$/+UWyJlFaE5gnuOcmrhUiOIUULdCBVxK/N1gbGnTMng");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                table: "Vehicles",
                type: "double",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                table: "Vehicles",
                type: "double",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                table: "Users",
                type: "double",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                table: "Users",
                type: "double",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "DropOffLatitude",
                table: "Bookings",
                type: "double",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "DropOffLongitude",
                table: "Bookings",
                type: "double",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "PickUpLatitude",
                table: "Bookings",
                type: "double",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "PickUpLongitude",
                table: "Bookings",
                type: "double",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$ZjCfQ9yUQGnwUMbc/cGd6w$pr1aM4PAHCQsJFXaqOUXWJRgJaqhYK8971GpJ2CbXKU" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$+fonD39nASHep1fht14f/Q$Q9graCWT/DO/NndIuaAGgA60ei+5/QdzdDuAZjiUSoM" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$LtppRlPhSGfG2YFY+uehHA$d/TMS9gKughMiiRT1XiMN3DCtXVPLc9Lylky28gN4Kc" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$wDPJpiIe1Oo3vTqCEX5fnQ$KvZbrutpuYCsmM0SpIE7G6I2faTkw0j0gsMd7mhCeu4" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$sEXnWVRwo4qW2QzbbfKkdQ$phFbTPNuMbFWQtUm2xCs5EXFe3RWN521FjQiktXcoqw" });
        }
    }
}
