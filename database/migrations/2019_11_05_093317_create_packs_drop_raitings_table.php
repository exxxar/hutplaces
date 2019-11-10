<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePacksDropRaitingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packs_drop_raitings', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('min_ovr');
            $table->integer('max_ovr');
            $table->integer('rate');
            $table->unsignedInteger("packs_id");
            $table->foreign('packs_id')->references('id')->on('packs');
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
        Schema::dropIfExists('packs_drop_raitings');
    }
}
