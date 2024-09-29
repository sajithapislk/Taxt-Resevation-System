using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class AddTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsRegistered",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "LastModifiedDate",
                table: "Users",
                newName: "LastModifiedTime");

            migrationBuilder.RenameColumn(
                name: "DeletedDate",
                table: "Users",
                newName: "DeletedTime");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Users",
                newName: "CreatedTime");

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Users",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Users",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<decimal>(
                name: "Latitude",
                table: "Users",
                type: "decimal(65,30)",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Longitude",
                table: "Users",
                type: "decimal(65,30)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "PasswordResets",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Code = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ExpirationTime = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    CreatedUserId = table.Column<int>(type: "int", nullable: true),
                    CreatedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    LastModifiedUserId = table.Column<int>(type: "int", nullable: true),
                    LastModifiedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    DeletedUserId = table.Column<int>(type: "int", nullable: true),
                    DeletedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PasswordResets", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PasswordResets_Users_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PasswordResets_Users_DeletedUserId",
                        column: x => x.DeletedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PasswordResets_Users_LastModifiedUserId",
                        column: x => x.LastModifiedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PasswordResets_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "VehicleTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CreatedUserId = table.Column<int>(type: "int", nullable: true),
                    CreatedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    LastModifiedUserId = table.Column<int>(type: "int", nullable: true),
                    LastModifiedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    DeletedUserId = table.Column<int>(type: "int", nullable: true),
                    DeletedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VehicleTypes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VehicleTypes_Users_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_VehicleTypes_Users_DeletedUserId",
                        column: x => x.DeletedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_VehicleTypes_Users_LastModifiedUserId",
                        column: x => x.LastModifiedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Vehicles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    DriverId = table.Column<int>(type: "int", nullable: false),
                    VehicleTypeId = table.Column<int>(type: "int", nullable: false),
                    CostPerKm = table.Column<decimal>(type: "decimal(65,30)", nullable: false),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Color = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    VehicleNumber = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    PassengerSeat = table.Column<int>(type: "int", nullable: false),
                    IsAvailableAC = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    MaxLoad = table.Column<decimal>(type: "decimal(65,30)", nullable: false),
                    CreatedUserId = table.Column<int>(type: "int", nullable: true),
                    CreatedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    LastModifiedUserId = table.Column<int>(type: "int", nullable: true),
                    LastModifiedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    DeletedUserId = table.Column<int>(type: "int", nullable: true),
                    DeletedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vehicles_Users_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Vehicles_Users_DeletedUserId",
                        column: x => x.DeletedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Vehicles_Users_DriverId",
                        column: x => x.DriverId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Vehicles_Users_LastModifiedUserId",
                        column: x => x.LastModifiedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Vehicles_VehicleTypes_VehicleTypeId",
                        column: x => x.VehicleTypeId,
                        principalTable: "VehicleTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Bookings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Type = table.Column<byte>(type: "tinyint unsigned", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    VehicleId = table.Column<int>(type: "int", nullable: false),
                    StartLatitude = table.Column<decimal>(type: "decimal(65,30)", nullable: true),
                    StartLongitude = table.Column<decimal>(type: "decimal(65,30)", nullable: true),
                    StartTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    StartAddress = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    EndLatitude = table.Column<decimal>(type: "decimal(65,30)", nullable: true),
                    EndLongitude = table.Column<decimal>(type: "decimal(65,30)", nullable: true),
                    EndTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    EndAddress = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Distance = table.Column<decimal>(type: "decimal(65,30)", nullable: true),
                    Duration = table.Column<TimeSpan>(type: "time(6)", nullable: true),
                    Price = table.Column<decimal>(type: "decimal(65,30)", nullable: true),
                    Status = table.Column<byte>(type: "tinyint unsigned", nullable: false),
                    CreatedUserId = table.Column<int>(type: "int", nullable: true),
                    CreatedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    LastModifiedUserId = table.Column<int>(type: "int", nullable: true),
                    LastModifiedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    DeletedUserId = table.Column<int>(type: "int", nullable: true),
                    DeletedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bookings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Bookings_Users_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Bookings_Users_DeletedUserId",
                        column: x => x.DeletedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Bookings_Users_LastModifiedUserId",
                        column: x => x.LastModifiedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Bookings_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Bookings_Vehicles_VehicleId",
                        column: x => x.VehicleId,
                        principalTable: "Vehicles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "DriverFeedbacks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    BookingId = table.Column<int>(type: "int", nullable: false),
                    Rate = table.Column<int>(type: "int", nullable: false),
                    Feedback = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CreatedUserId = table.Column<int>(type: "int", nullable: true),
                    CreatedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    LastModifiedUserId = table.Column<int>(type: "int", nullable: true),
                    LastModifiedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    DeletedUserId = table.Column<int>(type: "int", nullable: true),
                    DeletedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DriverFeedbacks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DriverFeedbacks_Bookings_BookingId",
                        column: x => x.BookingId,
                        principalTable: "Bookings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DriverFeedbacks_Users_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_DriverFeedbacks_Users_DeletedUserId",
                        column: x => x.DeletedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_DriverFeedbacks_Users_LastModifiedUserId",
                        column: x => x.LastModifiedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "UserFeedbacks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    BookingId = table.Column<int>(type: "int", nullable: false),
                    Rate = table.Column<int>(type: "int", nullable: false),
                    Feedback = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CreatedUserId = table.Column<int>(type: "int", nullable: true),
                    CreatedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    LastModifiedUserId = table.Column<int>(type: "int", nullable: true),
                    LastModifiedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    DeletedUserId = table.Column<int>(type: "int", nullable: true),
                    DeletedTime = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserFeedbacks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserFeedbacks_Bookings_BookingId",
                        column: x => x.BookingId,
                        principalTable: "Bookings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserFeedbacks_Users_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_UserFeedbacks_Users_DeletedUserId",
                        column: x => x.DeletedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_UserFeedbacks_Users_LastModifiedUserId",
                        column: x => x.LastModifiedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$CAEIGkJw72/gNfcR+CG+Kg$aoVCfSUWYPN991y0z6kKeoMF6ipo7Z6NWn06RQYcjrE" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$pQfu6ufc8unAWMZIqhZ/7g$i2e/Mv8z2nLXt3duprIPEng0BQUZWdXyiWXm23UVcSQ" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$t3UVEC2kEn3lNgPTlL2FfQ$5F/tLyZexAIQm0E0Invf2+jqdlm8xrqp8ULpzdA3NWE" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$d0gsCrLVZoRQOmdMAfQa+w$94R/R5n8K8RBPlBwaLnH8wAFmav6jdwR31abQ3269so" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Latitude", "Longitude", "Password" },
                values: new object[] { null, null, "$argon2id$v=19$m=65536,t=3,p=1$QENgi439+D5Wl3SeV9FgQg$O/t0pPWCb3KgHw6APAVjkrhxpq2SV6tfmUaEiYe1Vnk" });

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_CreatedUserId",
                table: "Bookings",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_DeletedUserId",
                table: "Bookings",
                column: "DeletedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_LastModifiedUserId",
                table: "Bookings",
                column: "LastModifiedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_UserId",
                table: "Bookings",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_VehicleId",
                table: "Bookings",
                column: "VehicleId");

            migrationBuilder.CreateIndex(
                name: "IX_DriverFeedbacks_BookingId",
                table: "DriverFeedbacks",
                column: "BookingId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DriverFeedbacks_CreatedUserId",
                table: "DriverFeedbacks",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_DriverFeedbacks_DeletedUserId",
                table: "DriverFeedbacks",
                column: "DeletedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_DriverFeedbacks_LastModifiedUserId",
                table: "DriverFeedbacks",
                column: "LastModifiedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_PasswordResets_CreatedUserId",
                table: "PasswordResets",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_PasswordResets_DeletedUserId",
                table: "PasswordResets",
                column: "DeletedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_PasswordResets_LastModifiedUserId",
                table: "PasswordResets",
                column: "LastModifiedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_PasswordResets_UserId",
                table: "PasswordResets",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserFeedbacks_BookingId",
                table: "UserFeedbacks",
                column: "BookingId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserFeedbacks_CreatedUserId",
                table: "UserFeedbacks",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserFeedbacks_DeletedUserId",
                table: "UserFeedbacks",
                column: "DeletedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserFeedbacks_LastModifiedUserId",
                table: "UserFeedbacks",
                column: "LastModifiedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_CreatedUserId",
                table: "Vehicles",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_DeletedUserId",
                table: "Vehicles",
                column: "DeletedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_DriverId",
                table: "Vehicles",
                column: "DriverId");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_LastModifiedUserId",
                table: "Vehicles",
                column: "LastModifiedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_VehicleTypeId",
                table: "Vehicles",
                column: "VehicleTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_VehicleTypes_CreatedUserId",
                table: "VehicleTypes",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_VehicleTypes_DeletedUserId",
                table: "VehicleTypes",
                column: "DeletedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_VehicleTypes_LastModifiedUserId",
                table: "VehicleTypes",
                column: "LastModifiedUserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DriverFeedbacks");

            migrationBuilder.DropTable(
                name: "PasswordResets");

            migrationBuilder.DropTable(
                name: "UserFeedbacks");

            migrationBuilder.DropTable(
                name: "Bookings");

            migrationBuilder.DropTable(
                name: "Vehicles");

            migrationBuilder.DropTable(
                name: "VehicleTypes");

            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "LastModifiedTime",
                table: "Users",
                newName: "LastModifiedDate");

            migrationBuilder.RenameColumn(
                name: "DeletedTime",
                table: "Users",
                newName: "DeletedDate");

            migrationBuilder.RenameColumn(
                name: "CreatedTime",
                table: "Users",
                newName: "CreatedDate");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Password",
                keyValue: null,
                column: "Password",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Users",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Email",
                keyValue: null,
                column: "Email",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Users",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<bool>(
                name: "IsRegistered",
                table: "Users",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "IsRegistered", "Password" },
                values: new object[] { true, "$argon2id$v=19$m=65536,t=3,p=1$CirmKlyeYwklHWRXahKSFw$uLLG1lnOho+QELUcfy/IMLDLUloqz5pde2DR4LivAww" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "IsRegistered", "Password" },
                values: new object[] { true, "$argon2id$v=19$m=65536,t=3,p=1$IsE1BR8aCwx8yah4Wb+w4A$nIwjCwXTZnb7Zp7UxiK5/9BxGbKb9pRbhhCQXjoItKs" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "IsRegistered", "Password" },
                values: new object[] { true, "$argon2id$v=19$m=65536,t=3,p=1$cLA1YaLZzp3NKHCGTyzF0w$zCsm7FNUGWEVMXsEUf5Od3UQMVqo2FkN1UX0iT0CV0Y" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "IsRegistered", "Password" },
                values: new object[] { true, "$argon2id$v=19$m=65536,t=3,p=1$YfLFmzRV57ujDj+7KwdnDg$QhxxSvb1zyTsfgND74Bler+MQlZdka3ISF7hcL/Bspc" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "IsRegistered", "Password" },
                values: new object[] { true, "$argon2id$v=19$m=65536,t=3,p=1$enPyEcGSd7+uW4PJO5xn+Q$IjOcIF2XrQ2NdUQ+Aptd6jPyn8HAfJKLtYKP0YlzVN0" });
        }
    }
}
