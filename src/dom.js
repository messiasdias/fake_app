import $ from 'jquery'
import materialize from 'materialize-css'


$(document).ready(function(){
    materialize.AutoInit()
    $('#menu').sidenav({edge:'right'});
});