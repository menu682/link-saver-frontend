import * as Vue from 'vue'
import * as Store from 'vuex'
import * as VueRouter from 'vue-router'
import * as axios from 'axios'
import * as VueAxios from 'vue-axios'
import Notifications from '@kyvg/vue3-notification'

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
        isAuth: false,
        token: "",
        userId: 0,
        username: ""
    },
    mutations: {

        setAuth(state, payload){
            if(payload.userId > 0){
                this.state.isAuth = true
                this.state.token = payload.token
                this.state.userId = payload.userId
                this.state.username = payload.username
            }
        },

        clearAuth(){
            this.state.isAuth = false
            this.state.token = ""
            this.state.userId = 0
            this.state.username = ""
        }

    }
})


Vue.createApp(App).use(router).use(store).use(VueAxios, axios).use(Notifications).mount('#app');


