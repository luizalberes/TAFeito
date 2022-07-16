var table = [];

function removeSprint() {

    //botão para adicionar o split
    // var btAddSprint= document.getElementById("btAddSprint");
    // btAddSprint.disabled = false;

    var container = document.getElementById("tableSimuleRun");

    var sprint = localStorage.getItem('valueSprint');

    var auxIndex = localStorage.getItem('valueIndex');

    var timeAcum = localStorage.getItem('valueTimeAcum');

    var table = localStorage.getItem('valueTable');

    var distanceTotal = localStorage.getItem('valueDistanceTotal'); 

    var speeds = localStorage.getItem('valueSpeeds');

    distanceTotal = transformArray(distanceTotal);

    distanceTotal.pop();

    timeAcum = transformArray(timeAcum);

    timeAcum.pop();

    speeds = transformArray(speeds);

    speeds.pop();

    var average = calcAverageArray(speeds);

    table = transformArray(table);

    if (sprint > 2){
        // remove somente o último sprint
        var minute = timeAcum[timeAcum.length - 1].substr(0, 2); //minutos
        var second = timeAcum[timeAcum.length - 1].substr(3, 4); //segundos
    
        var totalTime = (parseInt(minute*60) + parseInt(second));
    
        localStorage.setItem('valueAuxSumTime', totalTime);

        localStorage.setItem('valueAuxSumDistance', distanceTotal[distanceTotal.length-1]);

        table.splice((table.length-20),table.length);

        table.splice((parseInt(auxIndex) + parseInt(6)), 0,'</tbody>'); 
        table.splice((parseInt(auxIndex) + parseInt(7)), 0,'<tfoot>'); 
        table.splice((parseInt(auxIndex) + parseInt(8)), 0,'<tr>'); 
        table.splice((parseInt(auxIndex) + parseInt(9)), 0,'<td>'+ "Total" +'</td>'); 
        table.splice((parseInt(auxIndex) + parseInt(10)), 0,'<td>'+ timeAcum[timeAcum.length - 1] +'</td>'); 
        table.splice((parseInt(auxIndex) + parseInt(11)), 0,'<td> - </td>'); 
        table.splice((parseInt(auxIndex) + parseInt(12)), 0,'<td>' + distanceTotal[distanceTotal.length - 1] + '</td>'); 
        table.splice((parseInt(auxIndex) + parseInt(13)), 0,'<td>' + average + 'km/h '+ '</td>');
        table.splice((parseInt(auxIndex) + parseInt(14)), 0,'<td> - </td>'); 
        table.splice((parseInt(auxIndex) + parseInt(15)), 0,'</tr>'); 
        table.splice((parseInt(auxIndex) + parseInt(16)), 0,'</tfoot>'); 
        table.splice((parseInt(auxIndex) + parseInt(17)), 0,'</table>'); 

        container.innerHTML = table.join("\n");

        localStorage.setItem('valueSprint', (sprint-1));

        localStorage.setItem('valueSpeeds', speeds);        

        localStorage.setItem('valueTimeAcum', timeAcum);

        localStorage.setItem('valueTable', table);

        var index = localStorage.getItem('valueIndex');

        localStorage.setItem('valueIndex', (index-8));

        localStorage.setItem('valueControlRemove', "true");

        localStorage.setItem('valueDistanceTotal', distanceTotal);
  
    } else {
        deleteRun();
    }
    

    //botão para adicionar o split
    var btAddSprint= document.getElementById("btAddSprint");
    btAddSprint.disabled = false;


    // event.preventDefault();

    // document.getElementById("sprintTime").value = "02:00";
    // document.getElementById("sprintDistance").value = 400;
}

