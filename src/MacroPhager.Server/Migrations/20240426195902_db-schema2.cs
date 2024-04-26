using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MacroPhager.Server.Migrations
{
    /// <inheritdoc />
    public partial class dbschema2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Friends",
                table: "Friends");

            migrationBuilder.AddColumn<string>(
                name: "friendship_id",
                table: "Friends",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Friends",
                table: "Friends",
                column: "friendship_id");

            migrationBuilder.CreateIndex(
                name: "IX_Friends_username",
                table: "Friends",
                column: "username");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Friends",
                table: "Friends");

            migrationBuilder.DropIndex(
                name: "IX_Friends_username",
                table: "Friends");

            migrationBuilder.DropColumn(
                name: "friendship_id",
                table: "Friends");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Friends",
                table: "Friends",
                column: "username");
        }
    }
}
