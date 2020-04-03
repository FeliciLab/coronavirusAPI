import './bootstrap'
import Vue from 'vue'
import router from '../js/router'
import App from './App.vue'
Vue.component('App', require('./App.vue').default)

new Vue({
    el: '#app',
    components: {App},
    router,
  })