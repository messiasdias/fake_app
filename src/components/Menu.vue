<template>

<div v-if="menu" class="row col top hide-on-med-and-dow collapsible" id="top"  >

    <div class="col m6 offset-m3 l4 " >
      
        <form action="" class="search">
            <input class="" type="text" name="search" />
            <button type="button" class="btn-floating btn-small waves-effect waves-light grey lighten-1" ><i class="material-icons">search</i></button>
        </form>
    </div> 

   

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