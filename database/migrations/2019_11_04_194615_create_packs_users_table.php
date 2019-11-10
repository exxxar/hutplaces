<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePacksUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('packs_users', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger("packs_id");
            $table->foreign('packs_id')->references('id')->on('packs');
            $table->unsignedInteger("user_id");
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('packs_users');
    }
}
