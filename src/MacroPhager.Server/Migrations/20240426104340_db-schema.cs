using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MacroPhager.Server.Migrations
{
    /// <inheritdoc />
    public partial class dbschema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    username = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    email = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    password = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    first_name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    last_name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    macro_goal = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    tdee = table.Column<float>(type: "real", nullable: false),
                    profile_picture = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    img_type = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.username);
                });

            migrationBuilder.CreateTable(
                name: "FoodItems",
                columns: table => new
                {
                    food_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    created_by = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    food_description = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    serving_size = table.Column<float>(type: "real", nullable: false),
                    calories = table.Column<float>(type: "real", nullable: false),
                    fat = table.Column<float>(type: "real", nullable: false),
                    carbohydrate = table.Column<float>(type: "real", nullable: false),
                    protein = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FoodItems", x => x.food_id);
                    table.ForeignKey(
                        name: "FK_FoodItems_Accounts_created_by",
                        column: x => x.created_by,
                        principalTable: "Accounts",
                        principalColumn: "username",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Friends",
                columns: table => new
                {
                    username = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    friend_username = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Friends", x => x.username);
                    table.ForeignKey(
                        name: "FK_Friends_Accounts_username",
                        column: x => x.username,
                        principalTable: "Accounts",
                        principalColumn: "username",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Meals",
                columns: table => new
                {
                    meal_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    created_by = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    name = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Meals", x => x.meal_id);
                    table.ForeignKey(
                        name: "FK_Meals_Accounts_created_by",
                        column: x => x.created_by,
                        principalTable: "Accounts",
                        principalColumn: "username",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    post_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    title = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    posted_by = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    time_stamp = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.post_id);
                    table.ForeignKey(
                        name: "FK_Posts_Accounts_posted_by",
                        column: x => x.posted_by,
                        principalTable: "Accounts",
                        principalColumn: "username",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DailyLogs",
                columns: table => new
                {
                    log_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    username = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    date = table.Column<DateOnly>(type: "date", nullable: false),
                    FoodItemfood_id = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DailyLogs", x => x.log_id);
                    table.ForeignKey(
                        name: "FK_DailyLogs_Accounts_username",
                        column: x => x.username,
                        principalTable: "Accounts",
                        principalColumn: "username",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DailyLogs_FoodItems_FoodItemfood_id",
                        column: x => x.FoodItemfood_id,
                        principalTable: "FoodItems",
                        principalColumn: "food_id");
                });

            migrationBuilder.CreateTable(
                name: "MealFoods",
                columns: table => new
                {
                    meal_food_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    meal_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    food_id = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    saved_serving = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MealFoods", x => x.meal_food_id);
                    table.ForeignKey(
                        name: "FK_MealFoods_FoodItems_food_id",
                        column: x => x.food_id,
                        principalTable: "FoodItems",
                        principalColumn: "food_id");
                    table.ForeignKey(
                        name: "FK_MealFoods_Meals_meal_id",
                        column: x => x.meal_id,
                        principalTable: "Meals",
                        principalColumn: "meal_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LoggedFoods",
                columns: table => new
                {
                    logged_food_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    log_id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    food_id = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    logged_serving = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoggedFoods", x => x.logged_food_id);
                    table.ForeignKey(
                        name: "FK_LoggedFoods_DailyLogs_log_id",
                        column: x => x.log_id,
                        principalTable: "DailyLogs",
                        principalColumn: "log_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LoggedFoods_FoodItems_food_id",
                        column: x => x.food_id,
                        principalTable: "FoodItems",
                        principalColumn: "food_id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_DailyLogs_FoodItemfood_id",
                table: "DailyLogs",
                column: "FoodItemfood_id");

            migrationBuilder.CreateIndex(
                name: "IX_DailyLogs_username",
                table: "DailyLogs",
                column: "username");

            migrationBuilder.CreateIndex(
                name: "IX_FoodItems_created_by",
                table: "FoodItems",
                column: "created_by");

            migrationBuilder.CreateIndex(
                name: "IX_LoggedFoods_food_id",
                table: "LoggedFoods",
                column: "food_id");

            migrationBuilder.CreateIndex(
                name: "IX_LoggedFoods_log_id",
                table: "LoggedFoods",
                column: "log_id");

            migrationBuilder.CreateIndex(
                name: "IX_MealFoods_food_id",
                table: "MealFoods",
                column: "food_id");

            migrationBuilder.CreateIndex(
                name: "IX_MealFoods_meal_id",
                table: "MealFoods",
                column: "meal_id");

            migrationBuilder.CreateIndex(
                name: "IX_Meals_created_by",
                table: "Meals",
                column: "created_by");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_posted_by",
                table: "Posts",
                column: "posted_by");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Friends");

            migrationBuilder.DropTable(
                name: "LoggedFoods");

            migrationBuilder.DropTable(
                name: "MealFoods");

            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropTable(
                name: "DailyLogs");

            migrationBuilder.DropTable(
                name: "Meals");

            migrationBuilder.DropTable(
                name: "FoodItems");

            migrationBuilder.DropTable(
                name: "Accounts");
        }
    }
}
