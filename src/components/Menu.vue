<template>

<div style="display:none !important; "  class="myMenu"  >

    <ul>
        <li><a href="#" @click.prevent="$store.commit('menu', true)" ><i class="material-icons  sidenav-trigger" data-target="slide-out"  >add</i></a></li>
        <li><a href="#" @click.prevent="$store.commit('menu', true)" ><i class="material-icons  sidenav-trigger" data-target="slide-out"  >list</i></a> </li>
    </ul>
   
</div> 


</template>
<script>
import {mapState} from 'vuex'

export default {
    name: "Menu",
    computed :{
        ...mapState({
            menu: state => state.menu,
        }),
    },

}
</script>