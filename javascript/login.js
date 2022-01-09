
function loginForm(){
var username = document.getElementById("username");
var password = document.getElementById("password");
align = "center"

if(username.value.trim() ==""){
    alert("please fill in the username");
    username.style.border="3px solid green"
    document.getElementById('info').style.visibility = 'visible'
    return false;
}
else if(username.value.length<=3){
    alert('min 3 characters should be in username')
    username.style.border="3px solid green"
    return false;
}

if(password=""){
    alert("use password in 8 digits");
    password.style.border = "3px solid blue"
    
}


else{
    return true
}
}
