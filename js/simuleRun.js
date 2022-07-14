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
var timeAcum = [];
var distanceTotal = [];
var AuxSumTime;

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

    var controlRemove = localStorage.getItem("valueControlRemove");

    //console.log(": "+);

    console.log("control: "+control);

    console.log("controlRemove: "+controlRemove);

    if (container == "") {
        table = [
            '<table>',
                '<thead>',
                    '<tr>',
                        '<th>Sprint</th>',
                        '<th>Tempo</th>',
                        '<th>Tempo Acumulado</th>',
                        '<th>Distância</th>',
                        '<th>Velocidade</th>',
                        '<th>Pace</th>',
                    '</tr>',
                '</thead>',
                '<tbody>', //índice 11
                    // '<tr>', 
                    //     '<td>1</td>',
                    //     '<td>data</td>',
                    //     '<td>data</td>',                    
                    //     '<td>data</td>',
                    //     '<td>data</td>',
                    //     '<td>data</td>',
                    // '</tr>', //índice 19
                '</tbody>', //índice 20
                '<tfoot>', //índice 21
                    '<tr>', 
                        '<td>Total</td>', //índice 23
                    //     '<td>data</td>', //índice 24 q é removido 
                    //     '<td>data</td>',
                    //     '<td>data</td>',
                    //     '<td>data</td>',
                    //     '<td>data</td>',
            //         '</tr>',
            //     '</tfoot>',
            // '</table>' //índice
        ]
        sumTime = 0;
        sumDistance = 0;
        distanceTotal = [];
        timeAcum = [];
        localStorage.setItem("valueDistanceTotal",sumDistance);
    } else {      
        if (controlElse == false){
            if (controlRemove == "true") {
                table = localStorage.getItem("valueTable");
                table = transformArray(table);
                localStorage.setItem("valueControlRemove", false);
                distanceTotal = localStorage.getItem("valueDistanceTotal");
                distanceTotal = transformArray(distanceTotal);
                timeAcum = localStorage.getItem("valueTimeAcum");
                timeAcum = transformArray(timeAcum);
                sumTime = parseInt(localStorage.getItem("valueAuxSumTime"));
                sumDistance = parseInt(localStorage.getItem("valueAuxSumDistance"));
            } 
            table.splice((table.length-8),(table.length));
            console.log("entrou no else");
            console.log("timeAcum: ");
            console.log(timeAcum);
        } 
    }
    
    
    //BOTÕES

    //botão para adicionar o split
    var btAddSprint = document.getElementById("btAddSprint");
    var btDeleteRun = document.getElementById("btDeleteRun");
    var btRemoveSprint = document.getElementById("btRemoveSprint");
    btDeleteRun.disabled = false;
    btRemoveSprint.disabled = false;

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
    var sprintVelocity = (((sprintDistance / (parseInt(minute*60) + parseInt(second))) * 3.6).toFixed(2).toString()) + "km/h";
    //.replace(".", ",")


    var totalSecondSprint = (parseInt(minute*60) + parseInt(second));

    var totalSecondPace = (1000 * (parseInt(minute*60) + parseInt(second))) / sprintDistance;

    var minutePace = Math.trunc(totalSecondPace / 60);

    var secondPace = Math.round(((totalSecondPace / 60) - minutePace) * 60);

    var auxTransformTime = transformTime(secondPace, minutePace);
        
    secondPace = auxTransformTime[0];
    minutePace = auxTransformTime[1];

    var pace = minutePace + ":" + secondPace;

    sumTime = (sumTime + totalSecondSprint);

    sumDistance = parseInt(sumDistance) + parseInt(sprintDistance);

    var minuteTimeTotal = Math.trunc(sumTime / 60); //fica só com a parte antes da vírgula

    var secondTimeTotal = ((sumTime / 60) - minuteTimeTotal) * 60; 

    var auxTransformTime = transformTime(secondTimeTotal, minuteTimeTotal);
        
    secondTimeTotal = auxTransformTime[0];
    minuteTimeTotal = auxTransformTime[1];

    var timeTotal = minuteTimeTotal + ":" + secondTimeTotal;

    console.log("timeTotal em simule run");

    console.log(timeTotal);

    var sprint;

    var auxValueIndex = localStorage.getItem('valueIndex');
    
    if (auxValueIndex == "null" || auxValueIndex == "" || auxValueIndex == "Nan") {
        auxIndex = 11;
        sprint = 1;
    } else {
        auxIndex = localStorage.getItem('valueIndex');
        sprint = localStorage.getItem('valueSprint');
    }



    if (control == 0) {
        //O total que tá na tabela + o tempo do próximo sprint igual ao tempo da corrida
        if (((sumDistance - sprintDistance) + parseInt(sprintDistance) == runDistance) ||
        ((sumTime - totalSecondSprint) + parseInt(totalSecondSprint) == totalSecondRunTime)) { 
            if (((sumDistance - sprintDistance) + parseInt(sprintDistance) == runDistance) &&
            ((sumTime - totalSecondSprint) + parseInt(totalSecondSprint) == totalSecondRunTime)) {

                //localStorage.setItem("valueAuxSumDistance", sumDistance);
                localStorage.setItem("valueAuxSumTime", sumTime);
                timeAcum.push(timeTotal);
                localStorage.setItem("valueTimeAcum", timeAcum);
                distanceTotal.push(sumDistance);
                localStorage.setItem('valueDistanceTotal', distanceTotal);

                for (var i = 0; i < 1; i++){
                    table.splice((parseInt(auxIndex) + parseInt(i+1)), 0, '<tr>'); //12
                    table.splice((parseInt(auxIndex) + parseInt(i+2)), 0,'<td>'+ sprint +'</td>'); //13
                    table.splice((parseInt(auxIndex) + parseInt(i+3)), 0,'<td>'+ sprintTime +'</td>'); //14
                    table.splice((parseInt(auxIndex) + parseInt(i+4)), 0,'<td>'+ timeAcum[sprint-1] +'</td>'); //15
                    table.splice((parseInt(auxIndex) + parseInt(i+5)), 0,'<td>'+ sprintDistance +'</td>'); //16
                    table.splice((parseInt(auxIndex) + parseInt(i+6)), 0,'<td>'+ sprintVelocity +'</td>'); //17
                    table.splice((parseInt(auxIndex) + parseInt(i+7)), 0,'<td>'+ pace +'</td>'); //18
                    table.splice((parseInt(auxIndex) + parseInt(i+8)), 0, '</tr>'); //19
                    
                    // adicionando tfoot
                    table.splice((parseInt(auxIndex) + parseInt(i+13)), 0,'<td>'+ timeAcum[timeAcum.length-1] +'</td>'); //24
                    table.splice((parseInt(auxIndex) + parseInt(i+14)), 0,'<td> - </td>'); //25
                    table.splice((parseInt(auxIndex) + parseInt(i+15)), 0,'<td>' + distanceTotal[distanceTotal.length-1] + '</td>'); //26
                    table.splice((parseInt(auxIndex) + parseInt(i+16)), 0,'<td> - </td>'); //27
                    table.splice((parseInt(auxIndex) + parseInt(i+17)), 0,'<td> - </td>'); //28
                    table.splice((parseInt(auxIndex) + parseInt(i+18)), 0,'</tr>'); //29
                    table.splice((parseInt(auxIndex) + parseInt(i+19)), 0,'</tfoot>'); //30
                    table.splice((parseInt(auxIndex) + parseInt(i+20)), 0,'</table>'); //31

                    auxIndex = (parseInt(auxIndex) + parseInt(i+8)); //20
                }

                sprint++;

                localStorage.setItem('valueIndex', auxIndex);

                localStorage.setItem('valueSprint', sprint);

                localStorage.setItem('valueTable', table);              

                var container = document.getElementById("tableSimuleRun");
                container.innerHTML = table.join("\n");

                document.getElementById("btDeleteRun").style.visibility = "visible"; //mostrar id escolhido do html

                document.getElementById("btRemoveSprint").style.visibility = "visible"; //mostrar id escolhido do html

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
                var secondRest = Math.round(((restSeconds / 60) - minuteRest) * 60);

                var auxTransformTime = transformTime(secondRest, minuteRest);
        
                secondRest = auxTransformTime[0];
                minuteRest = auxTransformTime[1];

                //distância para completar
                var totalDistances = sumDistance - sprintDistance; //valor que tá no total da tabela
                var restDistance = runDistance - totalDistances; //valor que falta para completar o total

                //atualizar valor distância
                sumDistance = totalDistances;

                distanceTotal.push(sumDistance);

                localStorage.setItem("valueDistanceTotal",distanceTotal);

                document.getElementById("sprintTime").value = minuteRest + ":" + secondRest;
                document.getElementById("sprintDistance").value = restDistance;

                controlElse = true;
            }
        } else {
            if (sumTime <= totalSecondRunTime){
                if (sumDistance <= runDistance){

                    //localStorage.setItem("valueAuxSumDistance", sumDistance);
                    localStorage.setItem("valueAuxSumTime", sumTime);
                    timeAcum.push(timeTotal);
                    localStorage.setItem("valueTimeAcum", timeAcum);
                    distanceTotal.push(sumDistance);
                    localStorage.setItem('valueDistanceTotal', distanceTotal);

                    for (var i = 0; i < 1; i++){
                        table.splice((parseInt(auxIndex) + parseInt(i+1)), 0, '<tr>'); //12
                        table.splice((parseInt(auxIndex) + parseInt(i+2)), 0,'<td>'+ sprint +'</td>'); //13
                        table.splice((parseInt(auxIndex) + parseInt(i+3)), 0,'<td>'+ sprintTime +'</td>'); //14
                        table.splice((parseInt(auxIndex) + parseInt(i+4)), 0,'<td>'+ timeAcum[sprint-1] +'</td>'); //15
                        table.splice((parseInt(auxIndex) + parseInt(i+5)), 0,'<td>'+ sprintDistance +'</td>'); //16
                        table.splice((parseInt(auxIndex) + parseInt(i+6)), 0,'<td>'+ sprintVelocity +'</td>'); //17
                        table.splice((parseInt(auxIndex) + parseInt(i+7)), 0,'<td>'+ pace +'</td>'); //18
                        table.splice((parseInt(auxIndex) + parseInt(i+8)), 0, '</tr>'); //19
                        
                        // adicionando tfoot
                        table.splice((parseInt(auxIndex) + parseInt(i+13)), 0,'<td>'+ timeAcum[timeAcum.length-1] +'</td>'); //24
                        table.splice((parseInt(auxIndex) + parseInt(i+14)), 0,'<td> - </td>'); //25
                        table.splice((parseInt(auxIndex) + parseInt(i+15)), 0,'<td>' + distanceTotal[distanceTotal.length-1] + '</td>'); //26
                        table.splice((parseInt(auxIndex) + parseInt(i+16)), 0,'<td> - </td>'); //27
                        table.splice((parseInt(auxIndex) + parseInt(i+17)), 0,'<td> - </td>'); //28
                        table.splice((parseInt(auxIndex) + parseInt(i+18)), 0,'</tr>'); //29
                        table.splice((parseInt(auxIndex) + parseInt(i+19)), 0,'</tfoot>'); //30
                        table.splice((parseInt(auxIndex) + parseInt(i+20)), 0,'</table>'); //31

                        auxIndex = (parseInt(auxIndex) + parseInt(i+8)); //20
                    }
                
                    sprint++;

                    localStorage.setItem('valueIndex', auxIndex);

                    localStorage.setItem('valueSprint', sprint);

                    localStorage.setItem('valueTable', table);

                    var container = document.getElementById("tableSimuleRun");
                    container.innerHTML = table.join("\n");

                    document.getElementById("btDeleteRun").style.visibility = "visible"; //mostrar id escolhido do html

                    document.getElementById("btRemoveSprint").style.visibility = "visible"; //mostrar id escolhido do html

                    controlElse = false;
                } else {
                    alert("Configure o sprint para que seja compatível com as informações da prova!");
                        
                    //tempo para completar
                    var totalSprints = sumTime - totalSecondSprint; //valor que tá no total da tabela
                    var restSeconds = totalSecondRunTime - totalSprints; //valor que falta para completar o total
            
                    //atualizar valor sumTime
                    sumTime = totalSprints;
                    
                    var minuteRest = Math.trunc(restSeconds / 60);
                    var secondRest = Math.round(((restSeconds / 60) - minuteRest) * 60);
            
                    var auxTransformTime = transformTime(secondRest, minuteRest);
        
                    secondRest = auxTransformTime[0];
                    minuteRest = auxTransformTime[1];
            
                    //distância para completar
                    var totalDistances = sumDistance - sprintDistance; //valor que tá no total da tabela
                    var restDistance = runDistance - totalDistances; //valor que falta para completar o total
            
                    //atualizar valor distância
                    sumDistance = totalDistances;

                    distanceTotal.push(sumDistance);

                    localStorage.setItem("valueDistanceTotal",distanceTotal);
            
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
                var secondRest = Math.round(((restSeconds / 60) - minuteRest) * 60);
                
                var auxTransformTime = transformTime(secondRest, minuteRest);
        
                secondRest = auxTransformTime[0];
                minuteRest = auxTransformTime[1];

                //distância para completar
                var totalDistances = sumDistance - sprintDistance; //valor que tá no total da tabela
                var restDistance = runDistance - totalDistances; //valor que falta para completar o total

                //atualizar valor distância
                sumDistance = totalDistances;

                distanceTotal.push(sumDistance);

                localStorage.setItem("valueDistanceTotal",distanceTotal);

                document.getElementById("sprintTime").value = minuteRest + ":" + secondRest;
                document.getElementById("sprintDistance").value = restDistance;

                controlElse = true;

            }
        } 
    } else {

        //localStorage.setItem("valueAuxSumDistance", sumDistance);
        localStorage.setItem("valueAuxSumTime", sumTime);
        timeAcum.push(timeTotal);
        localStorage.setItem("valueTimeAcum", timeAcum);
        distanceTotal.push(sumDistance);
        localStorage.setItem('valueDistanceTotal', distanceTotal);

        for (var i = 0; i < 1; i++){
            table.splice((parseInt(auxIndex) + parseInt(i+1)), 0, '<tr>'); //12
            table.splice((parseInt(auxIndex) + parseInt(i+2)), 0,'<td>'+ sprint +'</td>'); //13
            table.splice((parseInt(auxIndex) + parseInt(i+3)), 0,'<td>'+ sprintTime +'</td>'); //14
            table.splice((parseInt(auxIndex) + parseInt(i+4)), 0,'<td>'+ timeAcum[sprint-1] +'</td>'); //15
            table.splice((parseInt(auxIndex) + parseInt(i+5)), 0,'<td>'+ sprintDistance +'</td>'); //16
            table.splice((parseInt(auxIndex) + parseInt(i+6)), 0,'<td>'+ sprintVelocity +'</td>'); //17
            table.splice((parseInt(auxIndex) + parseInt(i+7)), 0,'<td>'+ pace +'</td>'); //18
            table.splice((parseInt(auxIndex) + parseInt(i+8)), 0, '</tr>'); //19
            
            // adicionando tfoot
            table.splice((parseInt(auxIndex) + parseInt(i+13)), 0,'<td>'+ timeAcum[timeAcum.length-1] +'</td>'); //24
            table.splice((parseInt(auxIndex) + parseInt(i+14)), 0,'<td> - </td>'); //25
            table.splice((parseInt(auxIndex) + parseInt(i+15)), 0,'<td>' + distanceTotal[distanceTotal.length-1] + '</td>'); //26
            table.splice((parseInt(auxIndex) + parseInt(i+16)), 0,'<td> - </td>'); //27
            table.splice((parseInt(auxIndex) + parseInt(i+17)), 0,'<td> - </td>'); //28
            table.splice((parseInt(auxIndex) + parseInt(i+18)), 0,'</tr>'); //29
            table.splice((parseInt(auxIndex) + parseInt(i+19)), 0,'</tfoot>'); //30
            table.splice((parseInt(auxIndex) + parseInt(i+20)), 0,'</table>'); //31

            auxIndex = (parseInt(auxIndex) + parseInt(i+8)); //20
        }

        sprint++;

        localStorage.setItem('valueIndex', auxIndex);

        localStorage.setItem('valueSprint', sprint);

        localStorage.setItem('valueTable', table);

        var container = document.getElementById("tableSimuleRun");
        container.innerHTML = table.join("\n");

        document.getElementById("btDeleteRun").style.visibility = "visible"; //mostrar id escolhido do html

        document.getElementById("btRemoveSprint").style.visibility = "visible"; //mostrar id escolhido do html

        controlElse = false;   
        
    }

    
    // if ((sprintDistance > runDistance) && control == 1) {
    //     alert("A distância do sprint não pode ser maior que a distância da prova!");
    // } else if ((totalSecondSprint > totalSecondRunTime) && control == 1) {
    //     alert("O tempo do sprint não pode ser maior que a tempo da prova!");
    // }

    console.log("timeAcum no fim: ");
    console.log(timeAcum);

    event.preventDefault();
}

