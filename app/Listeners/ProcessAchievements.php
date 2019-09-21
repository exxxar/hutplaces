<?php

namespace App\Listeners;


use App\Achievement;
use App\Events\Achievement as Ach;
use App\Events\GainAchievement;
use App\Events\GainExpirience;
use App\Events\UserUpdate;
use App\Stats;
use App\User;
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
    public function handle(Ach $event)
    {

        $stats = Stats::where("stat_type", $event->trigger_type)
            ->where("user_id", $event->user_id)
            ->first();

        if (!empty($stats)) {
            $stats->stat_value += $event->trigger_value;
            $stats->save();
        } else {
            $stats = Stats::create([
                'stat_type' => $event->trigger_type,
                'stat_value' => $event->trigger_value,
                'user_id' => $event->user_id
            ]);
        }

        broadcast(new UserUpdate($event->user_id));

        Log::info("stats value  " . $stats->stat_value);
        Log::info("trigger type  " . $event->trigger_type);

        $achList = Achievement::where("trigger_type", $event->trigger_type)
            ->where("trigger_value", "<=", $stats->stat_value)
            ->get();

        Log::info("ach list  " . $achList);

        $user = User::find($event->user_id);

        $userAchList = $user
            ->achievements()
            ->where("trigger_type", $event->trigger_type)
            ->get();

        Log::info("user ach list count " . count($userAchList));


        foreach ($achList as $ach) {
            $find = $user
                ->achievements()
                ->where("achievement_id", $ach->id)
                ->first();

            if ($find==null) {
                 if (!$ach->is_active)
                    continue;

                $user->achievements()->attach($ach->id);

                $money = $ach->money==null?0:$ach->money;
                $discount = $ach->discount==null?0:$ach->discount;
                $exp = $ach->exp==null?0:$ach->exp;
                $coins = $ach->coins ==null?0:$ach->coins;
                $bonus = $ach->bonus ==null?0:$ach->bonus;


                if ($ach->random_rewards) {

                    $reward = random_int(0, 6);
                    switch ($reward) {
                        case 0:
                            $user->money = $user->money == null ? $money : $user->money + $money;
                            break;
                        case 1:
                            $user->discount = $user->discount == null ? $discount : max($user->discount, $discount);
                            break;
                        case 2:
                            $user->exp = $user->exp == null ? $exp : $user->exp + $exp;
                            $user->save();
                            event(new GainExpirience($user->id));
                            break;
                        case 3:
                            $user->coins = $user->coins == null ? $coins : $user->coins + $coins;
                            break;
                        case 4:
                            if ($ach->card_id)
                                $user->cards()->attach($ach->card_id);
                            break;
                        case 5:
                            if ($ach->item_id)
                                $user->items()->attach($ach->item_id);
                            break;
                        case 6:
                            $user->bonus = $user->bonus == null ? $bonus : $user->bonus + $bonus;
                            break;
                    }

                    $user->save();

                } else {
                    $user->money = $user->money == null ? $money : $user->money + $money;
                    $user->discount = $user->discount == null ? $discount : max($user->discount, $discount);
                    $user->exp = $user->exp == null ? $exp : $user->exp + $exp;
                    $user->coins = $user->coins == null ? $coins : $user->coins + $coins;
                    $user->bonus = $user->bonus == null ? $bonus : $user->bonus + $bonus;
                    $user->save();

                    event(new GainExpirience($user->id));

                    if ($ach->card_id)
                        $user->cards()->attach($ach->card_id);

                    if ($ach->item_id)
                        $user->items()->attach($ach->item_id);

                }

                broadcast(new GainAchievement($ach, $user));
            }
        }


    }
}
