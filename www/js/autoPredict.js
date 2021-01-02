$.ajax({ 
    type: 'GET', 
    url: 'https://api.thingspeak.com/channels/759295/feeds.json?results=1', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
            //console.log(data.feeds);
            
            if(data.feeds[0].field8 == 1){
                predictAuto();
            }
            if(data.feeds[0].field8 == 2){
                predictManual();
            }

        }
    
});


// Call budget value
function predictAuto(){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        var data = JSON.parse(req.responseText);
        
        // document.getElementById("s1Budget").value=data["switch1"];
        // document.getElementById("s2Budget").value=data["switch2"];
        // document.getElementById("s3Budget").value=data["switch3"];
        comparePrice(data["switch1"],data["switch2"],data["switch3"])
    }
    };

    req.open("GET", "https://json.extendsclass.com/bin/f78228aefbc5", true);
    req.setRequestHeader("secret-key", "<SECRET_KEY>");
    req.send();

    setTimeout(predictAuto,3000);
}
//

function predictManual(){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        var data = JSON.parse(req.responseText);
        
        // document.getElementById("s1Budget").value=data["switch1"];
        // document.getElementById("s2Budget").value=data["switch2"];
        // document.getElementById("s3Budget").value=data["switch3"];
        comparePrice(data["switch1"],data["switch2"],data["switch3"])
    }
    };

    req.open("GET", "https://json.extendsclass.com/bin/f78228aefbc5", true);
    req.setRequestHeader("secret-key", "<SECRET_KEY>");
    req.send();

    
}
//

function comparePrice(s1b,s2b,s3b){
    console.log("Comparing...");
    var ps1 = calculateBill(document.getElementById("switch1Month").innerHTML.split(" ")[3]);
    var ps2 = calculateBill(document.getElementById("switch2Month").innerHTML.split(" ")[3]);
    var ps3 = calculateBill(document.getElementById("switch3Month").innerHTML.split(" ")[3]);
    //console.log(ps1);
    if(ps1 > s1b){
        alert("Switch 1 limit reached");
        
    }
    if(ps2 > s2b){
        alert("Switch 2 limit reached");
        
    }
    if(ps3 > s3b){
        alert("Switch 3 limit reached");
        
    }
}
function calculateBill(usage){
    
    if(usage <= 200){
        price = usage * 0.218;
        
        return price;
    }
    else if(usage > 200){
        price = 43.6 + (usage - 200)*(0.334);
        
        return price;
    }
    else if(usage > 300){
        price = 43.6 + 33.4 + (usage - 300)*(0.516);
        
        return price;
    }
}

function closeSwitch(sw){

   if(sw == 1){
        var url = "https://api.thingspeak.com/update?api_key=FZOOKGO8YDOHAAB5&field1=1&field2=2&field3=2&field4=0&field5=0&field6=0";
          $.ajax({url: url, success: function(result){
     
            console.log(result);
          }});
   }
   if(sw == 2){
                  var url = "https://api.thingspeak.com/update?api_key=FZOOKGO8YDOHAAB5&field1=2&field2=1&field3=2&field4=0&field5=0&field6=0";
            $.ajax({url: url, success: function(result){
     
                console.log(result);
              }});
           
   }

   if(sw == 3){
                  var url = "https://api.thingspeak.com/update?api_key=FZOOKGO8YDOHAAB5&field1=2&field2=2&field3=1&field4=0&field5=0&field6=0";
            $.ajax({url: url, success: function(result){
     
                console.log(result);
              }}); 
   }
        

    

            
     
}
