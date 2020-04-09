/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import articles from './asset/components/Articles.vue';
import navbar from './asset/components/Navbar.vue';

Vue.component('navbar', require('./asset/components/Navbar.vue'));
Vue.component('articles', require('./asset/components/Articles.vue'));




const app = new Vue({
    el: '#app',
    components: {
        articles,
        navbar
       },
});
