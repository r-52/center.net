using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HumanCenterNet.Infrastructure.Persistence.Migrations
{
    public partial class AddSlugToTimeTracking : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Slug",
                table: "TrackedTimes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Slug",
                table: "TrackedTimes");
        }
    }
}
