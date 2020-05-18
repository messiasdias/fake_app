<template>
  <div id="app" class="row">

    <nav class="row col l12 m12 s12 myHeader" >
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">Fake App</a>

        <ul class="right">
          <li><a title="New" @click.prevent="$store.dispatch('navegation', '/new')" ><i class="material-icons right sidenav-trigger" data-target="slide-out"  >add</i></a></li>
          <li><a title="List All" @click.prevent="$store.dispatch('navegation', '/')" ><i class="material-icons right sidenav-trigger" data-target="slide-out"  >apps</i></a></li>
        </ul>
        
      </div>
    </nav>



    <div class="row col l12 m12 s12 myMain">
      <Menu />
      <router-view class="row col l12 m12 s12" />
    </div>

    

    <div class="row col myFooter">


    </div>
  </div>
</template>

<script>

import Menu from './components/Menu'
export default {
  name: 'App',
  components:{
    Menu
  },
 
}
</script>