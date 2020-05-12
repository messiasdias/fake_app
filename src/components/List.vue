<template>
<div class="row col s12" >

    
    <div v-if="$store.state.users.list != false"  class="col s12 l12 table-container" > 

        <Pagination />
        
        <table class="col s12 l8 offset-l2 highlight  table" >
                <thead>
                <tr>
                    <th>Profile</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                

                <tr v-for="user in $store.state.users.list" :key="user.id" class="row" >
                  
                    <td > 
                        <div class="chip">
                            <img :src="user._links.avatar.href ? user._links.avatar.href : 'img/avatar.png'" alt="Contact Person">
                            {{user.first_name +' ' +user.last_name}}
                        </div>
                    </td>
                

                    <td class="row actions" > 
                        
                        <!-- Switch -->
                        <div class="switch col">
                            <label>
                            O
                            <input @change.prevent="statusUser(user)"  type="checkbox" :checked="(user.status === 'active') ? true : false" >
                            <span class="lever"></span>
                            I
                            </label>
                        </div>

                   
                        <div class="col">
                            <a title="Edit User" @click.prevent="editUser(user)" class="btn-floating btn-small waves-effect waves-light blue lighten-1" > <i class="material-icons left">edit</i> </a>
                            <a title="Delete User" @click.prevent="deleteUser(user)" class="btn-floating btn-small waves-effect waves-light red lighten-1" > <i class="material-icons right">delete</i> </a>
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

    methods:{
    
         statusUser: async function(user) {
            let response = await this.$store.dispatch(
                'updateUser',
                { id: user.id,
                 status: (user.status === 'active') ? 'inactive': 'active'}
            )

            if(response._meta.success){
                let userUpdated = await this.$store.dispatch("getUser", user.id )
                this.$store.commit('usersListUpdate', userUpdated )
            }
        },

        editUser: async function(user){
           this.$store.dispatch('navegation', '/edit/'+user.id)
        },


        deleteUser: async function(user){
            let result = confirm("Delete User "+user.first_name+"?") 

            if(result){
                let response = await this.$store.dispatch('deleteUser',user.id)
                if(response._meta){
                    this.$store.commit('usersListRemove', user)
                }else{
                    console.log(response._meta.message)
                }
            } 
        }
    }
}
</script>