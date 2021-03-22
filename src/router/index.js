import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'LoginScreen',
        component: () => import(/* webpackChunkName: "about" */ '../views/LoginScreen.vue')
    },
    {
        path: '/:id',
        name: 'ProfileScreen',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProfileScreen.vue')
    }
    
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
