//state
let state = {
    list: false,
    meta : {},
    form: {
        valid: false,
        message: false,
        data:false
    }   
}


//mutations
let mutations = {

    form : function(state, ...form){
        state.form = form
    },

    listRemove: function(state,user){
        let index = state.list.indexOf(user);
        if (index > -1) {
           state.list.splice(index, 1);
        }
        return state.list;
    },

    listUpdate: function(state,user){
        let index = state.list.indexOf(user);
        if (index > -1) {
            for(let i=0; i < user.length; i++ ){
                state.list[index][i] = user[i];
            }
        }
        return state.list;
    }

}

//actions
let actions = {

    all : async function(context, page=0){
        let response = await context.dispatch('ajax', {
            url : (page >= 1 ) ? '/users?page='+page : '/users' 
        }) 
        context.state.list = response.result
        context.state.meta = response._meta
    },

    find : async function(context, id){
        let response = await context.dispatch('ajax', {
            url : '/users/'+id,
        })

        context.state.form.data = {...response.result}
        if( response.result._links.avatar.href == null  ){
            context.state.form.data._links.avatar.href = 'img/avatar-m1.png'
        }

        return response.result

    },

    userCrud : async function(context,crud){
        let url = '/users'
        let method = 'POST'
       
        switch(crud.type){
            case 'create':
                method = 'POST'
            break
            case 'update':
                method = 'PATCH'
                url += '/'+crud.form.id
            break
            case 'delete':
                method = 'DELETE'
                url += crud.form.id ? '/'+crud.form.id : '/'+crud.form
            break
        }

        let response = await context.dispatch('ajax', {
            url : url,
            method: method,
            formdata: crud.form, 
        }) 

       return response

    },




}

//exporting
export default {
    state:state,
    actions:actions,
    mutations:mutations
}