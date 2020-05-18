import Vue from 'vue'
import Vuex from 'vuex'
import Store from './store/store'
import router from './router'
import App from './App.vue'
import './sass/main.scss'
import  './filters'

Vue.use(Vuex)
let store = new Vuex.Store(Store)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
