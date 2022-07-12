var initialDay = "";
var sunday = "Domingo";
var monday = "Segunda";
var tuesday = "Terça";
var wednesday = "Quarta";
var thursday = "Quinta";
var friday = "Sexta";
var saturday = "Sábado";
var indexTR = 10;
var auxIndex;
var table = [];
var sumTime = 0;
var sumDistance = 0;

function simuleRun() {

    var container = document.getElementById("tableSimuleRun").innerHTML;

    console.log("entrou no simule");
    console.log(" ");

    if (container == "") {
        console.log("entrou no container");
        table = [
            '<table>',
                '<thead>',
                    '<tr>',
                        '<th>Volta</th>',
                        '<th>Tempo</th>',
                        '<th>Distância</th>',
                        '<th>Velocidade</th>',
                        '<th>Pace</th>',
                    '</tr>',
                '</thead>',
                '<tbody>', //índice 10
                    // '<tr>', 
                    //     '<td>1</td>',
                    //     '<td>data</td>',
                    //     '<td>data</td>',
                    //     '<td>data</td>',
                    //     '<td>data</td>',
                    // '</tr>',
                '</tbody>',
                '<tfoot>', //índice 19
                    '<tr>', 
                        '<td>Total</td>', //índice 21
                    //     '<td>data</td>',
                    //     '<td>data</td>',
                    //     '<td>data</td>',
                    //     '<td>data</td>',
            //         '</tr>',
            //     '</tfoot>',
            // '</table>'
        ]
        sumTime = 0;
        sumDistance = 0;
    } else {
        console.log("entrou no else");
        console.log(table.length);
        console.log(table);
        
        table.splice((table.length-7),(table.length+1));
        console.log(table);
    }    

    // Dados da corrida
    var runTime = document.getElementById("runTime").value;
    var runDistance = document.getElementById("runDistance").value;

    var minuteRunTime = runTime.substr(0, 2); //minutos
    var secondRunTime = runTime.substr(3, 4); //segundos

    var totalSecondRunTime = (parseInt(minuteRunTime*60) + parseInt(secondRunTime));

    // Dados do srpint
    var lapTime = document.getElementById("lapTime").value;
    var lapDistance = document.getElementById("lapDistance").value;

    var minute = lapTime.substr(0, 2); //minutos
    var second = lapTime.substr(3, 4); //segundos

    var lapVelocity = (((lapDistance / (parseInt(minute*60) + parseInt(second))) * 3.6).toFixed(2).toString().replace(".", ",")) + "km/h";

    var totalSecondSprint = (parseInt(minute*60) + parseInt(second));

    var totalSecondPace = (1000 * (parseInt(minute*60) + parseInt(second))) / lapDistance;

    var minutePace = Math.trunc(totalSecondPace / 60);

    var secondPace = Math.floor(((totalSecondPace / 60) - minutePace) * 60);

    if (secondPace < 10){
        secondPace = "0" + secondPace;
    } else if (secondPace == 60) {
        secondPace = "0" + secondPace;
        minutePace++;
    }

    if (minutePace < 10){
        minutePace = "0" + minutePace;
    }

    var pace = minutePace + ":" + secondPace;

    sumTime = (sumTime + totalSecondSprint);

    sumDistance = parseInt(sumDistance) + parseInt(lapDistance);

    var minuteTimeTotal = Math.trunc(sumTime / 60);

    var secondTimeTotal = Math.floor(((sumTime / 60) - minuteTimeTotal) * 60);

    if (secondTimeTotal < 10){
        secondTimeTotal = "0" + secondTimeTotal;
    } else if (secondTimeTotal == 60) {
        secondTimeTotal = "0" + secondTimeTotal;
        minuteTimeTotal++;
    }

    if (minuteTimeTotal < 10){
        minuteTimeTotal = "0" + minuteTimeTotal;
    }

    var timeTotal = minuteTimeTotal + ":" + secondTimeTotal;

    console.log(timeTotal);

    var lap;
    
    // var runLaps = document.getElementById('runLaps').value;
    
    // console.log(runLaps);

    var auxValueIndex = localStorage.getItem('valueIndex');
    
    if (auxValueIndex == "null" || auxValueIndex == "" || auxValueIndex == "Nan") {
        auxIndex = 11;
        lap = 1;
    } else {
        auxIndex = localStorage.getItem('valueIndex');
        lap = localStorage.getItem('valueLap');
    }

    if (sumTime <= totalSecondRunTime){
        if (sumDistance <= runDistance){
            console.log(sumTime);
            console.log(totalSecondRunTime);
            console.log(sumDistance);
            console.log(runDistance);
            console.log("Entrou no segundo if   ");
            for (var i = 0; i < 1; i++){
                table.splice((parseInt(auxIndex) + parseInt(i)), 0, '<tr>'); //11
                for (var j = 1; j <= 1; j++){
                    table.splice((parseInt(auxIndex) + parseInt(j)), 0,'<td>'+ lap +'</td>'); //12
                    for (var k = 2; k <= 2; k++){
                        table.splice((parseInt(auxIndex) + parseInt(k)), 0,'<td>'+ lapTime +'</td>'); //13
                        table.splice((parseInt(auxIndex) + parseInt(k+1)), 0,'<td>'+ lapDistance +'</td>'); //14
                        table.splice((parseInt(auxIndex) + parseInt(k+2)), 0,'<td>'+ lapVelocity +'</td>'); //15
                        table.splice((parseInt(auxIndex) + parseInt(k+3)), 0,'<td>'+ pace +'</td>'); //16
                    }
                }
                table.splice((parseInt(auxIndex) + parseInt(6)), 0, '</tr>'); //17
            }

            auxIndex = (parseInt(auxIndex) + parseInt(6));

            // adicionando tfoot
            table.splice((parseInt(auxIndex) + parseInt(5)), 0,'<td>'+ timeTotal +'</td>'); //22
            table.splice((parseInt(auxIndex) + parseInt(6)), 0,'<td>'+ sumDistance +'</td>'); //23
            table.splice((parseInt(auxIndex) + parseInt(7)), 0,'<td> - </td>'); //24
            table.splice((parseInt(auxIndex) + parseInt(8)), 0,'<td> - </td>'); //25
            table.splice((parseInt(auxIndex) + parseInt(9)), 0,'</tr>'); //26
            table.splice((parseInt(auxIndex) + parseInt(10)), 0,'</tfoot>'); //27
            table.splice((parseInt(auxIndex) + parseInt(11)), 0,'</table>'); //28

            auxIndex++;;

            console.log("auxIndex "+auxIndex);
            console.log(table);

            lap++;

            localStorage.setItem('valueIndex', auxIndex);

            localStorage.setItem('valueLap', lap);

            var container = document.getElementById("tableSimuleRun");
            container.innerHTML = table.join("\n");

            document.getElementById("btDeleteLap").style.visibility = "visible"; //mostrar id escolhido do html
        } else {
            alert("Configure o sprint para que seja compatível com a distância da prova!");
        }
    } else {
        alert("Configure o sprint para que seja compatível com o tempo da prova!");
    }

    event.preventDefault();
}

