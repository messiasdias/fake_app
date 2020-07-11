<template>
    <div class="row table-container">

        <div class="MyCentered">
            <h4 class="">User {{type | capitalize}}</h4>
        </div>
 
        <div v-if="type == 'update'" action="" class="MyCentered" >
            <img  class="responsive-img s12 push-s6 circle" :src="form.data._links.avatar.href">
        </div>


        <form class="col s12" >

            
            <div class="row">

                <div class="input-field myInput-field">
                    <input placeholder="" v-model="form.data.first_name" type="text"  required>
                    <label for="first_name" class="active">First Name</label>
                    <small v-if="form.validations.fields.first_name"> {{form.validations.fields.first_name}} </small>
                </div>

                <div class="input-field  myInput-field">
                    <input v-model="form.data.last_name" type="text" required>
                    <label for="last_name" class="active" >Last Name</label>
                    <small v-if="form.validations.fields.last_name"> {{form.validations.fields.last_name}} </small>
                </div>
            </div>
            
            <div class="row">
                <div class="input-field  myInput-field">
                    <input v-model="form.data.email" type="email" required >
                    <label for="email" class="active">Email</label>
                    <small v-if="form.validations.fields.email"> {{form.validations.fields.email}} </small>
                </div>

                 <div class="input-field  myInput-field">

                    <select v-model="form.data.gender" required >
                        <option value="" >Choose your Gender</option>
                        <option value="male" :selected="form.data.gender == 'male'" >Male</option>
                        <option value="female" :selected="form.data.gender == 'female'">Female</option>
                    </select>   
                    
                    <label for="gender" class="active" >Gender</label>
                    <small v-if="form.validations.fields.gender"> {{form.validations.fields.gender}} </small>

                </div>



                
            </div>


            <p v-if="form.validations.message" class="MyCentered frow validate invalid row col s10 offset-s1 m8 offset-m2 l6 offset-l3"  :class="[form.validations.success != false ? 'green-text' : 'red-text']" > {{form.validations.message}} </p>

            <div class="row col s12 MyCentered frow">
                <button type="button" class="waves-effect waves-light btn-small grey col" 
                 @click.prevent="this.$store.dispatch('navegation','back')" ><i class="material-icons left sidenav-trigger" data-target="slide-out"  >arrow_back</i>Back</button>

                <button type="button" class="waves-effect waves-light btn-small col primary lighten-2"
                @click.prevent="$store.dispatch('user/save',{type: type ,form: form.data})" > <i class="material-icons left sidenav-trigger" data-target="slide-out"  >done</i> Save</button>
            </div>

            
        </form>

       
    </div>
</template>
<script>
//import $ from 'jquery'
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
                        avatar: { href: ''}
                    }
                },
                
                validations :{
                    success: false,
                    message : '',
                    fields:{}
                }
            }   
        }
    },
    mounted: async function(){
        materialize.AutoInit()
    
        if( this.type == 'update'){
            this.form.data = await this.$store.dispatch("user/find", this.$route.params.id )
        }else{
            this.form.data = {}
        }
    },

    methods: {

        setValidations: function(response){
            this.form.validations.success = response._meta.success
            if(!response._meta.success){
                for( let i=0; i < response.result.length; i++ ){
                    this.form.validations.fields[response.result[i].field] = response.result[i].message
                }
                this.form.validations.message = response._meta.message
            }else{
                this.form.validations.fields = {}
                this.form.validations.message = 'Saved successfully!'
                setTimeout(() =>{}, 2000)
                this.$store.dispatch('navegation','back')
            } 
        }
    }
}
</script>