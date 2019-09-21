<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuctionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auctions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->default('');
            $table->integer('console_type')->default(0);//0 - xbox, 1 - ps4, 2 - pc
            $table->unsignedInteger('lot_id');
            $table->integer('game_type')->default(0);//0 - NHL,1 - NBA, 2 - FIFA
            $table->double('step_price');
            $table->double('bid_price');
            $table->unsignedInteger('buyer_id')->nullable();
            $table->double('buy_price');
            $table->integer('lot_type')->default(0);//0 - card, 1 - coins, 2 - other
            $table->integer('lifetime')->default(0);//0 - unlimited, 1 - 12, 2 - 24, 3 - 36...
            $table->boolean('is_active')->default(true);
            $table->unsignedInteger('seller_id');

            $table->foreign('lot_id')->references('id')->on('lots');

            $table->foreign('seller_id')->references('id')->on('users');

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
        Schema::dropIfExists('auctions');
    }
}
