<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CardsStorage extends Model
{
    protected $table = 'cards_storage';

    protected $fillable = [
        'ACC_AGI',
        'AGI_DUR',
        'AGR',
        'BAL_END',
        'BLK_REC',
        'CHK',
        'CHK_POS',
        'DAW_PPF',
        'DEF_RBC',
        'DEK_ANG',
        'DIS_PAS',
        'DUR',
        'END_SPD',
        'FO_RC',
        'FS',
        'HAE_BRK',
        'HGT',
        'HND_QCK',
        'League',
        'OAW_POI',
        'OVR',
        'PAS_FH',
        'PC_GLH',
        'POI_PKC',
        'Player',
        'Position',
        'SCH',
        'SHT_LOW',
        'SKT_HGH',
        'SPD_VIS',
        'SSA_GLL',
        'SSP_STH',
        'STR',
        'Shoots',
        'Team',
        'Type',
        'WGT',
        'WSA_STL',
        'WSP_AGG',
        'Year',
        'aOVR',
        'age',
        'jersey',
        'nationality',
        'nhl_id',
        'picture',
        'salary',
        'synergy',
        'Card',
        'Card_data',
        'create_date',
        'hutdb_id',
    ];

    public function lots()
    {
       return $this->hasMany('App\Lot');
    }

    public function users()
    {
        return $this->belongsToMany('App\User','user_card','id','user_id');
    }

    public function achievements(){
       return $this->hasMany('App\Achievement');
    }
}
