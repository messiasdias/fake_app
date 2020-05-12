import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './components/List.vue'
import NotFound from './components/NotFound.vue'


let router =  new VueRouter( {
    mode: 'hash',
    routes: [
        {   
            path: '/', 
            component: List, 
            alias: '/list' 
        },


        {   
            path: '*', 
            component: NotFound, 
        },


    ]
})

Vue.use(VueRouter)
export default router
