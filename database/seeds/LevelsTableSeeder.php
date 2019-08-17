<?php

use App\Level;
use Illuminate\Database\Seeder;

class LevelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Level::create([
            'title'=>'levels.level_0',
            'experience'=>'0',
            'level'=>'1',
            'discount'=>'0',
        ]);

        Level::create([
            'title'=>'levels.level_1',
            'experience'=>'1000',
            'level'=>'2',
            'discount'=>'1',
        ]);

        Level::create([
            'title'=>'levels.level_2',
            'experience'=>'5000',
            'level'=>'3',
            'discount'=>'2',
        ]);

        Level::create([
            'title'=>'levels.level_3',
            'experience'=>'10000',
            'level'=>'4',
            'discount'=>'3',
        ]);

        Level::create([
            'title'=>'levels.level_4',
            'experience'=>'50000',
            'level'=>'5',
            'discount'=>'4',
        ]);

        Level::create([
            'title'=>'levels.level_5',
            'experience'=>'100000',
            'level'=>'6',
            'discount'=>'5',
        ]);

        Level::create([
            'title'=>'levels.level_6',
            'experience'=>'500000',
            'level'=>'7',
            'discount'=>'6',
        ]);


    }
}
