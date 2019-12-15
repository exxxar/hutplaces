<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('user_items', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger("user_id" );
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedInteger("item_id" );
            $table->foreign('item_id')->references('id')->on('items');
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
        Schema::dropIfExists('user_items');
    }
}
