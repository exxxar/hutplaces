
window._ = require('lodash');
window.timeSolver = require('timesolver/timeSolver.min.js');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
window.instanceLocator = "v1:us1:a885adfd-b99c-43f6-a989-0f619c9cb12e";

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    console.log(window.axios.defaults.headers.common['X-CSRF-TOKEN']);
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
/*

import Echo from 'laravel-echo'

window.Pusher = require('pusher-js');

window.Pusher.logToConsole = true;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    encrypted: false
});
*/

var Pusher = require('pusher-js');

Pusher.logToConsole = false;

var pusher = new Pusher('37f1cfbd4bda023198c9', {

    cluster: 'eu',
    forceTLS: true
});
window.pusher = pusher;



