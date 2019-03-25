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
            $hash = 'your-api-hash'; // Get it from G2APay
            $secret = 'your-api-secret'; // Get it from G2APay
            $email = 'mail@example.com'; // Your G2APay store email
            $success = 'http://example.com/success/'; // URL for successful callback;
            $fail = 'http://example.com/failed/'; // URL for failed callback;
            $order = 2234; // Choose your order id or invoice number, can be anything
            $currency = 'USD'; // Pass currency, if no given will use "USD"

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
