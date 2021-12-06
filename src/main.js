import * as Vue from 'vue'
import * as Store from 'vuex'
import * as VueRouter from 'vue-router'

import App from './App.vue'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from "./pages/Register";
import Category from "./pages/Category";
import CategoryCreate from "./pages/Category-create";
import CategoryDelete from "./pages/Category-delete"


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes : [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/category', component: Category },
        { path: '/category/{id}', component: Category },
        { path: '/category-create', component: CategoryCreate },
        { path: '/category-delete', component: CategoryDelete },
    ],
})



const store = Store.createStore({
    state: {
        isAuth: true
    },
    getters: {}
})


Vue.createApp(App).use(router).use(store).mount('#app');


