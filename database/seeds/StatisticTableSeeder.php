<?php

use App\Enums\TriggerType;
use App\Stats;
use App\User;
use Illuminate\Database\Seeder;

class StatisticTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $users = User::all();

        foreach (TriggerType::toArray() as $key => $value) {
            foreach($users as $user) {
                $stat = Stats::where("stat_type", $value)
                    ->where("user_id", $user->id)
                    ->first();

                if (empty($stat))
                {
                    $stat = Stats::create([
                        'stat_type' => $value,
                        'stat_value' => 0,
                        'user_id' => $user->id
                    ]);
                }
                    $user->stats()->save($stat);
            }

        }
    }
}
