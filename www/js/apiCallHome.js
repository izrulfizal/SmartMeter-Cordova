
// Get Monthly Reading
$.ajax({ 
    type: 'GET', 
    url: 'https://api.thingspeak.com/channels/753767/feeds.json?results=1', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
            //console.log(data.feeds);
            monthlyReading(data.feeds);
        }
    
});

function monthlyReading(data){
    //console.log(data);
    var UpdateDate = data[0].created_at.split("T")[0];
    var switch1 = data[0].field1;
    var switch2 = data[0].field2;
    var switch3 = data[0].field3;
    var switch1Bill = calculateBill(switch1);
    var switch2Bill = calculateBill(switch2);
    var switch3Bill = calculateBill(switch3);


    document.getElementById("dateUpdateMonth").innerHTML = "Latest update: " + UpdateDate;
    document.getElementById("switch1Month").innerHTML = "Switch 1 : " + switch1 + " kWh";
    document.getElementById("switch2Month").innerHTML = "Switch 2 : " + switch2 + " kWh";
    document.getElementById("switch3Month").innerHTML = "Switch 3 : " + switch3 + " kWh";

    document.getElementById("switch1Bill").innerHTML = "Switch 1 : RM " + switch1Bill;
    document.getElementById("switch2Bill").innerHTML = "Switch 1 : RM " + switch2Bill;
    document.getElementById("switch3Bill").innerHTML = "Switch 1 : RM " + switch3Bill;
    //setTimeout(monthlyReading,3000);
    

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

// Get Live Reading
function updateLiveReading(){
$.ajax({ 
    type: 'GET', 
    url: 'https://api.thingspeak.com/channels/713153/feeds.json?results=1', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
            //console.log(data.feeds);
            liveReading(data.feeds);
            //console.log("live");
        }
    
});
setTimeout(updateLiveReading,3000);
}

function liveReading(data){
    //console.log(data);
    var UpdateDate = data[0].created_at.split("T")[0];
    var switch1 = data[0].field1;
    var switch2 = data[0].field2;
    var switch3 = data[0].field3;

    document.getElementById("dateUpdate").innerHTML = "Latest update: " + UpdateDate;
    document.getElementById("switch1").innerHTML = "Switch 1 : " + switch1 + " kWh";
    document.getElementById("switch2").innerHTML = "Switch 2 : " + switch2 + " kWh";
    document.getElementById("switch3").innerHTML = "Switch 3 : " + switch3 + " kWh";
    console.log("Updating...");
    

}

// Get Appliances Reading
function updateAppliances(){
$.ajax({ 
    type: 'GET', 
    url: 'https://api.thingspeak.com/channels/736997/feeds.json?results=1', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
            //console.log("Appliances:")
            //console.log(data.feeds);
            appliancesReading(data.feeds);
            
        }
    
});
setTimeout(updateAppliances,3000);
}


updateLiveReading();
updateAppliances();


function appliancesReading(data){
    //console.log(data);
    
    var switch1 = data[0].field1;
    var switch2 = data[0].field2;
    var switch3 = data[0].field3;

    

    if(switch1 == "2"){
        switch1 = "On";
        document.getElementById("sw1").checked=true;
    }
    if(switch1 == "1"){
        switch1 = "Off";
        document.getElementById("sw1").checked=false;
    }
    if(switch2 == "2"){
        switch2 = "On";
        document.getElementById("sw2").checked=true;
    }
    if(switch2 == "1"){
        switch2 = "Off";
        document.getElementById("sw2").checked=false;
    }
    if(switch3 == "2"){
        switch3 = "On";
        document.getElementById("sw3").checked=true;
    }
    if(switch3 == "1"){
        switch3 = "Off";
        document.getElementById("sw3").checked=false;
    }

    
    

}