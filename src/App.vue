<template>
  <div id="app" class="row">
    
    <NavBar /> 
    <Menu /> 

    <div class="row col l12 m12 s12 myMain">
      <router-view class="row col l12 m12 s12" />
    </div>

  </div>
</template>

<script>
import materialize from 'materialize-css'
import NavBar from './components/NavBar'
import Menu from './components/Menu'
export default {
  name: 'App',
  components:{
    NavBar,
    Menu
  },

  beforeCreate: function() {
    materialize.AutoInit()
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav#slide-out');
      materialize.Sidenav.init(elems,{edge:'right'});
    }); 
  }

}
</script>