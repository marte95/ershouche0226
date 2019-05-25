import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import VueBus from 'vue-bus'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import App from './App.vue'
import routerConfig from './router/'
import storeConfig from './store/'

Vue.use(VueBus)
Vue.use(iView)
Vue.use(Vuex)
Vue.use(Router)

const router = new Router(routerConfig)
const store = new Vuex.Store(storeConfig)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
