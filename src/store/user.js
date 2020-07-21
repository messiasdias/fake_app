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
        }, { root: true }) 

        context.state.list = response.result.reverse()
        context.state.meta = response._meta
    },

    find : async function(context, id){
        let response = await context.dispatch('ajax', {
            url : '/users/'+id,
        }, {root:true})

        if(response.result._links.avatar.href == null){
            response.result._links.avatar.href = actions.getAvatar(context,response.result.gender)
        }   

        context.state.form.data = response.result
        return response.result
    },


    save: async function(context, args ){
        let response = await context.dispatch('crud',{type: args.type.toLowerCase(),form: args.form})
        return response
    },

    status: async function(context,user) {
        let response = await context.dispatch(
            'crud',
            { 
                type: 'update',
                form :{ 
                    id: user.id,
                    status: (user.status === 'active') ? 'inactive': 'active'
                } 
            }
        )

        if(response._meta.success){
            let userUpdated = await context.dispatch("find", user.id )
            context.commit('listUpdate', userUpdated )
        }
    },


    delete : async function(context, user ) {
        let result = confirm("Delete User "+user.first_name+"?") 
        if(result){
            let response = await context.dispatch('crud', { type:'delete', form:user} )
            if(response._meta.success){
                context.commit('listRemove', user)
            }
        } 
    },

    crud : async function(context,crud){
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
        }, { root: true }) 

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
    namespaced: true,
    state:state,
    actions:actions,
    mutations:mutations
}