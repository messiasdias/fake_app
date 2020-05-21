<template>
<div class="row col s12" >

     <div v-if="list != false" class="list-top">
          <Pagination />
    </div>   
    
    
    <div v-if="list != false"  class="col s12 l12 table-container" > 

       
        
        <table class="col s12 l8 offset-l2 highlight centered table" >
                <thead>
                    <tr>
                        <th><i class="material-icons">account_circle</i> </th>
                        <th class=""><fontawesome icon="edit" /> Name</th>
                        <th class="hide-on-med-and-down" ><fontawesome icon="envelope" /> Email</th>
                        <th class="hide-on-med-and-down"> <fontawesome icon="venus-mars" /> Gender</th>
                        <th class="hide-on-med-and-down"> <fontawesome icon="toggle-on" /> Status</th>
                        <th class="hide-on-med-and-down" ><fontawesome icon="user-cog" /> Actions</th>
                    </tr>
                </thead>

                <tbody>
                

                <tr v-for="user in list" :key="user.id" class="row" >
                  
                
                    <td> 
                        <img :src="user._links.avatar.href ? user._links.avatar.href : 'img/avatar.png'" alt="Contact Person">
                    </td>

                    <td class=""  > 
                        <a :href="'#/users/profile/'+user.id">
                        {{user.first_name | capitalize }} 
                        {{user.last_name | capitalize }}
                        </a>
                    </td>

                    <td class="hide-on-med-and-down" > 
                        <p>{{user.email}}</p>
                    </td>
                
                     <td class="hide-on-med-and-down" > 
                        <p>{{user.gender | capitalize }}</p>
                    </td>


                    <td class="switch hide-on-med-and-down"  >
                        <label>
                        <input @change.prevent="statusUser(user)"  type="checkbox" :checked="(user.status === 'active') ? true : false" >
                        <span class="lever"></span>
                        </label>
                    </td>

                    <td class="actions hide-on-med-and-down" > 
                        <div class="col">
                            <a title="Edit User" :href="'#/users/edit/'+user.id" class="btn-floating btn-small waves-effect waves-light blue lighten-1" > <i class="material-icons left">edit</i> </a>
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
        this.$store.dispatch('all', this.$route.params.page ) 
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
                if(response._meta.success){
                    this.$store.commit('listRemove', user)
                }
            } 
        }
    }
}
</script>