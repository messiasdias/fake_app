import Vue from 'vue'
import Vuex from 'vuex'
import modUser from './user' 
import router from './../routes/router'
import $ from 'jquery'

let api = {
    access_token: process.env.VUE_APP_API_TOKEN,
    url : process.env.VUE_APP_API_URL
}

let state = {
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

        if( navegation.toLowerCase() == 'back' ){
            context.dispatch('user/all', 'last', { root: true })
            router.go(-1)
        }

        if( navegation != context.state.navegation){
            router.push(navegation).catch(err => {console.log(err)})
            context.commit('navegation', navegation)
        }
    },

    ajax: async function(context, config={}){
      
        let ajaxconfig = {
            method: config.method ? config.method.toUpperCase() : "GET" ,
            url: api.url + config.url,
            data: config.formdata ? config.formdata : {}, 
            headers:  { Authorization: 'Bearer '+api.access_token },
        } 
        
        let ajaxResponse =  await $.ajax(ajaxconfig).then( (response) => {
             return response
        })
        
        return ajaxResponse
    },

}



let Store =  {

    state:state,
    actions:actions,
    mutations:mutations,
    
    modules: {
        user:modUser
    }
}


Vue.use(Vuex)
export default new Vuex.Store(Store)