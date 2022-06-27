using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HumanCenterNet.Infrastructure.Persistence.Migrations
{
    public partial class AddTimeTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LastModifiedBy",
                table: "TodoLists",
                newName: "UpdatedBy");

            migrationBuilder.RenameColumn(
                name: "LastModified",
                table: "TodoLists",
                newName: "UpdatedAt");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "TodoLists",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "LastModifiedBy",
                table: "TodoItems",
                newName: "UpdatedBy");

            migrationBuilder.RenameColumn(
                name: "LastModified",
                table: "TodoItems",
                newName: "UpdatedAt");

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "TodoItems",
                newName: "CreatedAt");

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    ProjectStartAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    ProjectEndAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    BookableTasksAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    BookableTasksEndAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    CustomerName = table.Column<string>(type: "TEXT", nullable: false),
                    CustomerId = table.Column<string>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatedBy = table.Column<string>(type: "TEXT", nullable: true),
                    UpdatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    UpdatedBy = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TimeTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    IsCustom = table.Column<bool>(type: "INTEGER", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatedBy = table.Column<string>(type: "TEXT", nullable: true),
                    UpdatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    UpdatedBy = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TimeTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tasks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BookableStartAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    BookableEndAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    Title = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    MaxBookingCount = table.Column<int>(type: "INTEGER", nullable: false),
                    ProjectId = table.Column<int>(type: "INTEGER", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatedBy = table.Column<string>(type: "TEXT", nullable: true),
                    UpdatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    UpdatedBy = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tasks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tasks_Projects_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "Projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TrackedTimes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    StartedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    EndedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    HumanTimeDuration = table.Column<string>(type: "TEXT", nullable: true),
                    TrackedHours = table.Column<int>(type: "INTEGER", nullable: false),
                    TrackedMinutes = table.Column<int>(type: "INTEGER", nullable: false),
                    TimeTypeId = table.Column<int>(type: "INTEGER", nullable: false),
                    TaskId = table.Column<int>(type: "INTEGER", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatedBy = table.Column<string>(type: "TEXT", nullable: true),
                    UpdatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    UpdatedBy = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrackedTimes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TrackedTimes_Tasks_TaskId",
                        column: x => x.TaskId,
                        principalTable: "Tasks",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TrackedTimes_TimeTypes_TimeTypeId",
                        column: x => x.TimeTypeId,
                        principalTable: "TimeTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_ProjectId",
                table: "Tasks",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_TrackedTimes_TaskId",
                table: "TrackedTimes",
                column: "TaskId");

            migrationBuilder.CreateIndex(
                name: "IX_TrackedTimes_TimeTypeId",
                table: "TrackedTimes",
                column: "TimeTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TrackedTimes");

            migrationBuilder.DropTable(
                name: "Tasks");

            migrationBuilder.DropTable(
                name: "TimeTypes");

            migrationBuilder.DropTable(
                name: "Projects");

            migrationBuilder.RenameColumn(
                name: "UpdatedBy",
                table: "TodoLists",
                newName: "LastModifiedBy");

            migrationBuilder.RenameColumn(
                name: "UpdatedAt",
                table: "TodoLists",
                newName: "LastModified");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "TodoLists",
                newName: "Created");

            migrationBuilder.RenameColumn(
                name: "UpdatedBy",
                table: "TodoItems",
                newName: "LastModifiedBy");

            migrationBuilder.RenameColumn(
                name: "UpdatedAt",
                table: "TodoItems",
                newName: "LastModified");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "TodoItems",
                newName: "Created");
        }
    }
}
