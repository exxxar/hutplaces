<?php

use App\Settings;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Settings::create([
            'title' => 'tax',
            'value' => '5'
        ]);

        Settings::create([
            'title' => 'coins_exchange',
            'value' => '5'
        ]);


        Settings::create([
            'title' => 'money_exchange',
            'value' => '1'
        ]);


        Settings::create([
            'title' => 'coins_title',
            'value' => 'pucks'
        ]);


        Settings::create([
            'title' => 'years',
            'value' => '{"2018","2019","220"}'
        ]);
    }
}
