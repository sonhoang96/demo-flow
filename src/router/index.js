import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', component: () => import('../views/Sample/index')
    }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router;
