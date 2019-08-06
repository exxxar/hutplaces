import './bootstrap';

import Vue from 'vue'

Vue.component('card-search', require('./components/admin/CardSearch').default);

const app = new Vue({
    el: '#app'
});
