<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCardsStorageNHLHUTTable extends Migration
{
    /**
     *
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards_storage_nhlhut', function (Blueprint $table) {
            $table->increments('id');
            $table->string('card_art',1500)->default('')->nullable();//: "<a id="3399" href="?id=3399" class="advanced-stats"><img src="images/card_art/players/3399.jpg" width="100px" /></a>"
            $table->string('card')->default('')->nullable();//: "WIN:MSP"
            $table->string('nationality')->default('')->nullable();//: "Canada"
            $table->string('league')->default('')->nullable();//: "INT"
            $table->string('team')->default('')->nullable();//: "CAN"
            $table->string('position')->default('')->nullable();//: "C"
            $table->string('ptype')->default('')->nullable();//: "PLY"
            $table->string('hand')->default('')->nullable();//: "Left"
            $table->string('weight')->default('')->nullable();//: "200"
            $table->string('height')->default('')->nullable();//: "5' 11""
            $table->string('full_name',1000)->default('')->nullable();//: "<a id="3399" href="?id=3399" class="advanced-stats">Sidney Crosby</a>"
            $table->string('synergies')->default('')->nullable();//: "AD, DK(2), FB(2)"
            $table->string('overall')->default('')->nullable();//: "95"
            $table->string('aOVR')->default('')->nullable();//: "94.45"
            $table->string('deking')->default('')->nullable();//: "97"
            $table->string('hand_eye')->default('')->nullable();//: "97"
            $table->string('passing')->default('')->nullable();//: "97"
            $table->string('puck_control')->default('')->nullable();//: "97"
            $table->string('slap_shot_accuracy')->default('')->nullable();//: "93"
            $table->string('slap_shot_power')->default('')->nullable();//: "94"
            $table->string('wrist_shot_accuracy')->default('')->nullable();//: "95"
            $table->string('wrist_shot_power')->default('')->nullable();//: "92"
            $table->string('acceleration')->default('')->nullable();//: "99"
            $table->string('agility')->default('')->nullable();//: "99"
            $table->string('balance')->default('')->nullable();//: "97"
            $table->string('endurance')->default('')->nullable();//: "95"
            $table->string('speed')->default('')->nullable();//: "98"
            $table->string('discipline')->default('')->nullable();//: "85"
            $table->string('off_awareness')->default('')->nullable();//: "97"
            $table->string('poise')->default('')->nullable();//: "97"
            $table->string('def_awareness')->default('')->nullable();//: "95"
            $table->string('faceoffs')->default('')->nullable();//: "99"
            $table->string('shot_blocking')->default('')->nullable();//: "87"
            $table->string('stick_checking')->default('')->nullable();//: "95"
            $table->string('aggression')->default('')->nullable();//: "87"
            $table->string('body_checking')->default('')->nullable();//: "87"
            $table->string('durability')->default('')->nullable();//: "90"
            $table->string('fighting_skill')->default('')->nullable();//: "83"
            $table->string('strength')->default('')->nullable();//: "91"
            $table->string('popularity')->default('')->nullable();//: "5%"

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
        Schema::dropIfExists('cards_storage_nhlhut');
    }
}
