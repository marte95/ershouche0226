import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import VueBus from 'vue-bus'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import App from './App.vue'
import routerConfig from './router/'
import storeConfig from './store/'

Vue.use(VueBus)
Vue.use(VueRouter)
Vue.use(iView)
Vue.use(Vuex)

const router = new VueRouter(routerConfig)
const store = new Vuex.Store(storeConfig)

// 路由后置钩子
router.afterEach((to, from)=>{
    console.log(to)
    // 告诉store我切换了路由，每个路由的meta都有一个column属性，声明着路由的名称
    store.commit('routerStore/changeColumn', { 
      column: to.meta.column, 
      scolumn: to.meta.scolumn, 
      scolumnc: to.meta.scolumnc 
    })
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
