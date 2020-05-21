<template>
  <div id="app" class="row">
    
    <NavBar /> 
    <Menu /> 

    <div class="row col l12 m12 s12 myMain">
      <router-view class="row col l12 m12 s12" />
    </div>

    <div class="row col myFooter">

    </div>

  </div>
</template>

<script>

import NavBar from './components/NavBar'
import Menu from './components/Menu'
export default {
  name: 'App',
  components:{
    NavBar,
    Menu
  },
}
</script>