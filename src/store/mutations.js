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
    }
}