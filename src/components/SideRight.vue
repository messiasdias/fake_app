<template>

  <!--Right-->
<div class="col s12">


    <div class="col s12">
        
    </div> 

    <div class="col s12">
            <div class="card ">
            
                <div class="card-image ">
                    <span class="card-title">Info</span>
                </div>
                <div class="card-content">

                    <ul  class="collection">


                        <li class="collection-item avatar">
                            <i class="material-icons circle brown"  >web</i>
                            
                            <span class="title">Pages</span>
                            <p><b>{{meta.pageCount}}</b></p>
                        </li>

                        <li class="collection-item avatar">
                            <i class="material-icons circle orange darken-2"  >view_list</i>
                            <span class="title">PerPage</span>
                            <p><b>{{meta.perPage}}</b></p>
                        </li>

                        <li class="collection-item avatar">
                            <i class="material-icons circle blue darken-2"  >group</i>
                            
                            <span class="title">Total</span>
                            <p> <b>{{meta.totalCount}}</b></p>
                        </li>

                    </ul>    
                </div>
            </div>
    </div>


    <div class="col s12">
            <div class="card">
            
                <div class="card-image">
                    <span class="card-title">API</span>
                </div>
                <div class="card-content">

                     <ul  class="collection">
                        <li class="collection-item avatar">
                            <i class="material-icons circle" :class="meta.code == 200 ? 'green' : 'red'"  > 
                                {{meta.code == 200 ? 'sync' : 'sync_problem'}}  
                            </i>
                            
                            <span class="title">Status</span>
                            <p> {{meta.message ? meta.message : 'Api sync error!'}} </p>
                        </li>

                        <li v-if="meta.rateLimit" class="collection-item avatar">
                            <i class="material-icons blue circle">swap_vert</i>
                            <span class="title">Rate Limit</span>
                            <p>Limit:  <b>{{meta.rateLimit.limit}} </b> <br>
                                Remaining: <b>{{meta.rateLimit.remaining}} </b><br>
                                Reset: <b>{{meta.rateLimit.reset}} </b>
                            </p>
                        </li>

                    </ul>

                </div>
            </div>
    </div>

</div>

</template>
<script>
import {mapState} from 'vuex'
export default {
   name: "SideRight" ,
   computed: {
        ...mapState({
          meta : state => state.user.meta,
        })
    },
}
</script>