<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePacksLotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('packs_lots', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger("packs_id" );
            $table->foreign('packs_id')->references('id')->on('packs');
            $table->unsignedInteger("lot_id" );
            $table->foreign('lot_id')->references('id')->on('lots');
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
        Schema::dropIfExists('packs_lots');
    }
}
