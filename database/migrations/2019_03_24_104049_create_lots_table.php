<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lots', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('lottery_id')->nullable();

            $table->integer('coins')->nullable();

            $table->unsignedInteger('items_id')->nullable();
            $table->unsignedInteger('cards_id')->nullable();


            $table->foreign('lottery_id')->references('id')->on('lotteries');

            $table->foreign('items_id')->references('id')->on('items');
            $table->foreign('cards_id')->references('id')->on('cards_storage');

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
        Schema::dropIfExists('lots');
    }
}
