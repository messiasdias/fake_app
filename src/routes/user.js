import List from './../components/List.vue'
import Form from './../components/Form.vue'
import Profile from './../components/Profile.vue'

export default [
    {   
        path: '/users', 
        component: List, 
    },

    {   
        path: '/users/list/:page', 
        component: List, 
    },

    {   
        path: '/users/new',
        alias: '/users/add',
        component: Form, 
        props: { type: 'create'},
    },

    {   
        path: '/users/edit/:id',
        component: Form, 
        props: { type: 'update'},
    },

    {   
        path: '/users/profile/:id', 
        alias: '/user/profile/:id', 
        component: Profile, 
    }
]