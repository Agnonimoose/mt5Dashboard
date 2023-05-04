
const weeklyLabels = ['Week 1','Week 2', 'Week 3', 'Week 4'];
const PuBu9 = ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"];
const PuBu4 = ["#d0d1e6","#74a9cf","#0570b0","#023858"];
const ctx = document.getElementById('overview');

const swapsCanvas = document.getElementById('swapsPieCard');
const drawdownCardCanvas = document.getElementById('drawdownCard');
const weeklyTradeVolsCardCanvas = document.getElementById('weeklyTradeVolsCard');
const weeklyROIPLCardCanvas = document.getElementById('weeklyROI&PLCard');
// const graphs = {};




function randoArray(n){
	var tmp = [];
  for (let i=0; i<n; i++){
  tmp.push(Math.floor(Math.random() * 10));
  }
  return tmp;
}

function updateFollow(){
  console.log("updateFollow")
}

function updateTag(data, tag){
  var start = data.slice(0,1);
  var end = data.slice(3,4)
  console.log(data);
  if (start > end){
    if (end == 0){
      end = 1;
    }
    var percent = (start / end * 100).toFixed(2);
    $(tag).removeClass('positive');
    $(tag).addClass('negative');
    $(tag).children()[0].innerHTML = '- ' + percent + ' %';
  }
  else {
    if (start == 0){
      start = 1;
    }
    var percent = (end / start * 100).toFixed(2);
    $(tag).removeClass('negative');
    $(tag).addClass('positive');
    $(tag).children()[0].innerHTML = '+ ' + percent + ' %';
  }

}

function findWallet(){
  console.log("findWallet");
  for (let id in Chart.instances) {
    Chart.instances[id].destroy();
  }

  makeSwaps(false);
  makeDraws(false);
  makeTradeVols(false);
  makeROIPL(false);
}


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
        responsive: true,

        scales: {
        y: {
            beginAtZero: true
        }
        },
        responsive: true,
    }
    });



function makeSwaps(data){
  if (data === false){
    data = randoArray(4);
  }

  updateTag(data,"#totalSwapSpan");

  var swapsChart = new Chart(swapsCanvas, {
      type: 'polarArea',
      data: {
          labels: weeklyLabels,
          datasets: [{
            label: 'My First Dataset',
            data: data,
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
    }

function makeDraws(data){
  if (data === false){
    data = randoArray(4);
  }

  updateTag(data,"#drawDownSpan");

  var drawdownChart = new Chart(drawdownCardCanvas, {
    type: 'line',
    data: {
          labels: weeklyLabels,
          datasets: [{
              data: data,
              fill: true,
              borderColor: PuBu4.slice(-1),
              backgroundColor: PuBu4.slice(-2),
              tension: 0.1
            }],
            hoverOffset: 4,
        },
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
}


function makeTradeVols(data){
  if (data === false){
    data = randoArray(4);
  }

  updateTag(data,"#tradeVolSpan");

  var weeklyTradeVolsChart = new Chart(weeklyTradeVolsCardCanvas, {
    type: 'bar', 
    data:{
      labels: weeklyLabels,
      datasets: [{
        data: data,
        backgroundColor: PuBu4,
        borderColor: PuBu4,
        borderWidth: 1
      }]
    },
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
}

function makeROIPL(data){
  if (data === false){
    var data1 = randoArray(4);
    var data2 =  randoArray(4);
  }

  updateTag(data1,"#ROISpan");
  updateTag(data2,"#PLSpan");

  var ROIPLChart = new Chart(weeklyROIPLCardCanvas, {
    type: 'line',
    data: {
      labels: weeklyLabels,
      datasets: [{
        label: 'PL',
          data: data1,
          // fill: true,
          borderColor: PuBu4.slice(-1),
          backgroundColor: PuBu4.slice(-3),
          tension: 0.1
        },
        {
          label: 'ROI',
            data: data2,
            fill: false,
            borderColor: PuBu4.slice(-4),
            backgroundColor: PuBu4.slice(-4),
            tension: 0.1
          },
      ],
        hoverOffset: 4,
    },
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
}


function reizeGraphs(){
  for (let id in Chart.instances) {
    Chart.instances[id].resize();
  }
}

window.onresize = reizeGraphs;


