<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCardsStorageHUTDBTable extends Migration
{
    /**
     *
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards_storage_hutdb', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('aOVR')->nullable()->default(0);
            $table->integer('acc_agi')->nullable()->default(0);
            $table->integer('age')->nullable()->default(0);
            $table->integer('agi_dur')->nullable()->default(0);
            $table->integer('agr')->nullable()->default(0);
            $table->integer('bal_end')->nullable()->default(0);
            $table->integer('blk_rec')->nullable()->default(0);
            $table->string('card')->nullable()->default('');
            $table->string('card_synergies',5000)->nullable()->default('');
            $table->integer('chk')->nullable()->default(0);
            $table->integer('chk_pos')->nullable()->default(0);
            $table->integer('daw_ppf')->nullable()->default(0);
            $table->integer('def_rbc')->nullable()->default(0);
            $table->integer('dek_ang')->nullable()->default(0);
            $table->integer( 'dis_pas')->nullable()->default(0);
            $table->integer( 'dur')->nullable()->default(0);
            $table->integer('end_spd')->nullable()->default(0);
            $table->integer('fo_rc')->nullable()->default(0);
            $table->integer('fs')->nullable()->default(0);
            $table->integer('hae_brk')->nullable()->default(0);
            $table->string('handedness')->nullable()->default('');
            $table->integer( 'height')->nullable()->default(0);
            $table->integer('hnd_qck')->nullable()->default(0);
            $table->integer('hutdb_id')->nullable()->default(0);
            $table->integer('jersey')->nullable()->default(0);
            $table->string('league')->nullable()->default('');
            $table->string( 'nationality')->nullable()->default('');
            $table->string( 'nhl_id')->nullable()->default('');
            $table->integer('oaw_poi')->nullable()->default(0);
            $table->integer('ovr')->nullable()->default(0);
            $table->integer('pas_fh')->nullable()->default(0);
            $table->integer('pc_glh')->nullable()->default(0);
            $table->integer('picture')->nullable()->default(0);
            $table->string('player')->nullable()->default(0);
            $table->string('player_type')->nullable()->default(0);
            $table->integer('poi_pkc')->nullable()->default(0);
            $table->string('position')->nullable()->default('');
            $table->string('salary')->nullable()->default('');
            $table->integer('sch')->nullable()->default(0);
            $table->integer('sht_low')->nullable()->default(0);
            $table->integer('skt_hgh')->nullable()->default(0);
            $table->integer('spd_vis')->nullable()->default(0);
            $table->integer('ssa_gll')->nullable()->default(0);
            $table->integer('ssp_sth')->nullable()->default(0);
            $table->integer('str')->nullable()->default(0);
            $table->string('team')->nullable()->default('');
            $table->integer('weight')->nullable()->default(0);
            $table->integer('wsa_stl')->nullable()->default(0);
            $table->integer('wsp_agg')->nullable()->default(0);
            $table->integer('year')->nullable()->default(0);

            $table->string('image')->nullable()->default('');

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
        Schema::dropIfExists('cards_storage_hutdb');
    }
}
