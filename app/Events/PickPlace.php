<?php

namespace App\Events;

use App\Lottery;
use App\Place;
use App\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class PickPlace implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private $user;
    private $lottery;
    private $place;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($user, $lottery, $place)
    {
        //
        $this->user = $user;
        $this->lottery = $lottery;
        $this->place = $place;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('pick-place-chanel');
    }

    public function broadcastAs()
    {
        return 'pick-place-event';
    }
}
