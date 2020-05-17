import modUser from './user' 
import router from './../router'
import $ from 'jquery'

let state = {
    api : {
        //access_token: process.env.API_TOKEN,
        //url : process.env.API_URL
        //Temporario
        access_token: 'OFTmOE-ksyOYl0aIDCZvGAWPzfCJPfRV4zm8',
        url : 'https://gorest.co.in/public-api'
    },
    navegation: 'list',
    menu: false,   
}


let mutations = {
    navegation: function(state, navegation){
        state.navegation = navegation
    },

    menu : function(state){
        if( state.menu ){
            state.menu = false;
        }else{
            state.menu = true;
        }    
    },
}


let actions = {
    navegation: function(context, navegation){
        if( navegation != context.state.navegation){
            router.push(navegation).catch(err => {console.log(err)})
            context.commit('navegation', navegation)
        }
    },

    ajax: async function(context, config={}){
      
        let ajaxconfig = {
            method: config.method ? config.method.toUpperCase() : "GET" ,
            url: context.state.api.url + config.url,
            data: config.formdata ? config.formdata : {}, 
            headers:  { Authorization: 'Bearer '+context.state.api.access_token },
            success : function(response){
                return response
            },
        } 
        
        let ajaxResponse =  await $.ajax(ajaxconfig).then( (response) => {
             return response
        })
        
        return ajaxResponse
    },

}



export default {
    state:state,
    actions:actions,
    mutations:mutations,
    modules: {
        user:modUser
    }
}