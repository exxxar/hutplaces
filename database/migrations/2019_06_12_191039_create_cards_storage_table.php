<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCardsStorageTable extends Migration
{
    /**
     * 
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards_storage', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("ACC_AGI")->nullable()->default(0);//99
            $table->integer("AGI_DUR")->nullable()->default(0);//99
            $table->integer("AGR")->nullable()->default(0);//89
            $table->integer("BAL_END")->nullable()->default(0);//99
            $table->integer("BLK_REC")->nullable()->default(0);//89
            $table->integer("CHK")->nullable()->default(0);//89
            $table->integer("CHK_POS")->nullable()->default(0);//93
            $table->string("Card")->nullable()->default("");//"PT"
            $table->integer("DAW_PPF")->nullable()->default(0);//99
            $table->integer("DEF_RBC")->nullable()->default(0);//98
            $table->integer("DEK_ANG")->nullable()->default(0);//99
            $table->integer("DIS_PAS")->nullable()->default(0);//87
            $table->integer("DUR")->nullable()->default(0);//89
            $table->integer("END_SPD")->nullable()->default(0);//91
            $table->integer("FO_RC")->nullable()->default(0);//84
            $table->integer("FS")->nullable()->default(0);//79
            $table->integer("HAE_BRK")->nullable()->default(0);//99
            $table->string("HGT")->nullable()->default("");// "5'11"
            $table->integer("HND_QCK")->nullable()->default(0);//99
            $table->string("League")->nullable()->default("");// "NHL"
            $table->integer("OAW_POI")->nullable()->default(0);//99
            $table->integer("OVR")->nullable()->default(0);//99
            $table->integer("PAS_FH")->nullable()->default(0);//99
            $table->integer("PC_GLH")->nullable()->default(0);//99
            $table->integer("POI_PKC")->nullable()->default(0);//99
            $table->string("Player")->nullable()->default("");// "Sidney Crosby"
            $table->string("Position")->nullable()->default("");// "C"
            $table->integer("SCH")->nullable()->default(0);//97
            $table->integer("SHT_LOW")->nullable()->default(0);//96
            $table->integer("SKT_HGH")->nullable()->default(0);//99
            $table->integer("SPD_VIS")->nullable()->default(0);//99
            $table->integer("SSA_GLL")->nullable()->default(0);//95
            $table->integer("SSP_STH")->nullable()->default(0);//96
            $table->integer("STR")->nullable()->default(0);//93
            $table->string("Shoots")->nullable()->default("");// "Left"
            $table->string("Team")->nullable()->default(""); //"PIT"
            $table->string("Type")->nullable()->default("");// "PLY"
            $table->integer("WGT")->nullable()->default(0);//200
            $table->integer("WSA_STL")->nullable()->default(0);//97
            $table->integer("WSP_AGG")->nullable()->default(0);//94
            $table->integer("Year")->nullable()->default(0);//19
            $table->integer("aOVR")->nullable()->default(0);//2019
            $table->integer("age")->nullable()->default(0);//31
            $table->dateTime("create_date")->nullable()->default("0000-00-00 00:00:00"); //"2019-03-05 04:21:33"
            $table->integer("hutdb_id")->nullable()->default(0);//'id' = 31397, 'id'=>'hutdb_id'
            $table->integer("jersey")->nullable()->default(0);//31
            $table->string("nationality")->nullable()->default("");// "Canada"
            $table->string("nhl_id")->nullable()->default("");// "8471675"
            $table->string("picture")->nullable()->default("");// "7337"
            $table->string("salary")->nullable()->default(""); //"8700000"
            $table->string("synergy")->nullable()->default("");// "{"PP":2,"DZ":1}"
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
        Schema::dropIfExists('cards_storage');
    }
}
