import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './components/List.vue'
import Form from './components/Form.vue'
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
            path: '/new', 
            component: Form, 
            alias: '/users/new' ,
            props: { type: 'create'}
        },

        {   
            path: '/edit/:id', 
            component: Form, 
            alias: '/users/edit/:id' ,
            props: { type: 'update'}
        },


        {   
            path: '*', 
            component: NotFound, 
        },


    ]
})

Vue.use(VueRouter)
export default router
