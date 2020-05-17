<template>
    <div class="row table-container">

        <div class="MyCentered">
            <h4 class="">User {{type}}</h4>
        </div>
 
        <form v-if="type == 'update'" action="" class="MyCentered" >
            <img  class="responsive-img s12 push-s6 circle" 
            :src="form.data._links.avatar.href">
        </form>


        <form class="col s10 offset-s1 l8 offset-l2" >

            
            <div class="row">

                <div class="input-field col s12 l6">
                    <input placeholder="" v-model="form.data.first_name" type="text" class="validate" required>
                    <label for="first_name" class="active">First Name</label>
                    <small v-if="form.valid.first_name" class="validate invalid"> {{form.valid.first_name}} </small>
                </div>

                <div class="input-field col s12 l6">
                    <input v-model="form.data.last_name" type="text" class="validate" required>
                    <label for="last_name" class="active" >Last Name</label>
                    <small v-if="form.valid.last_name" class="validate invalid"> {{form.valid.last_name}} </small>
                </div>
            </div>
            
            <div class="row">
                <div class="input-field col s12 l6">
                    <input v-model="form.data.email" type="email" class="validate" required >
                    <label for="email" class="active">Email</label>
                    <small v-if="form.valid.email" class="validate invalid"> {{form.valid.email}} </small>
                </div>

                 <div class="input-field col s12 l6">

                    <select v-model="form.data.gender" class="validate" required >
                        <option value="" >Choose your Gender</option>
                        <option value="male" :selected="form.data.gender == 'male'" >Male</option>
                        <option value="female" :selected="form.data.gender == 'female'">Female</option>
                    </select>   
                    
                    <label for="gender" class="active" >Gender</label>
                    <small v-if="form.valid.gender" class="validate invalid"> {{form.valid.gender}} </small>

                </div>
                
            </div>


            <p v-if="form.message.text" class="MyCentered frow validate invalid"  :class="[form.messge.class ? 'green' : 'red']" > {{form.message.text}} </p>

            <div class="row col s12 MyCentered frow">
                <button type="button" class="waves-effect waves-light btn-small grey col" 
                 @click.prevent="$router.go(-1)" >Back</button>

                <button type="button" class="waves-effect waves-light btn-small col green"
                @click.prevent="save()" >Save</button>
            </div>

            
        </form>

       
    </div>
</template>
<script>
import materialize from 'materialize-css'
import {mapState} from 'vuex'
export default {
    props: {
        type: String
    },
    name: "Form",
    computed:{
        ...mapState({
          stateForm : state => state.user.form    
        })
    },
    data: function(){
        return{
           form: {
                data: {
                    first_name: '',
                    last_name: '',
                    gender: '',
                    _links: {
                        avatar: {href: 'img/avatar.png'}
                    }
                },
                valid: {},
                message: {
                    text: '',
                    class: ''
                },
            }   
        }
    },
    mounted: async function(){
        materialize.AutoInit()
    
        if( this.type == 'update'){
            this.form.data = await this.$store.dispatch("find", this.$route.params.id )
            if( this.form.data._links.avatar.href == null ){
                this.form.data._links.avatar.href = 'img/avatar.png'
            }
        }else{
            this.form.data = {}
        }
    },

    methods: {
        save: async function(){
            let response = await this.$store.dispatch('userCrud',{type: this.type.toLowerCase(),form: this.form.data})
            console.log(response)
            this.form.message.class = response._meta.success

            if(!response._meta.success){
                for( let i=0; i < response.result.length; i++ ){
                    this.form.valid[response.result[i].field] = response.result[i].message
                }
                this.form.message.text = response._meta.message
            }else{
                this.form.valid = false
                this.form.message.text = 'Saved successfully!'
            } 
        }
    }
}
</script>