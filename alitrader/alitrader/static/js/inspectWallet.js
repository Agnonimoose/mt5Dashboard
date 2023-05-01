function updateFollow(){
    console.log("");
}

const weeklyLabels = ['Week 1','Week 2', 'Week 3', 'Week 4'];
const PuBu9 = ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"];
const PuBu4 = ["#d0d1e6","#74a9cf","#0570b0","#023858"];



function randoArray(n){
	var tmp = [];
  for (let i=0; i<n; i++){
  tmp.push(Math.floor(Math.random() * 10));
  }
  return tmp;
}

const ctx = document.getElementById('overview');
var overviewChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: PuBu9,
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        },
        responsive: true,
    }
    });


function updateOverview(){
    overviewChart.destroy();
    // const labels = Utils.months({count: 7});
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    overviewChart = new Chart(ctx, {
        type: 'line',
        data: data,
      });
}


const swapsCanvas = document.getElementById('swapsPieCard');
var swapsChart = new Chart(swapsCanvas, {
    type: 'polarArea',
    data: {
        labels: weeklyLabels,
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100, 33],
          backgroundColor: PuBu4,
          hoverOffset: 4,
          
        }]
      },
    options: {
        responsive: true,
        fill: true,
        plugins: {
          legend: {
            display: false,
          },
        }
    }
    });


const drawdownCardCanvas = document.getElementById('drawdownCard');
const drawData = {
        labels: weeklyLabels,
        datasets: [{
            data: [0, 8, 6, -2],
            fill: true,
            borderColor: PuBu4.slice(-1),
            backgroundColor: PuBu4.slice(-2),
            tension: 0.1
          }],
          hoverOffset: 4,
      };   
var drawdownChart = new Chart(drawdownCardCanvas, {
  type: 'line',
  data: drawData,
  options: {
    scales: {
      y: { display: false },
      x: {display: false}
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  }
});


const weeklyTradeVolsCardCanvas = document.getElementById('weeklyTradeVolsCard');
const weeklyTradeVolsData = {
  labels: weeklyLabels,
  datasets: [{
    data: [65, 59, 80, 81],
    backgroundColor: PuBu4,
    borderColor: PuBu4,
    borderWidth: 1
  }]
};
const weeklyTradeVolsChart = new Chart(weeklyTradeVolsCardCanvas, {
  type: 'bar', 
  data:weeklyTradeVolsData,
  options: {
    scales: {
      y: { display: false },
      x: {display: false}

    },
    plugins: {
      legend: {
        display: false,
      },
    }
  }
});





const weeklyROIPLCardCanvas = document.getElementById('weeklyROI&PLCard');
const ROIPLData = {
        labels: weeklyLabels,
        datasets: [{
          label: 'PL',
            data: randoArray(4),
            // fill: true,
            borderColor: PuBu4.slice(-1),
            backgroundColor: PuBu4.slice(-3),
            tension: 0.1
          },
          {
            label: 'ROI',
              data: randoArray(4),
              fill: false,
              borderColor: PuBu4.slice(-4),
              backgroundColor: PuBu4.slice(-4),
              tension: 0.1
            },
        ],
          hoverOffset: 4,
      };   
var ROIPLChart = new Chart(weeklyROIPLCardCanvas, {
  type: 'line',
  data: ROIPLData,
  options: {
    scales: {
      y: { display: false },
      x: {display: false}

    },
    plugins: {
      legend: {
        display: false,
      },
    }
  }
  
  });

