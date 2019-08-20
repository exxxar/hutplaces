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
            'lifetime' => Lifetime::hour_6,
            'is_active' => true,
            'title'=> "Short test promo",
            'description'=>"For test and development",
            'activation_count'=>0,
            'count'=>10,
            'money'=>1000,
            'code'=>strtoupper(substr(base64_encode( random_int(0,9999999)), 0, 8)),
        ]);

        Promocode::create([
            'lifetime' => Lifetime::hour_24,
            'is_active' => true,
            'title'=> "Short test promo 2",
            'description'=>"For test and development 2",
            'activation_count'=>0,
            'count'=>100,
            'exp'=>1000,
            'discount'=>5,
            'coins'=>100,
            'code'=>strtoupper(substr(base64_encode( random_int(0,9999999)), 0, 8)),
        ]);

    }
}
