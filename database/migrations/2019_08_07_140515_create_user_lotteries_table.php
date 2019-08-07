<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserLotteriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('user_lotteries', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger("user_id" );
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedInteger("lottery_id" );
            $table->foreign('lottery_id')->references('id')->on('lotteries');
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
        Schema::dropIfExists('user_lotteries');
    }
}
