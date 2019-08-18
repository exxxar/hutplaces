<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAchievementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('achievements', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("category")->default(0);//0 - basik
            $table->integer("type")->default(0);
            $table->string("title")->default("");
            $table->string("description", 2000)->default("");
            $table->integer("discount" )->nullable();
            $table->integer("exp" )->nullable();
            $table->integer("coins" )->nullable();
            $table->double("money" )->nullable();
            $table->string("image" )->nullable();
            $table->string("background" )->nullable();
            $table->boolean("random_rewards" )->default(1);
            $table->integer("trigger_type" )->nullable();
            $table->string("trigger_value" )->nullable();

            $table->unsignedInteger("item_id" )->nullable();
            $table->unsignedInteger("card_id" )->nullable();

            $table->boolean("is_active" )->default(1);

            $table->foreign('item_id')->references('id')->on('items');
            $table->foreign('card_id')->references('id')->on('cards_storage');




            $table->timestamps();
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('achievements');
    }
}
