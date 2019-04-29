<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use G2APay\G2APay;

class G2AServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {

        $this->app->singleton(G2APay::class, function ($app) {
            $hash =env('G2A_HASH'); // Get it from G2APay
            $secret = env('G2A_SECRET'); // Get it from G2APay
            $email = env('G2A_EMAIL'); // Your G2APay store email
            $success = env('G2A_SUCCESS_URL'); // URL for successful callback;
            $fail = env('G2A_FAIL_URL'); // URL for failed callback;
            $order = env('G2A_DEFAULT_ORDER'); // Choose your order id or invoice number, can be anything
            $currency = env('G2A_DEFAULT_CURRENCY'); // Pass currency, if no given will use "USD"

            return new G2APay($hash, $secret, $email, $success, $fail, $order, $currency);
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
