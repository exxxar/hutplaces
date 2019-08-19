<?php

namespace App;

use App\Enums\TicketType;
use BenSampo\Enum\Traits\CastsEnums;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use CastsEnums;

    protected $enumCasts = [
        'ticket_type' => TicketType::class,
    ];

    protected $fillable = [
        'title',
        'email',
        'description',
        'user_id',
        'created_at',
        'updated_at',
        'is_active',
        'ticket_type'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
