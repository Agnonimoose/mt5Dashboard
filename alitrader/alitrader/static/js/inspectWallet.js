function updateFollow(){
    console.log("hello changing the bits");
}



const ctx = document.getElementById('overview');
var overviewChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
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


const swapsCanvas = document.getElementById('swapsPie');
var swapsChart = new Chart(swapsCanvas, {
    type: 'doughnut',
    data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4,
          
        }]
      },
    options: {
        responsive: true,
        fill: true,
    }
    });

