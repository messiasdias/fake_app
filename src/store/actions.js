import router from '../router'
import $ from 'jquery'

export default{


    getUsers : async function(context){
        let response = await context.dispatch('ajax', {
            url : '/users?access-token='+context.state.api.access_token,
        })
        context.state.users = response.result
        console.log(context.state.users)
    },

    navegation: function(context, navegation){
        context.commit('navegation', navegation)
        router.push(navegation)
    },

    ajax: async function(context, config={}){
      
        let ajaxconfig = {
            method: config.method ? config.method.toUpperCase() : "GET" ,
            url: context.state.api.url + config.url,
            data: config.formdata ? config.formdata : {}, 
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