<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('user_card', function (Blueprint $table) {

            $table->increments('id');
            $table->unsignedInteger("user_id" );
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedInteger("card_id" );
            $table->foreign('card_id')->references('id')->on('cards_storage_nhlhut');

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
        Schema::dropIfExists('user_card');
    }
}
