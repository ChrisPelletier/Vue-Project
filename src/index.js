import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import { store } from './store/store'
import { router } from './router'
import './app.scss'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

/* eslint-disable-next-line no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
