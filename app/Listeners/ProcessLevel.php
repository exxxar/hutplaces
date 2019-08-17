<?php

namespace App\Listeners;

use App\Enums\TriggerType;
use App\Events\Achievement;
use App\Level;
use App\User;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ProcessLevel
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
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $levels = Level::all();
        if ($event->user_id==null) {
            foreach (User::all() as $user) {
                foreach ($levels as $level) {
                    if ($user->exp >= $level->experience) {
                        $user->level_id = $level->id;
                        $user->discount = max($level->discount, $user->discount);

                        event(new Achievement(TriggerType::Level, $level->level, $user->id));
                    }
                }
                $user->save();
            }
        }
        else {
            $user = User::find($event->user_id);
            foreach ($levels as $level) {
                if ($user->exp >= $level->experience) {
                    $user->level_id = $level->id;
                    $user->discount = max($level->discount, $user->discount);
                    event(new Achievement(TriggerType::Level, $level->level, $user->id));
                }
            }
            $user->save();

        }
    }
}
