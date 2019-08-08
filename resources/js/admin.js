import './bootstrap';

import Vue from 'vue'
import VModal from 'vue-js-modal'
import VueLoading from 'vuejs-loading-plugin'

Vue.use(VueLoading,{
    text: 'HUTPLACES',
    background: 'rgba(0,0,0,0.97)',
    classes: ['hutplace-preloader'] // array, object or string
})

Vue.use(VModal)

Vue.component('card-search', require('./components/admin/CardSearch.vue').default);
Vue.component('admin-card-panel', require('./components/admin/AdminCardPanel.vue').default);

const app = new Vue({
    el: '#app'
});
