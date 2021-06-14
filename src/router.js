import vueRouter from 'vue-router'
import User from './components/User.vue'
import UserAuth from './components/UserAuth.vue'
import Inventory from './components/Inventory.vue'
import Search from './components/Search.vue'
import Modify from './components/Modify.vue'
import App from './App.vue'

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
            path: '/user/username',
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
