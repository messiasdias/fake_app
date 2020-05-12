import router from '../router'
import $ from 'jquery'

export default{


    getUsers : async function(context, page=0){
        let response = await context.dispatch('ajax', {
            url : (page >= 1 ) ? '/users?page='+page : '/users' ,
            headers: { Authorization: 'Bearer '+context.state.api.access_token }
        })
        context.state.users.list = response.result
        context.state.users.meta = response._meta
    },

    getUser : async function(context, id){
        let response = await context.dispatch('ajax', {
            url : '/users/'+id+'?access-token='+context.state.api.access_token ,
        })
        return response.result
    },


    createUser : async function(context, form){
        let response = await context.dispatch('ajax', {
            url : '/users',
            method:'POST',
            formdata: form,
            headers: { Authorization: 'Bearer '+context.state.api.access_token }   
        }) 
       return response
    },


    updateUser : async function(context, form = false){
        let id = form ? form.id : context.state.users.form.id
        let response = await context.dispatch('ajax', {
            url : '/users/'+id+'?access-token='+context.state.api.access_token,
            method:'PATCH',
            formdata: form ? form : context.state.users.form   
        })
        return response
    },

    deleteUser : async function(context, id){
        let response = await context.dispatch('ajax', {
            url : '/users/'+id+'?access-token='+context.state.api.access_token,
            method:'DELETE',
        })
        return response
    },

    navegation: function(context, navegation){
        context.commit('navegation', navegation)
        console.log(navegation)
        router.push(navegation)
    },

    ajax: async function(context, config={}){
      
        let ajaxconfig = {
            method: config.method ? config.method.toUpperCase() : "GET" ,
            url: context.state.api.url + config.url,
            data: config.formdata ? config.formdata : {}, 
            headers: config.headers ? config.headers : {},
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