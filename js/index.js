function validate(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if( username != 'admin' ){
        alert( "username incorrect\ncurrently only username ='admin' is available");
    }
    else if( password != "admin"){
        alert( "password is incorrect\n correct password = 'admin' ");
    }
    else{
        window.location.href = "home.html";
    }
}
// alert( "site is under construction" )

function ScreenForSmallDevice(){
    var width = document.documentElement.clientWidth;
    var small_viewport_size = 768;
    if( width <= small_viewport_size){
        // var ele = document.getElementById("left_plane");
        // ele.innerHTML = " ";
        // ele.remove();
        $("#left_plane").hide();
        $("#right_plane").css("width", "100%");
    }else{
        $("#left_plane").show();
        $("#right_plane").css("width", "50%");
    }
}
ScreenForSmallDevice();
$(window).resize(ScreenForSmallDevice);

$(".inner_left_block").on({
    mouseover: function(){
        // alert("mouse over");
        $(".inner_left_block").css("background-color", "rgba(90, 80, 80, 0.473)")
    },
    mouseout: function(){
        // alert("mouse out");
        $(".inner_left_block").css("background-color", " rgba(230, 230, 230, 0.473)");
    }

})

// $(".inner_left_block").hide();
// $(".inner_left_block").show();