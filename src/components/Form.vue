<template>
    <div class="row table-container">

        <div class="MyCentered">
            <h4 class="">User {{type}}</h4>
        </div>

        <form v-if="type == 'update'" action="" class="MyCentered" >
            <img  class="responsive-img s12 push-s6 circle" 
            :src="stateForm._links.avatar.href">
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
                    <input v-model="form.data.email" type="email" class="validate" >
                    <label for="email" class="active">Email</label>
                    <small v-if="form.valid.email" class="validate invalid"> {{form.valid.email}} </small>
                </div>

                 <div class="input-field col s12 l6">

                    <select v-model="form.data.gender" class="validate" >
                        <option value="" >Choose your Gender</option>
                        <option value="male" :selected="form.data.gender == 'male'" >Male</option>
                        <option value="female" :selected="form.data.gender == 'female'">Female</option>
                    </select>   
                    
                    <label for="gender" class="active" >Gender</label>
                    <small v-if="form.valid.gender" class="validate invalid"> {{form.valid.gender}} </small>

                </div>
                
            </div>


            <p v-if="form.message" class="MyCentered frow validate invalid"> {{form.message}} </p>

            <div class="row col s12 MyCentered frow">
                <button type="button" class="waves-effect waves-light btn-small grey col" 
                 @click.prevent="$router.go(-1)" >Back</button>

                <button type="button" class="waves-effect waves-light btn-small col green"
                @click.prevent="$store.dispatch('userCrud',{type:type.toLowerCase(),form:form.data})" >Save</button>
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
          stateForm : state => state.user.form.data    
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
                valid: false,
                message: false,
            }   
        }
    },
    mounted: async function(){
        materialize.AutoInit()

        if( this.type == 'update'){
            this.form.data = await this.$store.dispatch("find", this.$route.params.id )
        }else{
            this.$store.commit("form", {data:{}} )
        }
    },
}
</script>