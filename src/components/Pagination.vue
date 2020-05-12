<template>
    <ul class="col s12 pagination" >
            
            <li v-if="(meta.currentPage - 1) >= 1"  class="waves-effect">
                <a title="First" @click.prevent="$store.dispatch('getUsers',1)" >
                <i class="material-icons">chevron_left</i></a>
            </li>
            
            <li  v-if="(meta.currentPage - 1) >= 1" class="waves-effect" >
                <a @click.prevent="$store.dispatch('getUsers', (meta.currentPage - 1) )">
                    {{meta.currentPage - 1 }}
                </a>
            </li>

             <li class="waves-effect active" >
                <a @click.prevent="$store.dispatch('getUsers', meta.currentPage )">
                    {{meta.currentPage }}
                </a>
            </li>
            
            <li v-if="((meta.currentPage + 1) < meta.pageCount)" class="waves-effect">
                <a @click.prevent="$store.dispatch('getUsers', (meta.currentPage + 1))">
                     {{meta.currentPage + 1}}
                </a>
            </li>
            
            
            <li v-if="meta.currentPage < meta.pageCount" class="waves-effect">
                <a title="Last" @click.prevent="$store.dispatch('getUsers', meta.pageCount)" >
                    <i class="material-icons">chevron_right</i>
                </a>
            </li>
    </ul>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'Pagination',
    computed:{
        ...mapState({
          meta : state => state.users.meta    
        })
    }
}
</script>>

