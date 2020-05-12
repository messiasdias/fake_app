export default{
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

    usersListRemove: function(state,user){
        let index = state.users.list.indexOf(user);
        if (index > -1) {
           state.users.list.splice(index, 1);
        }

        return state.list;
    }


}