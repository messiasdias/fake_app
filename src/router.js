import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './components/List.vue'
import Form from './components/Form.vue'
import Profile from './components/Profile.vue'
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
            path: '/list/:page', 
            component: List, 
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
            path: '/profile/:id', 
            component: Profile, 
            alias: '/user/:id' ,
        },


        {   
            path: '*', 
            component: NotFound, 
        },


    ]
})

Vue.use(VueRouter)
export default router
