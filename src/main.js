// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/components/iview-ui'                //api:https://www.iviewui.com/docs/guide/start
import '@/style/common.scss'
import '@/style/icon/iconfont.css'
import Common from '@/utils/common'
import api from '@/api'

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)
Vue.prototype.$commonuse = Common;

Vue.prototype.$Api = api;
//阻止生产模式启动提示信息
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
