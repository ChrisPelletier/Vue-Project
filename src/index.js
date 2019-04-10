import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import { store } from './store/store'
import './app.scss'

Vue.use(BootstrapVue)

/* eslint-disable-next-line no-new */
new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
