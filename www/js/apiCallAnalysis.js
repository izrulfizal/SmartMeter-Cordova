function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


function addCharts(){
    
var lookup = {};

var dates = [];
var switch1s = [];
var switch2s = [];
var switch3s = [];
$.ajax({ 
    type: 'GET', 
    url: 'https://api.thingspeak.com/channels/756754/feeds.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
            for(i = 0; i < 100; i++){
                //console.log(data.feeds[i].created_at);
                var items = data.feeds;

                for (var item, i = 0; item = items[i++];) {
                    var date = item.created_at.split("T")[0];
                    var switch1 = item.field1;
                    var switch2 = item.field2;
                    var switch3 = item.field3;

                    if (!(date in lookup)) {
                        lookup[date] = 1;
                        dates.push(date);
                        switch1s.push(switch1);
                        switch2s.push(switch2);
                        switch3s.push(switch3);
                        

                    }
                }

            }
            var ctx1 = document.getElementById('myCharts1').getContext('2d');
            var ctx2 = document.getElementById('myCharts2').getContext('2d');
            var ctx3 = document.getElementById('myCharts3').getContext('2d');
            var myChart1 = new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Usage',
                        data: switch1s,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            var myChart2 = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Usage',
                        data: switch2s,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            var myChart3 = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Usage',
                        data: switch3s,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    
});

console.log(dates);
console.log(switch1s);

// ------------------------------------------------------------------
sleep(2000);
console.log("start");
var dayslist = [];
var switch1ds = [];
var switch2ds = [];
var switch3ds = [];

$.ajax({ 
    type: 'GET', 
    url: 'https://api.thingspeak.com/channels/753767/feeds.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
            for(i = 0; i < 100; i++){
                //console.log(data.feeds[i].created_at);
                var items = data.feeds;

                for (var item, i = 0; item = items[i++];) {
                    var days = item.field4;
                    var switch1d = item.field1;
                    var switch2d = item.field2;
                    var switch3d = item.field3;


                    switch1ds.push(switch1d);
                    switch2ds.push(switch2d);
                    switch3ds.push(switch3d);
                    dayslist.push(days);

                        

                    
                }

            }
            var ctx4 = document.getElementById('myCharts4').getContext('2d');
            var ctx5 = document.getElementById('myCharts5').getContext('2d');
            var ctx6 = document.getElementById('myCharts6').getContext('2d');
            var myChart4 = new Chart(ctx4, {
                type: 'line',
                data: {
                    labels: dayslist,
                    datasets: [{
                        label: 'Usage',
                        data: switch1ds,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            var myChart5 = new Chart(ctx5, {
                type: 'line',
                data: {
                    labels: dayslist,
                    datasets: [{
                        label: 'Usage',
                        data: switch2ds,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [

                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            var myChart6 = new Chart(ctx6, {
                type: 'line',
                data: {
                    labels: dayslist,
                    datasets: [{
                        label: 'Usage',
                        data: switch3ds,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)'
                        ],

                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                beginAtZero: true,
                                max: 5,
                                min: 0,
                                stepSize: 1
                            }
                        }]
                    }
                }
            });
        }
    
});
}