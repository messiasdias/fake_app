<template>
<div class="col" >

    
    <div v-if="$store.state.users != false"  class="col s12 table-container" > 

        <Pagination />
        
        <table class="highlight  centered table" >
                <thead>
                <tr>
                    <th>Profile</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                

                <tr v-for="user in $store.state.users" :key="user.id" class="row" >

                        
                    <td > 
                        <div class="chip">
                            <img :src="user._links.avatar.href" alt="Contact Person">
                            {{user.first_name +' ' +user.last_name}}
                        </div>
                    </td>
                

                    <td class="row actions" > 
                        
                        <!-- Switch -->
                        <div class="switch col">
                            <label>
                            O
                            <input type="checkbox" :checked="(user.status === 'active') ? true : false" >
                            <span class="lever"></span>
                            I
                            </label>
                        </div>

                   
                        <div class="col">
                            <a @click.prevent="alert('Edite!')" class="btn-floating btn-small waves-effect waves-light blue lighten-1" > <i class="material-icons left">create</i> </a>
                            <a @click.prevent="alert('Delete!')" class="btn-floating btn-small waves-effect waves-light red lighten-1" > <i class="material-icons right">delete</i> </a>
                        </div>
                    </td>
                </tr>

                </tbody>
        </table>


        <Pagination />

    </div>


    <div v-else class="progress-content row col s12 m12 l12 " >
           
        <div class="preloader-wrapper active">
            <div class="spinner-layer spinner-red-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>

    </div>

</div>

    
</template>
<script>
import Pagination from './Pagination'
export default {
    name : "List",
    components:{ Pagination },
    mounted: function(){
        this.$store.dispatch('getUsers')
    },
}
</script>