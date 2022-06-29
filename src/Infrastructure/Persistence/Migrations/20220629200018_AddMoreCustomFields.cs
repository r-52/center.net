using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HumanCenterNet.Infrastructure.Persistence.Migrations
{
    public partial class AddMoreCustomFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "TrackedTimes",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ColorCode",
                table: "TimeTypes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CustomDescription",
                table: "TimeTypes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CustomHover",
                table: "TimeTypes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsPaidAbsence",
                table: "TimeTypes",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "MaxDaysPerYear",
                table: "TimeTypes",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "TrackedTimes");

            migrationBuilder.DropColumn(
                name: "ColorCode",
                table: "TimeTypes");

            migrationBuilder.DropColumn(
                name: "CustomDescription",
                table: "TimeTypes");

            migrationBuilder.DropColumn(
                name: "CustomHover",
                table: "TimeTypes");

            migrationBuilder.DropColumn(
                name: "IsPaidAbsence",
                table: "TimeTypes");

            migrationBuilder.DropColumn(
                name: "MaxDaysPerYear",
                table: "TimeTypes");
        }
    }
}
