
const overviewCanvas = document.getElementById('overview');


$(document).ready(function () {
    $('#walletTable').DataTable(
        {scrollX: true,}

    );
});


$(document).ready(function () {
    $("#filterWallets").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#walletTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function getData() {
    var data = {};
    var filterInput = $('.filterInput');
    for (let i=0; i<filterInput.length; i++){
        data[filterInput[i].id] = filterInput[i].value;
    }

    $.ajax({
            url: "/data/getData/",
            type: "POST",
            dataType: "json",
            data: JSON.stringify(data),
            success: (data) => {
                console.log("data = " + data);
                clearTable();

                if (data['error'] === true){
                    alert(data['msg']);
                }
                else {
                if (data['data'] !== false){
                    console.log("data['data'] = " + data['data'] );
                    var wallets = JSON.parse(data['data']);
                $('#walletTable').DataTable().clear().rows.add(wallets).draw();

            }}},
            error: (error) => {
                console.log(error);
            }
        });


}

function clearTable() {
    $(".dataRow").remove();

}

function addRow(address, PLT, ROIT, SR, DDMax, DDMin){
    var table = document.getElementById("tableBody");
    var row = table.insertRow(0);
    row.classList.add("dataRow");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = address;
    cell2.innerHTML = PLT;
    cell3.innerHTML = ROIT;
    cell4.innerHTML = SR;
    cell5.innerHTML = DDMax;
    cell6.innerHTML = DDMin;

}




function updateOverview(e){
    // overviewChart.destroy();
    // // const labels = Utils.months({count: 7});
    // const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    // const data = {
    //   labels: labels,
    //   datasets: [{
    //     label: 'My First Dataset',
    //     data: [65, 59, 80, 81, 56, 55, 40],
    //     fill: false,
    //     borderColor: 'rgb(75, 192, 192)',
    //     tension: 0.1
    //   }]
    // };
  
    // overviewChart = new Chart(ctx, {
    //     type: 'line',
    //     data: data,
    //   });
    

    updateSelectOptions(e);

  }


function updateSelectOptions(e){
    var selects = document.getElementsByClassName('dim-select');
    var axis = [];
    for (let i=0; i<selects.length; i++){
        if (selects[i].id != e.id){
            var c = selects[i].children;
            for (let j=0; j<c.length;j++){
                if (c[j].value == e.value){
                    c[j].disabled = true;
                }
                else if (c[j].value == e.dataset.value){
                    c[j].disabled = false;
                }
            }
        }

        if (selects[i].value !== "-"){
            axis.push(selects[i].value);
        }

    }
    e.dataset.value = e.value; 

    console.log("axis = ");
    console.log(axis);

}





function reizeGraphs(){
    for (let id in Chart.instances) {
      Chart.instances[id].resize();
    }
  }
  
  window.onresize = reizeGraphs;
  