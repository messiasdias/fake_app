import NotFound from './../components/NotFound'
import Dashboard from './../components/Dashboard'

export default [
     //not fount
    {   
        path: '*', 
        component: NotFound, 
    },

    //home | dashboard
    {   
        path: '/', 
        component: Dashboard, 
        alias: '/home' 
    },
]