<?php

use App\Setting;
use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Setting::create([
            'title' => 'tax',
            'value' => '5'
        ]);

        Setting::create([
            'title' => 'coins_exchange',
            'value' => '5'
        ]);


        Setting::create([
            'title' => 'money_exchange',
            'value' => '1'
        ]);


        Setting::create([
            'title' => 'coins_title',
            'value' => 'pucks'
        ]);


        Setting::create([
            'title' => 'years',
            'value' => '{"2018","2019","220"}'
        ]);
    }
}
