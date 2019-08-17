<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Achievement
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $trigger_type;
    public $trigger_value;
    public $user_id;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($trigger_type,$trigger_value,$user_id)
    {
        $this->user_id = $user_id;
        $this->trigger_type = $trigger_type;
        $this->trigger_value = $trigger_value;
    }


}
