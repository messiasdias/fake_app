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

    all : async function(context, page='last'){
        let getPage = (page == 'last') ?  10101010 : page
        let response = await context.dispatch('ajax', {
            url :'/users?page='+getPage
        }) 
        context.state.list = response.result
        context.state.meta = response._meta
    },

    find : async function(context, id){
        let response = await context.dispatch('ajax', {
            url : '/users/'+id,
        })

        if(response.result._links.avatar.href == null){
            response.result._links.avatar.href = actions.getAvatar(context,response.result.gender)
        }   

        context.state.form.data = response.result
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

    getAvatar: function(context, gender){
        let g = (gender.indexOf('male') > 0 ) ? "f" : 'm';
        let n = Math.ceil(Math.random() * 2)
        return 'img/avatar-'+g+n+'.png'
    }



}

//exporting
export default {
    state:state,
    actions:actions,
    mutations:mutations
}