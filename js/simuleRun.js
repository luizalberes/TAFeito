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
var controlElse = false;

// function transformTime(m, s) {
//     console.log("entrou");
//     if (s < 10){
//         s = "0" + s;
//     } else if (s == 60) {
//         s = "0" + s;
//         m++;
//     }

//     if (m < 10){
//         m = "0" + m;
//     }
//     console.log("second "+s);
//     console.log("minute "+m);

//     return [second, minute];
// }

function simuleRun() {

    var container = document.getElementById("tableSimuleRun").innerHTML;

    var control = localStorage.getItem("valueControl");

    console.log("control"+control);

    if (container == "") {
        table = [
            '<table>',
                '<thead>',
                    '<tr>',
                        '<th>Sprint</th>',
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
        if (controlElse == false){
            table.splice((table.length-7),(table.length+1));
        } 
    }    

    //botão para adicionar o split
    var btAddSprint = document.getElementById("btAddSprint");

    // Dados da corrida
    var runTime = document.getElementById("runTime").value; //tempo da corrida
    var runDistance = document.getElementById("runDistance").value; //distância da corrida

    runTime.disabled = false;
    runDistance.disabled = false;

    var minuteRunTime = runTime.substr(0, 2); //minutos
    var secondRunTime = runTime.substr(3, 4); //segundos

    var totalSecondRunTime = (parseInt(minuteRunTime*60) + parseInt(secondRunTime));

    // Dados do sprint
    var sprintTime = document.getElementById("sprintTime").value; //tempo do sprint
    var sprintDistance = document.getElementById("sprintDistance").value;//distância do sprint

    var minute = sprintTime.substr(0, 2); //minutos
    var second = sprintTime.substr(3, 4); //segundos

    //velocidade do sprint
    var sprintVelocity = (((sprintDistance / (parseInt(minute*60) + parseInt(second))) * 3.6).toFixed(2).toString().replace(".", ",")) + "km/h";

    var totalSecondSprint = (parseInt(minute*60) + parseInt(second));

    var totalSecondPace = (1000 * (parseInt(minute*60) + parseInt(second))) / sprintDistance;

    var minutePace = Math.trunc(totalSecondPace / 60);

    var secondPace = Math.floor(((totalSecondPace / 60) - minutePace) * 60);

    if (secondPace < 10){
        secondPace = "0" + secondPace;
    } else if (secondPace == 60) {
        secondPace = "00";
        minutePace++;
    }

    if (minutePace < 10){
        minutePace = "0" + minutePace;
    }

    console.log(secondPace);
    console.log(minutePace);

    var pace = minutePace + ":" + secondPace;

    sumTime = (sumTime + totalSecondSprint);

    sumDistance = parseInt(sumDistance) + parseInt(sprintDistance);

    var minuteTimeTotal = Math.trunc(sumTime / 60);

    var secondTimeTotal = Math.floor(((sumTime / 60) - minuteTimeTotal) * 60);

    console.log(((sumTime / 60) - minuteTimeTotal) * 60);
    console.log(secondTimeTotal);

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

    var sprint;
    
    // var runLaps = document.getElementById('runLaps').value;
    
    // console.log(runLaps);

    var auxValueIndex = localStorage.getItem('valueIndex');
    
    if (auxValueIndex == "null" || auxValueIndex == "" || auxValueIndex == "Nan") {
        auxIndex = 11;
        sprint = 1;
    } else {
        auxIndex = localStorage.getItem('valueIndex');
        sprint = localStorage.getItem('valueLap');
    }

    if (control == 0) {
        //O total que tá na tabela + o tempo do próximo sprint igual ao tempo da corrida
        if (((sumDistance - sprintDistance) + parseInt(sprintDistance) == runDistance) ||
        ((sumTime - totalSecondSprint) + parseInt(totalSecondSprint) == totalSecondRunTime)) { 
            if (((sumDistance - sprintDistance) + parseInt(sprintDistance) == runDistance) &&
            ((sumTime - totalSecondSprint) + parseInt(totalSecondSprint) == totalSecondRunTime)) {
                for (var i = 0; i < 1; i++){
                    table.splice((parseInt(auxIndex) + parseInt(i)), 0, '<tr>'); //11
                    for (var j = 1; j <= 1; j++){
                        table.splice((parseInt(auxIndex) + parseInt(j)), 0,'<td>'+ sprint +'</td>'); //12
                        for (var k = 2; k <= 2; k++){
                            table.splice((parseInt(auxIndex) + parseInt(k)), 0,'<td>'+ sprintTime +'</td>'); //13
                            table.splice((parseInt(auxIndex) + parseInt(k+1)), 0,'<td>'+ sprintDistance +'</td>'); //14
                            table.splice((parseInt(auxIndex) + parseInt(k+2)), 0,'<td>'+ sprintVelocity +'</td>'); //15
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

                sprint++;

                localStorage.setItem('valueIndex', auxIndex);

                localStorage.setItem('valueLap', sprint);

                var container = document.getElementById("tableSimuleRun");
                container.innerHTML = table.join("\n");

                document.getElementById("btDeleteSprint").style.visibility = "visible"; //mostrar id escolhido do html

                controlElse = false;

                btAddSprint.disabled = true;
            } else {
                //valor do total da tabela igual ao total da prova
                alert("Configure o sprint para que seja compatível com as informações da prova!");
                // btAddSprint.disabled = true;

                //tempo para completar
                var totalSprints = sumTime - totalSecondSprint; //valor que tá no total da tabela
                var restSeconds = totalSecondRunTime - totalSprints; //valor que falta para completar o total

                //atualizar valor sumTime
                sumTime = totalSprints;
                
                var minuteRest = Math.trunc(restSeconds / 60);
                var secondRest = Math.floor(((restSeconds / 60) - minuteRest) * 60);

                if (secondRest < 10){
                    secondRest = "0" + secondRest;
                } else if (secondRest == 60) {
                    secondRest = "00";
                    minuteRest++;
                }
            
                if (minuteRest < 10){
                    minuteRest = "0" + minuteRest;
                }

                //distância para completar
                var totalDistances = sumDistance - sprintDistance; //valor que tá no total da tabela
                var restDistance = runDistance - totalDistances; //valor que falta para completar o total

                //atualizar valor distância
                sumDistance = totalDistances;

                document.getElementById("sprintTime").value = minuteRest + ":" + secondRest;
                document.getElementById("sprintDistance").value = restDistance;

                controlElse = true;
            }
        } else {
            if (sumTime <= totalSecondRunTime){
                if (sumDistance <= runDistance){
                    for (var i = 0; i < 1; i++){
                        table.splice((parseInt(auxIndex) + parseInt(i)), 0, '<tr>'); //11
                        for (var j = 1; j <= 1; j++){
                            table.splice((parseInt(auxIndex) + parseInt(j)), 0,'<td>'+ sprint +'</td>'); //12
                            for (var k = 2; k <= 2; k++){
                                table.splice((parseInt(auxIndex) + parseInt(k)), 0,'<td>'+ sprintTime +'</td>'); //13
                                table.splice((parseInt(auxIndex) + parseInt(k+1)), 0,'<td>'+ sprintDistance +'</td>'); //14
                                table.splice((parseInt(auxIndex) + parseInt(k+2)), 0,'<td>'+ sprintVelocity +'</td>'); //15
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

                    sprint++;

                    localStorage.setItem('valueIndex', auxIndex);

                    localStorage.setItem('valueLap', sprint);

                    var container = document.getElementById("tableSimuleRun");
                    container.innerHTML = table.join("\n");

                    document.getElementById("btDeleteSprint").style.visibility = "visible"; //mostrar id escolhido do html

                    controlElse = false;
                } else {
                    alert("Configure o sprint para que seja compatível com as informações da prova!");
                        
                    //tempo para completar
                    var totalSprints = sumTime - totalSecondSprint; //valor que tá no total da tabela
                    var restSeconds = totalSecondRunTime - totalSprints; //valor que falta para completar o total
            
                    //atualizar valor sumTime
                    sumTime = totalSprints;
                    
                    var minuteRest = Math.trunc(restSeconds / 60);
                    var secondRest = Math.floor(((restSeconds / 60) - minuteRest) * 60);
            
                    if (secondRest < 10){
                        secondRest = "0" + secondRest;
                    } else if (secondRest == 60) {
                        secondRest = "00";
                        minuteRest++;
                    }
                
                    if (minuteRest < 10){
                        minuteRest = "0" + minuteRest;
                    }
            
                    //distância para completar
                    var totalDistances = sumDistance - sprintDistance; //valor que tá no total da tabela
                    var restDistance = runDistance - totalDistances; //valor que falta para completar o total
            
                    //atualizar valor distância
                    sumDistance = totalDistances;
            
                    document.getElementById("sprintTime").value = minuteRest + ":" + secondRest;
                    document.getElementById("sprintDistance").value = restDistance;
            
                    controlElse = true;
                }
            } else {
                alert("Configure o sprint para que seja compatível com as informações da prova!");

                //tempo para completar
                var totalSprints = sumTime - totalSecondSprint; //valor que tá no total da tabela
                var restSeconds = totalSecondRunTime - totalSprints; //valor que falta para completar o total

                //atualizar valor sumTime
                sumTime = totalSprints;
                
                var minuteRest = Math.trunc(restSeconds / 60);
                var secondRest = Math.floor(((restSeconds / 60) - minuteRest) * 60);

                if (secondRest < 10){
                    secondRest = "0" + secondRest;
                } else if (secondRest == 60) {
                    secondRest = "00";
                    minuteRest++;
                }
            
                if (minuteRest < 10){
                    minuteRest = "0" + minuteRest;
                }

                //distância para completar
                var totalDistances = sumDistance - sprintDistance; //valor que tá no total da tabela
                var restDistance = runDistance - totalDistances; //valor que falta para completar o total

                //atualizar valor distância
                sumDistance = totalDistances;

                document.getElementById("sprintTime").value = minuteRest + ":" + secondRest;
                document.getElementById("sprintDistance").value = restDistance;

                controlElse = true;
            }
        } 
    } else {
        for (var i = 0; i < 1; i++){
            table.splice((parseInt(auxIndex) + parseInt(i)), 0, '<tr>'); //11
            for (var j = 1; j <= 1; j++){
                table.splice((parseInt(auxIndex) + parseInt(j)), 0,'<td>'+ sprint +'</td>'); //12
                for (var k = 2; k <= 2; k++){
                    table.splice((parseInt(auxIndex) + parseInt(k)), 0,'<td>'+ sprintTime +'</td>'); //13
                    table.splice((parseInt(auxIndex) + parseInt(k+1)), 0,'<td>'+ sprintDistance +'</td>'); //14
                    table.splice((parseInt(auxIndex) + parseInt(k+2)), 0,'<td>'+ sprintVelocity +'</td>'); //15
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

        sprint++;

        localStorage.setItem('valueIndex', auxIndex);

        localStorage.setItem('valueLap', sprint);

        var container = document.getElementById("tableSimuleRun");
        container.innerHTML = table.join("\n");

        document.getElementById("btDeleteSprint").style.visibility = "visible"; //mostrar id escolhido do html

        controlElse = false;           
    }

    
    // if ((sprintDistance > runDistance) && control == 1) {
    //     alert("A distância do sprint não pode ser maior que a distância da prova!");
    // } else if ((totalSecondSprint > totalSecondRunTime) && control == 1) {
    //     alert("O tempo do sprint não pode ser maior que a tempo da prova!");
    // }


    event.preventDefault();
}

