import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './home'
import User from './user'
import materialize from 'materialize-css'

let router =  {
    mode: 'hash',
    routes: [],
    append: function(routes) {
        for( let i in routes){
            this.routes[router.routes.length] = routes[i]
        }
    }
}


//Add Routes file objects
router.append(Home)
router.append(User)

//New VueRouter
let Router =  new VueRouter(router)
Vue.use(VueRouter)



Router.beforeEach((to, from, next) => {
    materialize.AutoInit()
    next()
})

export default Router
