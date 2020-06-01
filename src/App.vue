<template>
  <div id="app" class="row">
    
    <NavBar /> 
    <Menu /> 


    <div class="myMain">

      <!--Left-->
      <router-view class="col s12 l8" />

       <!--Right-->
       <SideBar class="col s12 l4" /> 

    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
//import materialize from 'materialize-css'
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import SideBar from './components/SideRight'

export default {
  name: 'App',
  components:{
    NavBar,
    Menu,
    SideBar
  },

  beforeCreate: function() {
    this.$store.dispatch('user/all', 'last')
  },
  computed: {
        ...mapState({
          meta : state => state.user.meta,
          list : state => state.user.list,
        })
    },

}
</script>