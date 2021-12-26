import * as Vue from 'vue'
import * as Store from 'vuex'
import * as VueRouter from 'vue-router'
import * as axios from 'axios'
import * as VueAxios from 'vue-axios'
import Notifications from '@kyvg/vue3-notification'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import App from './App.vue'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from "./pages/Register";
import Category from "./pages/Category";
import Link from "./pages/Link";


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes : [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/category', component: Category },
        { path: '/category/:id', component: Link, props: true },
    ],
})



const store = Store.createStore({
    state: {
        isAuth: false
    },
    mutations: {

        setAuth(){
                this.state.isAuth = true
        },

        clearAuth(){
            this.state.isAuth = false
            this.state.token = ""
            this.state.userId = 0
            this.state.username = ""
        }

    }
})


Vue.createApp(App)
    .use(router)
    .use(store)
    .use(VueAxios, axios)
    .use(Notifications)
    .use(VueSweetalert2)
    .mount('#app');


