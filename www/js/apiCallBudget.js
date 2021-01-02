// Get Monthly Prediction
$.ajax({ 
    type: 'GET', 
    url: 'https://api.thingspeak.com/channels/756754/feeds.json?results=1', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
            //console.log(data.feeds);
            monthlyPredict(data.feeds);
        }
    
});

function monthlyPredict(data){
    //console.log(data);
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    var UpdateDate = data[0].created_at.split("T")[0].split("-")[1];
    var switch1Pre = parseFloat(data[0].field4);
    var switch2Pre = parseFloat(data[0].field5);
    var switch3Pre = parseFloat(data[0].field6);
    var divider = data[0].field7;
    monthName = monthNames[UpdateDate-1]
    

    document.getElementById("monthUpdate").innerHTML = "Month: " + monthName;
    document.getElementById("switch1Pre").innerHTML = "Switch 1 : " + switch1Pre.toFixed(4)/divider + " kWh";
    document.getElementById("switch2Pre").innerHTML = "Switch 2 : " + switch2Pre.toFixed(4)/divider + " kWh";
    document.getElementById("switch3Pre").innerHTML = "Switch 3 : " + switch3Pre.toFixed(4)/divider + " kWh";

    var s1Bill = calculateBill(switch1Pre/divider);
    var s2Bill = calculateBill(switch2Pre/divider);
    var s3Bill = calculateBill(switch3Pre/divider);
    var totalBill = parseFloat(s1Bill) + parseFloat(s2Bill) + parseFloat(s3Bill);

    document.getElementById("switch1Bill").innerHTML = "Switch 1 : RM " + s1Bill;
    document.getElementById("switch2Bill").innerHTML = "Switch 2 : RM " + s2Bill;
    document.getElementById("switch3Bill").innerHTML = "Switch 3 : RM " + s3Bill;
    document.getElementById("totalBill").innerHTML = "Total bill : RM " + totalBill.toFixed(2);
    

}

function calculateBill(usage){
    
    if(usage <= 200){
        price = usage * 0.218;
        
        return price.toFixed(2);
    }
    else if(usage > 200){
        price = 43.6 + (usage - 200)*(0.334);
        
        return price.toFixed(2);
    }
    else if(usage > 300){
        price = 43.6 + 33.4 + (usage - 300)*(0.516);
        
        return price.toFixed(2);
    }
}


//Update Prediction Button
$.ajax({ 
    type: 'GET', 
    url: 'https://api.thingspeak.com/channels/759295/feeds.json?results=1', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
            //console.log(data.feeds);
            updatePredict(data.feeds);
        }
    
});

function updatePredict(data){
    //console.log(data);
 
    var predictBtn = data[0].field8;

    if (predictBtn == 2){

        document.getElementById("budgetAuto").checked=false;
    }
    if(predictBtn == 1){

        document.getElementById("budgetAuto").checked=true;
    }


    
}

// Call budget value
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    var data = JSON.parse(req.responseText);
    


    if(document.getElementById("budgetAuto").checked == false){
        document.getElementById("s1Budget").value="";
        document.getElementById("s2Budget").value="";
        document.getElementById("s3Budget").value="";
    }
    if(document.getElementById("budgetAuto").checked == true){
        document.getElementById("s1Budget").value=data["switch1"];
        document.getElementById("s2Budget").value=data["switch2"];
        document.getElementById("s3Budget").value=data["switch3"];
    }
  }
};

req.open("GET", "https://json.extendsclass.com/bin/f78228aefbc5", true);
req.setRequestHeader("secret-key", "<SECRET_KEY>");
req.send();