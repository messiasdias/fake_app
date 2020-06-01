<template>
<div class="row col s12" >

    
    <div v-if="list != false" class="card ">
            
        <div class="card-image" style="display:non;">
            <span class="card-title">List</span>
        </div>

        <div  class="card-content">
           
           <div class="row">
                <div class="col">
                    <input type="text" placeholder="Search" name="search" v-model="search" >
    
                </div> 

                <Pagination class="col" />
           </div>
            
            <table class="highlight centered " >
                    <thead>
                        <tr>
                            <th><i class="material-icons">account_circle</i> </th>
                            <th class=""><fontawesome icon="edit" /> Name</th>
                            <th class="hide-on-med-and-down" ><fontawesome icon="envelope" /> Email</th>
                            <th class="hide-on-med-and-down"> <fontawesome icon="venus-mars" /> Gender</th>
                            <th class=""> <fontawesome icon="toggle-on" /> Status</th>
                            <th class="" ><fontawesome icon="user-cog" /> Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                    

                    <tr v-for="user in List" :key="user.id" class="row" >
                    
                    
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


                        <td class="switch"  >
                            <label>
                            <input @change.prevent="$store.dispatch('user/status',user)"  type="checkbox" :checked="(user.status === 'active') ? true : false" >
                            <span class="lever"></span>
                            </label>
                        </td>

                        <td class="actions" > 
                            <div class="col">
                                <a title="Edit User" :href="'#/users/edit/'+user.id" class="btn-floating btn-small waves-effect waves-light blue lighten-1" > <i class="material-icons left">edit</i> </a>
                                <a title="Delete User" @click.prevent="$store.dispatch('user/delete',user)" class="btn-floating btn-small waves-effect waves-light red lighten-1" > <i class="material-icons right">delete</i> </a>
                            </div>
                        </td>
                    </tr>

                    </tbody>
            </table>

        </div>

    </div>

    <div v-else class="MyCentered row col s12" style="height: 100vh !important;" >
           
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
    
    data: function(){
        return{
            search: '',
        }
    },

     computed:{
        ...mapState({
          meta : state => state.user.meta,
          list : state => state.user.list,
        }),

        List() {
            let newList = []
            if( this.search != '' ){
                for(let i=0; i < this.list.length; i++ ){
                    let item = this.list[i]

                    if(item.first_name.toLowerCase().includes(this.search.toLowerCase()) |
                       item.last_name.toLowerCase().includes(this.search.toLowerCase()) |
                       item.email.toLowerCase().includes(this.search.toLowerCase()) ){
                        newList.push(item)
                    }
                }
            }else{
                newList = this.list
            }
   
            return newList
        }
    },

    beforeMount: function(){
        this.$store.dispatch('user/all', this.meta.currentPage ? this.meta.currentPage : 1 ) 
        if(localStorage.getItem('search')) this.search = localStorage.getItem('search')
    },

    beforeDestroy: function(){
        localStorage.setItem('search', this.search)
    }
}
</script>