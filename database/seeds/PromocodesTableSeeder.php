<?php

use App\Enums\Lifetime;
use App\Promocode;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class PromocodesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Promocode::create([
            'lifetime' => Lifetime::hour_24,
            'is_active' => true,
            'title'=> "promo_1.title",
            'description'=>"promo_1.description",
            'activation_count'=>0,
            'count'=>5000,
            'bonus'=>30,
            'code'=>strtoupper(substr(base64_encode( random_int(0,9999999)), 0, 8)),
        ]);


    }
}
