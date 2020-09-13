// alert( "site is under construction" )

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