import VueRouter from 'vue-router'
import AboutMe from '../pages/AboutMe/AboutMe.vue'

const routes = [
    { path: '/about-me', component: AboutMe }
]

export const router = new VueRouter({
    routes
})
