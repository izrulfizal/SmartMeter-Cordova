const checkbox = document.getElementById('budgetAuto');



checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {

    var s1b = document.getElementById("s1Budget").value;
    var s2b = document.getElementById("s2Budget").value;
    var s3b = document.getElementById("s3Budget").value;
    var s1p = document.getElementById("switch1Pre").innerHTML.split(" ")[3];
    var s2p = document.getElementById("switch2Pre").innerHTML.split(" ")[3];
    var s3p = document.getElementById("switch3Pre").innerHTML.split(" ")[3];
    
    if(s1b !== "" || s2b !== "" || s3b !== "" ){

      
      
      const request = new XMLHttpRequest();
      request.open("PUT", "https://json.extendsclass.com/bin/f78228aefbc5", true);
      request.setRequestHeader("Security-key", "Your security key");
      request.onreadystatechange = () => {
      };
      request.send('{\n"switch1":"' + s1b + '",\n"switch2":"' + s2b + '",\n"switch3":"' + s3b + '"\n}');

      var url = "https://api.thingspeak.com/update?api_key=JVWSWNCD9BTW7W0W&field2=1&field4=1&field6=1&field7=1&field8=1&field1=" + s1p + "&field3=" + s2p + "&field5=" + s3p;
      $.ajax({url: url, success: function(result){
     
      console.log("automated! - " + result);
    }});

    }
    else{
      alert("Please enter budget on all switches!");
      checkbox.checked = false;
    }

  } else {
    var s1p = document.getElementById("switch1Pre").innerHTML.split(" ")[3];
    var s2p = document.getElementById("switch2Pre").innerHTML.split(" ")[3];
    var s3p = document.getElementById("switch3Pre").innerHTML.split(" ")[3];
    document.getElementById("s1Budget").value="";
    document.getElementById("s2Budget").value="";
    document.getElementById("s3Budget").value="";

    var url = "https://api.thingspeak.com/update?api_key=JVWSWNCD9BTW7W0W&field2=2&field4=2&field6=2&field7=2&field8=2&field1=" + s1p + "&field3=" + s2p + "&field5=" + s3p;
    $.ajax({url: url, success: function(result){
      
      console.log("manual! - " + result);
    }});
  }
})