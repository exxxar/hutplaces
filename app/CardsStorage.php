<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CardsStorage extends Model
{
    protected $table = 'cards_storage';

    protected $fillable = [
        'aOVR',
        'acc_agi',
        'age',
        'agi_dur',
        'agr',
        'bal_end',
        'blk_rec',
        'card',
       // 'card_synergies',
        'chk',
        'chk_pos',
        'daw_ppf',
        'def_rbc',
        'dek_ang',
        'dis_pas',
        'dur',
        'end_spd',
        'fo_rc',
        'fs',
        'hae_brk',
        'handedness',
        'height',
        'hnd_qck',
        'hutdb_id',
        'jersey',
        'league',
        'nationality',
        'nhl_id',
        'oaw_poi',
        'ovr',
        'pas_fh',
        'pc_glh',
        'picture',
        'player',
        'player_type',
        'poi_pkc',
        'position',
        'salary',
        'sch',
        'sht_low',
        'skt_hgh',
        'spd_vis',
        'ssa_gll',
        'ssp_sth',
        'str',
        'team',
        'weight',
        'wsa_stl',
        'wsp_agg',
        'year',
        'image'
    ];

    public function lots()
    {
       return $this->hasMany('App\Lot');
    }

    public function users()
    {
        return $this->belongsToMany('App\User','user_card','id','user_id')
            ->withTimestamps();
    }

    public function achievements(){
       return $this->hasMany('App\Achievement');
    }
}
