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
            'title'=>'level_0',
            'experience'=>'0',
            'level'=>'1',
            'discount'=>'0',
        ]);

        Level::create([
            'title'=>'level_1',
            'experience'=>'1000',
            'level'=>'2',
            'discount'=>'1',
        ]);

        Level::create([
            'title'=>'level_2',
            'experience'=>'5000',
            'level'=>'3',
            'discount'=>'2',
        ]);

        Level::create([
            'title'=>'level_3',
            'experience'=>'10000',
            'level'=>'4',
            'discount'=>'3',
        ]);

        Level::create([
            'title'=>'level_4',
            'experience'=>'50000',
            'level'=>'5',
            'discount'=>'4',
        ]);

        Level::create([
            'title'=>'level_5',
            'experience'=>'100000',
            'level'=>'6',
            'discount'=>'5',
        ]);

        Level::create([
            'title'=>'level_6',
            'experience'=>'500000',
            'level'=>'7',
            'discount'=>'6',
        ]);

        Level::create([
            'title'=>'level_7',
            'experience'=>'700000',
            'level'=>'8',
            'discount'=>'7',
        ]);

        Level::create([
            'title'=>'level_8',
            'experience'=>'900000',
            'level'=>'9',
            'discount'=>'8',
        ]);

        Level::create([
            'title'=>'level_9',
            'experience'=>'1000000',
            'level'=>'10',
            'discount'=>'9',
        ]);

        Level::create([
            'title'=>'level_10',
            'experience'=>'1300000',
            'level'=>'11',
            'discount'=>'10',
        ]);

        Level::create([
            'title'=>'level_11',
            'experience'=>'1600000',
            'level'=>'12',
            'discount'=>'11',
        ]);

        Level::create([
            'title'=>'level_12',
            'experience'=>'1900000',
            'level'=>'13',
            'discount'=>'12',
        ]);

        Level::create([
            'title'=>'level_13',
            'experience'=>'2100000',
            'level'=>'14',
            'discount'=>'13',
        ]);

        Level::create([
            'title'=>'level_14',
            'experience'=>'2400000',
            'level'=>'15',
            'discount'=>'14',
        ]);

        Level::create([
            'title'=>'level_15',
            'experience'=>'2700000',
            'level'=>'16',
            'discount'=>'15',
        ]);

        Level::create([
            'title'=>'level_16',
            'experience'=>'3000000',
            'level'=>'17',
            'discount'=>'16',
        ]);

        Level::create([
            'title'=>'level_17',
            'experience'=>'3300000',
            'level'=>'18',
            'discount'=>'17',
        ]);

        Level::create([
            'title'=>'level_18',
            'experience'=>'3600000',
            'level'=>'19',
            'discount'=>'18',
        ]);

        Level::create([
            'title'=>'level_19',
            'experience'=>'3600000',
            'level'=>'19',
            'discount'=>'18',
        ]);

        Level::create([
            'title'=>'level_17',
            'experience'=>'3900000',
            'level'=>'20',
            'discount'=>'19',
        ]);
    }
}
