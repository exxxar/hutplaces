<?php

namespace App\Providers;

use Chatkit\Chatkit;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191);
       // Schema::enableForeignKeyConstraints();

        Blade::if('dev', function ($conidtion = true) {
            return config("app.debug")==$conidtion;
        });

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind('ChatKit', function() {
            return new Chatkit([
                'instance_locator' => config('services.chatkit.locator'),
                'key' => config('services.chatkit.secret'),
            ]);
        });

    }
}
