import Vue from 'vue'
import vueRouter from 'vue-router'
import User from './components/User.Vue'
import UserAuth from './components/UserAuth.Vue'
import Inventory from './components/Inventory.Vue'
import Search from './components/Search.Vue'
import Modify from './components/Modify.Vue'
import App from './App.Vue'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
        path: '/',
        name: "root",
        component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            path: '/user/auth',
            name: "user_auth",
            component: UserAuth
        },
        {
        path: '/inventory',
        name: "inventory",
        component: Inventory
        },
        {
        path: '/inventory/product/',
        name: "buscar",
        component: Search
        },
        {
        path: '/inventory/product/modify/',
        name: "modificar",
        component: Modify
        },
    ]
})
export default router
