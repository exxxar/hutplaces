<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('packs', function (Blueprint $table) {
            $table->increments('id');

            $table->string('title')->default('');
            $table->string('description', 2000)->default('');
            $table->integer('console_type')->default(0);//0 - xbox, 1 - ps4, 2 - pc
            $table->integer('packs_type')->default(0);
            $table->integer('game_type')->default(0);//0 - NHL,1 - NBA, 2 - FIFA
            $table->double('price');
            $table->string('image')->nullable()->default('');
            $table->integer('lifetime')->default(0);//0 - unlimited, 1 - 12, 2 - 24, 3 - 36...

            $table->integer('lots_in_pack')->default(0);

            $table->integer('lots_guaranteed')->default(0);

            $table->boolean('is_active')->default(true);
            $table->unsignedInteger('seller_id');
            $table->foreign('seller_id')->references('id')->on('users');
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
        Schema::dropIfExists('packs');
    }
}
