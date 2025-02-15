import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store.js'
import router from './router/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Antd)
const vueStore = new Vuex.Store(store)
new Vue({
  router,
  store: vueStore,
  render: h => h(App),
}).$mount('#app')