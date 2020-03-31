import './bootstrap'
import Vue from 'vue'
import router from '../js/routes'
import App from './components/App.vue'
Vue.component('App', require('./components/App.vue').default)

new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')