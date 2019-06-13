<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersHasAchievementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_has_achievements', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("users_id" );
            $table->integer("achievements_id" );


            $table->foreign('users_id')->references('id')->on('users');
            $table->foreign('achievements_id')->references('id')->on('achievements');
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
        Schema::dropIfExists('users_has_achievements');
    }
}
