import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/error",
            name: 'error404',
            component: r => require.ensure([], () => r(require('@/components/common/error404')), 'home-pages')
        }, {
            path: '/',
            redirect: '/login',
        }, {
            path: '/login',
            name: 'Login',
            component: r => require.ensure([], () => r(require('@/components/pages/login')), 'home-pages'),
        }, {
            path: '/main',
            name: 'main',
            component: resolve => require(['@/components/pages/main/main.vue'], resolve),
        }
    ]
})
router.beforeEach((to, from, next) => {
    next();
})
export default router;
