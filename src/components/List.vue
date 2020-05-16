<template>
<div class="row col s12" >

     <div v-if="list != false" class="list-top">
          <Pagination />
    </div>   
    
    
    <div v-if="list != false"  class="col s12 l12 table-container" > 

       
        
        <table class="col s12 l8 offset-l2 highlight  table" >
                <thead>
                <tr>
                    <th>Profile</th>
                    <th class="hide-on-large-only">Name</th>
                    <th class="hide-on-med-and-down">Gender</th>
                    <th class="hide-on-med-and-down" >Email</th>
                     <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                

                <tr v-for="user in list" :key="user.id" class="row" >
                  
                    <td > 
                        <div class="chip"  @click.prevent="$store.dispatch('navegation', '/profile/'+user.id)" >
                            <img :src="user._links.avatar.href ? user._links.avatar.href : 'img/avatar-m1.png'" alt="Contact Person">
                            <p class="hide-on-med-and-down" >{{user.first_name +' ' +user.last_name}}</p>
                        </div>
                    </td>

                     <td class="hide-on-large-only"  @click.prevent="$store.dispatch('navegation', '/profile/'+user.id)" > 
                        <p>{{user.first_name}}</p>
                    </td>

                
                     <td class="hide-on-med-and-down" > 
                        <p>{{user.gender}}</p>
                    </td>

                    <td class="hide-on-med-and-down" > 
                        <p>{{user.email}}</p>
                    </td>

                    <td class="switch"  >
                        <label>
                        <input @change.prevent="statusUser(user)"  type="checkbox" :checked="(user.status === 'active') ? true : false" >
                        <span class="lever"></span>
                        </label>
                    </td>

                    <td class="actions" > 
                        <div class="col">
                            <a title="Edit User" @click.prevent="$store.dispatch('navegation', '/edit/'+user.id)" class="btn-floating btn-small waves-effect waves-light blue lighten-1" > <i class="material-icons left">edit</i> </a>
                            <a title="Delete User" @click.prevent="deleteUser(user)" class="btn-floating btn-small waves-effect waves-light red lighten-1" > <i class="material-icons right">delete</i> </a>
                        </div>
                    </td>
                </tr>

                </tbody>
        </table>



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
import {mapState} from 'vuex'
import Pagination from './Pagination'

export default {
    name : "List",
    components:{ Pagination },
     computed:{
        ...mapState({
          meta : state => state.user.meta,
          list : state => state.user.list,
        })
    },

    mounted: function(){
        let page = 1 ;
       if( this.$route.params.page ){
            page = this.$route.params.page
        }else{
            page = this.meta.currentPage
        }
        this.$store.dispatch('all', page) 
    },
    methods:{
    
         statusUser: async function(user) {
            let response = await this.$store.dispatch(
                'userCrud',
                { 
                    type: 'update',
                    form :{ 
                        id: user.id,
                        status: (user.status === 'active') ? 'inactive': 'active'
                    } 
                }
            )

            if(response._meta.success){
                let userUpdated = await this.$store.dispatch("find", user.id )
                this.$store.commit('listUpdate', userUpdated )
            }
        },

        editUser: async function(user){
           this.$store.dispatch('navegation', '/edit/'+user.id)
        },


        deleteUser: async function(user){
            let result = confirm("Delete User "+user.first_name+"?") 

            if(result){
                let response = await this.$store.dispatch('userCrud', { type:'delete', form:user} )
                if(response._meta){
                    this.$store.commit('listRemove', user)
                }else{
                    console.log(response._meta.message)
                }
            } 
        }
    }
}
</script>