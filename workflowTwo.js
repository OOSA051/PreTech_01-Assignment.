// CHART DOC

'use strict';

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri",],
    datasets: [
      {
        label: 'Emergency',
        data: [
            0, 1, 4, 8, 6, 5, 15
        ],
        backgroundColor: '#F43737',
        pointBackgroundColor: '#FCFCFC',
        pointStyle: 'circle',
        pointHoverBackgroundColor: '#39FCCC',
      
 
    },
        
        {
        label: 'Food',
        data: [
            0, 6, 8, 10, 9, 5, 15
        ],
        backgroundColor: '#18EAB8'
      },  
        
        {
        label: 'Shelter',
        data: [
            0, 4, 7, 8, 7, 12, 15
        ],
        backgroundColor: '#83D3FF'
            
            
            
      }
    ]
}

var myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                    
                   
                },
              
            }]
            
            }
    }
});




          
              
