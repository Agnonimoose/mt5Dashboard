
$(document).ready(function () {
    $('#walletTable').DataTable();
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


