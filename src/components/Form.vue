<template>
    <div class="row table-container">

        <div class="MyCentered">
            <h4 class="">User {{type}}</h4>
        </div>

        <form v-if="type == 'update'" action="" class="MyCentered" >
            <img  class="responsive-img s12 push-s6 circle" 
            :src="(form.data._links.avatar != null) ? form.data._links.avatar.href : 'img/avatar.png'">
        </form>


        <form class="col s10 offset-s1 l8 offset-l2">

            
            <div class="row">

                <div class="input-field col s12 l6">
                    <input placeholder="" v-model="form.data.first_name" type="text" class="validate">
                    <label for="first_name" class="active">First Name</label>
                    <small v-if="form.valid.first_name" class="validate invalid"> {{form.valid.first_name}} </small>
                </div>

                <div class="input-field col s12 l6">
                    <input v-model="form.data.last_name" type="text" class="validate">
                    <label for="last_name" class="active" >Last Name</label>
                    <small v-if="form.valid.last_name" class="validate invalid"> {{form.valid.last_name}} </small>
                </div>
            </div>
            
            <div class="row">
                <div class="input-field col s12 l6">
                    <input v-model="form.data.email" type="email" class="validate">
                    <label for="email" class="active">Email</label>
                    <small v-if="form.valid.email" class="validate invalid"> {{form.valid.email}} </small>
                </div>

                 <div class="input-field col s12 l6">
                    <input v-model="form.data.gender" type="text" class="validate">
                    <label for="gender" class="active" >Gender</label>
                     <small v-if="form.valid.gender" class="validate invalid"> {{form.valid.gender}} </small>
                </div>
                
            </div>


            <p v-if="form.message" class="MyCentered frow validate invalid"> {{form.message}} </p>

            <div class="row col s12 MyCentered frow">
                <button type="button" class="waves-effect waves-light btn-small grey col" 
                 @click.prevent="$store.dispatch('navegation', '/list')" >Back</button>

                <button type="button" class="waves-effect waves-light btn-small col green"
                @click.prevent="sendForm()" >Save</button>
            </div>

            
        </form>

       
    </div>
</template>
<script>

export default {
    props: {
        type: String
    },
    name : "Form",
    data: function() {
        return{
           form: {
               data: {
                   _links: {
                       avatar: false
                   }
               },
               valid: {},
               message: false,
           }
        }
    },

    mounted: async function(){
        if( this.type == 'update'){
            this.form.data = await this.$store.dispatch("getUser", this.$route.params.id )
        }else{
             this.form.data = {}
        }
    },

    methods: {
        sendForm: async function() {

            let response = await this.$store.dispatch(this.type.toLowerCase()+'User', this.form.data)

           if(!response._meta.success){
                for( let i=0; i < response.result.length; i++ ){
                  this.form.valid[response.result[i].field] = response.result[i].message
                }
                this.form.message = response._meta.message
            }else{
                this.form.valid = {}
                this.form.message = 'Saved successfully!'
                let page = '/list';

                if( this.type.toLowerCase() == "create"){
                    page += '/'+this.$store.state.users.meta.pageCount
                }else{
                    this.$store.commit('usersListUpdate', this.form.data )
                    page +=  '/'+this.$store.state.users.meta.currentPage
                }
                console.log(page, this.form.data )
                this.$store.dispatch('navegation', page )
            } 
        }
    }
}
</script>