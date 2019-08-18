<?php

namespace App\Listeners;

use App\Events\Achievement;
use App\Events\GainAchievement;
use App\Events\GainExpirience;
use App\Stats;
use App\User;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;

class ProcessAchievements
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object $event
     * @return void
     */
    public function handle(Achievement $event)
    {

        $stats = Stats::where("stat_type", $event->trigger_type)
            ->where("user_id", $event->user_id)
            ->fisrt();

        if (!empty($stats)) {
            $stats->trigger_value += $event->trigger_value;
            $stats->save();
        } else {
            $stats = Stats::create([
                'trigger_type' => $event->trigger_type,
                'trigger_value' => $event->trigger_value,
                'user_id' => $event->user_id
            ]);
        }

        $achList = Achievement::where("trigger_type", $event->trigger_type)
            ->where("trigger_value", "<=", $stats->trigger_value)
            ->get();

        $user = User::find($event->user_id);

        $userAchList = $user
            ->achievements()
            ->where("trigger_type", $event->trigger_type)
            ->get();

        foreach ($achList as $ach) {
            $find = false;
            foreach ($userAchList as $userAch)
                if ($userAch->id == $ach->id)
                    $find = true;

            if (!$find) {
                if (!$ach->is_active)
                    continue;

                $user->achievements()->attach($ach->id);

                if ($ach->random_rewards) {

                    $reward = random_int(0, 5);
                    switch ($reward) {
                        case 0:
                            $user->money += $ach->money;
                            break;
                        case 1:
                            $user->discount += $ach->discount;
                            break;
                        case 2:
                            $user->exp += $ach->exp;
                            $user->save();
                            event(new GainExpirience($user->id));
                            break;
                        case 3:
                            $user->coins += $ach->coins;
                            break;
                        case 4:
                            $user->cards()->attach($ach->cards_id);
                            break;
                        case 5: //for item reward add
                            break;
                    }

                    $user->save();

                } else {
                    $user->money += $ach->money;
                    $user->discount += $ach->discount;
                    $user->exp += $ach->exp;
                    $user->coins += $ach->coins;
                    $user->save();

                    event(new GainExpirience($user->id));

                    $user->cards()->attach($ach->cards_id);
                }

                broadcast(new GainAchievement($ach, $user));
            }
        }


    }
}
