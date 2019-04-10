import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import './app.scss'

Vue.use(BootstrapVue)

/* eslint-disable-next-line no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})
