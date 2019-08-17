<?php

namespace App\Events;

use App\Achievement;
use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class GainAchievement implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $achievement;
    public $user;


    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($achievement, $user)
    {
        $this->user = $user;
        $this->achievement = $achievement;

    }


    public function broadcastOn()
    {
        return new Channel('achievement-gain-chanel');
    }



    public function broadcastAs()
    {
        return 'achievement-gain-event';
    }

}
