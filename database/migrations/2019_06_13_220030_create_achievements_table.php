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
        Schema::create('achievements', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("category")->default(0);//0 - basik
            $table->integer("type")->default(0);//0 - частое, 1 - редкое, 2 - очень редко, 3 - легендарное
            $table->string("title")->default("");
            $table->string("description", 2000)->default("");
            $table->string("description", 2000)->default("");
            $table->integer("discount" )->nullable();
            $table->integer("exp" )->nullable();
            $table->integer("coins" )->nullable();
            $table->double("money" )->nullable();

            $table->integer("items_id" )->nullable();
            $table->integer("cards_id" )->nullable();
            $table->integer("images_storage_id" )->nullable();//achivement logo

            $table->boolean("isActive" )->default(1);

            $table->foreign('items_id')->references('id')->on('items');
            $table->foreign('cards_id')->references('id')->on('cards_storage');
            $table->foreign('images_storage_id')->references('id')->on('images_storage');



            $table->timestamps();
        });
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
