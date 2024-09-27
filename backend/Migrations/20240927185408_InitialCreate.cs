using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Role = table.Column<byte>(type: "tinyint unsigned", nullable: false),
                    Email = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Username = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Password = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Name = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    MobileNo = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    IsRegistered = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    DriverState = table.Column<int>(type: "int", nullable: true),
                    CreatedUserId = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    LastModifiedUserId = table.Column<int>(type: "int", nullable: true),
                    LastModifiedDate = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    DeletedUserId = table.Column<int>(type: "int", nullable: true),
                    DeletedDate = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Users_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Users_Users_DeletedUserId",
                        column: x => x.DeletedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Users_Users_LastModifiedUserId",
                        column: x => x.LastModifiedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedDate", "CreatedUserId", "DeletedDate", "DeletedUserId", "DriverState", "Email", "IsRegistered", "LastModifiedDate", "LastModifiedUserId", "MobileNo", "Name", "Password", "Role", "Username" },
                values: new object[,]
                {
                    { 1, null, null, null, null, null, "admin@system.com", true, null, null, "0712312312", "System", "$argon2id$v=19$m=65536,t=3,p=1$CirmKlyeYwklHWRXahKSFw$uLLG1lnOho+QELUcfy/IMLDLUloqz5pde2DR4LivAww", (byte)4, "admin_1" },
                    { 2, null, null, null, null, null, "sajith@apis.lk", true, null, null, "0772193832", "Sajith", "$argon2id$v=19$m=65536,t=3,p=1$IsE1BR8aCwx8yah4Wb+w4A$nIwjCwXTZnb7Zp7UxiK5/9BxGbKb9pRbhhCQXjoItKs", (byte)3, "sajith_2" },
                    { 3, null, null, null, null, null, "mohammedsaheer987@gmail.com", true, null, null, "0712805509", "Saheer", "$argon2id$v=19$m=65536,t=3,p=1$cLA1YaLZzp3NKHCGTyzF0w$zCsm7FNUGWEVMXsEUf5Od3UQMVqo2FkN1UX0iT0CV0Y", (byte)3, "mohammedsaheer987_3" },
                    { 4, null, null, null, null, null, "abduljizzi@gmail.com", true, null, null, "0759424247", "Abdul", "$argon2id$v=19$m=65536,t=3,p=1$YfLFmzRV57ujDj+7KwdnDg$QhxxSvb1zyTsfgND74Bler+MQlZdka3ISF7hcL/Bspc", (byte)2, "abduljizzi_4" },
                    { 5, null, null, null, null, null, "nifraz@live.com", true, null, null, "0712319319", "Nifraz", "$argon2id$v=19$m=65536,t=3,p=1$enPyEcGSd7+uW4PJO5xn+Q$IjOcIF2XrQ2NdUQ+Aptd6jPyn8HAfJKLtYKP0YlzVN0", (byte)2, "nifraz_5" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_CreatedUserId",
                table: "Users",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_DeletedUserId",
                table: "Users",
                column: "DeletedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_LastModifiedUserId",
                table: "Users",
                column: "LastModifiedUserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
