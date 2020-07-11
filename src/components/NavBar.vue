<template>
<nav class="nav-wrapper myHeader" >
    <a href="/" class="brand-logo left">Fake App</a>

    <a id="menu" data-target="slide-out" 
    class="sidenav-trigger show-on-large tooltip" data-position="bottom" data-tooltip="I am a tooltip"  >
      <i class="material-icons ">dehaze</i>
    </a>
</nav> 
</template>
<script>
import materialize from 'materialize-css'
export default {
    name: 'NavBar',
    mounted :function(){
     materialize.AutoInit()
    },
}
</script>