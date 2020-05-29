<template>
<ul id="slide-out" class="sidenav">
    
    <a class="sidenav-close"><i class="material-icons">close</i></a>
 
    <li>
        <div class="user-view">
            <div class="background">
                <img src="img/background.jpeg">
            </div>
            <a href="#user"><img class="circle" src="img/avatar-f1.png"></a>
            <a href="#name"><span class="white-text name">John Doe</span></a>
            <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
        </div>
    </li>

    <li><a href="#/"  ><i class="material-icons">dashboard</i>Dashboard</a></li>

    <!-- Users -->
    <li><div class="divider"></div></li>
    <li><a class="subheader">Users</a></li>
    <li><a class="waves-effect" href="#/users/new" ><i class="material-icons">add</i> New</a></li>
    <li><a class="waves-effect" href="#/users" > <i class="material-icons">list</i> List</a></li>


</ul>
</template>
<script>
import {mapState} from 'vuex'

export default {
    name: "Menu",
    computed :{
        ...mapState({
            menu: state => state.menu,
        }),
    },
}
</script>