
document.getElementById("html").style.overflow = "hidden";
function getCheckValue(){
    var switch1 = valueChange(document.getElementById("sw1").checked);
    var switch2 = valueChange(document.getElementById("sw2").checked);
    var switch3 = valueChange(document.getElementById("sw3").checked);
    
    var url = "https://api.thingspeak.com/update?api_key=FZOOKGO8YDOHAAB5&field1=" + switch1 + "&field2=" + switch2 + "&field3=" + switch3 + "&field4=0&field5=0&field6=0";
    
    $.ajax({url: url, success: function(result){
     
      console.log(result);
    }});

}

function valueChange(value){
    if(value == true){
        value = 2;
    }
    else if(value == false){
        value = 1;
    }
    return value;
}

function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;
    var loginCont = document.getElementById("loginCont");

    if( username !== "" && password !== ""){
        if(username == "daus" && password == "daus123"){
            loginCont.style.display = "none";
            document.getElementById("html").style.overflow = "scroll";
        }
        else{
            alert("Incorrect credentials");
            document.getElementById("username").value = "";
            document.getElementById("pass").value = "";
            
        }
    }
    else{
        alert("Please enter the credentials!")
    }
}