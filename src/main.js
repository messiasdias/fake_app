import Vue from 'vue'
import Vuex from 'vuex'
import Store from './store/store'
import router from './routes/router'
import App from './App.vue'
import FontAwesomeIcon  from "./fontawsome"
import './sass/main.scss'
import  './filters'
import './dom'
Vue.component('fontawesome',FontAwesomeIcon)

Vue.use(Vuex)
let store = new Vuex.Store(Store)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
