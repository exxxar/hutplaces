<?php

namespace App\Providers;

use App\Events\Achievement;
use App\Listeners\ProcessAchievements;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        \SocialiteProviders\Manager\SocialiteWasCalled::class => [
            // add your listeners (aka providers) here
            'SocialiteProviders\\VKontakte\\VKontakteExtendSocialite@handle',
            'SocialiteProviders\\Twitter\\TwitterExtendSocialite@handle',
            'SocialiteProviders\\Facebook\\FacebookExtendSocialite@handle',
        ],
        Achievement::class => [
            ProcessAchievements::class
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }

    public function shouldDiscoverEvents()
    {
        return true;
    }

    protected function discoverEventsWithin()
    {
        return [
            $this->app->path('Listeners'),
        ];
    }
}
