<template>
<div class="row">

    <div class="col s12">


        <div class="card ">
            
            <div class="card-image">
                <span class="card-title">Last Created</span>
            </div>

            <div class="card-content">
                 <table class="highlight centered table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr v-for="user in list" :key="user.id" >
                            
                            <td><a :href="'#/users/profile/'+user.id"><img :src="user._links.avatar.href" class="circle" /></a> </td>
                            <td><a :href="'#/users/profile/'+user.id">{{ user.first_name + ' '+ user.last_name  }}</a></td>
                            
                            <td class="actions">
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


    </div>


    <div class="col s12">
        
    </div>


</div>
</template>
<script>
import {mapState} from 'vuex'

export default {
    name : "Dashboard",

    beforeCreate: function(){
        this.$store.dispatch('user/all', 'last')
    },
    computed: {
        ...mapState({
          list : state => state.user.list,
        })
    }
}
</script>