// TODO COMPONENT

'use strict';

var ctx = document.getElementById("myChart2").getContext("2d");

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
            0, 1, 4, 8, 6, 5, 15
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

var myChart2 = new Chart(ctx, {
    type: 'line',
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






          
              
