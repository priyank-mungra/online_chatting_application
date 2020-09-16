function deleteChat() {
    if( confirm("clear conversation!")){
        var parent = document.getElementById('chat');
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

function ScreenForSmallDevice(){
    var width = document.documentElement.clientWidth;
    var small_viewport_size = 768;
    if( width <= small_viewport_size){
        // var ele = document.getElementById("left_plane");
        // ele.innerHTML = " ";
        // ele.remove();
        $(".left-panal").hide();
        $(".right-panal").css("width", "100%");
    }else{
        $(".left-panal").show();
        $(".right-panal").css("width", "70%");
    }
}

ScreenForSmallDevice();

$(window).resize(ScreenForSmallDevice);