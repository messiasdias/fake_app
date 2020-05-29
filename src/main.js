import Vue from 'vue'
import store from './store/store'
import router from './routes/router'
import App from './App.vue'
import FontAwesomeIcon  from "./fontawsome"
import './sass/main.scss'
import  './filters'


Vue.component('fontawesome',FontAwesomeIcon)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
