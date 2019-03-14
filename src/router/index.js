import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },{
      path: '/login',
      name: 'Login',
      component: (resolve) => require(['@/components/pages/login'], resolve),
    },{
      path: '/main',
      name: 'main',
      component: (resolve)=>require(['@/components/pages/main/main'],resolve),
    }
  ]
})
router.beforeEach((to,from,next)=>{
  next();
})
export default router;
