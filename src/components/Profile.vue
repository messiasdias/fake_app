<template>
    <div class="row col s12" style="margin-top: 50px;">

        <div class="row col s12 MyCentered">
            <h3 class="card-title2">{{user.first_name}} {{user.last_name}}</h3>
        </div>


          <div class="row col s12 ">
            <div class="col s12 offset-m2 m8 l6 offset-l3">
            <div class="card ">
                <div class="card-image">
                <img class="circle" :src="user._links.avatar.href">
                <span class="card-title"> {{user.first_name}} {{user.last_name}} </span>
                <a @click.prevent="$store.dispatch('navegation','/edit/'+user.id)" class="btn-floating halfway-fab waves-effect waves-light blue lighten-1"><i class="material-icons">edit</i></a>
                
                </div>


                <div class="card-content row">

                    <div class="col s6 m6 l6">

                        <label for="">Dob</label>
                        <p>{{user.dob}}</p>    

                        <label for="">Gender</label>
                         <p>{{user.gender}}</p>


                    </div>
                      




                    <div class="col s6 m6 l6">
                        <label for="">Email</label>
                        <p>{{user.email}}</p>    

                        <label for="">Phone</label>
                         <p>{{user.phone}}</p>
                    
                    </div>



                    <div class="col s12 m12 l12">

                         <label for="">WebSite</label>
                         <p>{{user.website}}</p>

                          <label for="">Address</label>
                         <p>{{user.address}}</p>
                    </div>


                
                </div>
            </div>
            </div>
        </div>
        
       
    </div>
</template>
<script>

export default {
    name : "Profile",
    data: function() {
        return {
            user: false
        }
    },

    mounted: async function(){
        if( this.$route.params.id >= 1 ){
            this.user = await this.$store.dispatch("getUser", this.$route.params.id )
        }else{
             this.form.false
        }
    },
}
</script>