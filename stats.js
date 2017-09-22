// CHART DOC

'use strict';

var ctx = document.getElementById("myChart2").getContext("2d");

var data = {
    labels: [""Mon", "Tues", "Wed", "Thurs", "Fri","],
    datasets: [
      

        
        {
        label: 'Shelter',
        data: [
            0, 4, 7, 8, 7, 12, 15
        ],
        backgroundColor: '#83D3FF'
            
            
            
      },
        
                
{
        label: 'Food',
        data: [
            0, 1, 4, 9, 6, 10, 15
        ],
        backgroundColor: '#18EAB8'
      },  
        
        {
        label: 'Emergency',
        data: [
            0, 1, 4, 5, 6, 5, 10
        ],
        backgroundColor: '#C62C2C',
        pointBackgroundColor: '#FCFCFC',
        pointStyle: 'circle',
        pointHoverBackgroundColor: '#39FCCC',
      
 
    },
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






          
              
