<template>
    <div class="row col s12" style="margin-top: 50px;">


          <div class="row col s12 ">
            <div class="col s12 offset-m2 m8 l6 offset-l3">
            <div class="card horizontal">

                <div class="card-image">
                <img class="circle" :src="user._links.avatar.href">
                <span class="card-title"> {{user.first_name}} {{user.last_name}} </span>
                <a :href="'#/users/edit/'+user.id" class="btn-floating halfway-fab waves-effect waves-light blue lighten-1"><i class="material-icons">edit</i></a>
                
                </div>

                    

                <div class="card-content row">

                     <p lass="rigth"> 
                        <span class="" :class="[user.status == 'active' ? 'badge green  lighten-4'  : 'badge red  lighten-4' ]" > {{user.status}} </span>
                    </p> 

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

                       

                          <label for="">Address</label>
                         <p>{{user.address}}</p>

                         <label for="">WebSite</label>
                         <p>{{user.website}}</p>  
                        
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
    data: function(){
        return {
            user: {
                _links:{
                    avatar:{
                        href: ''
                    }
                }
            }
        }
    },
    mounted: async function(){
        if( this.$route.params.id >= 1 ){
             this.user = await this.$store.dispatch("find", this.$route.params.id )
        }else{
             this.form.false
        }
    },
}
</script>