var minute = "";
var second = "";
var minutePace = "";
var secondpace = "";
var paceTemp = "";
var pace = "";
var velocity = "";
var totalSecond = "";
var vm = "";
var valueMedVelocityInput1 = "12:00";
var valueMedVelocityInput2 = "2400"; 
var controlSelect;


function calcMedVelocity() {

    if (controlSelect == 1) {
        if (valueSelectMedVelocity == "velocity") {
            valueMedVelocityInput1 = "12:00";
            valueMedVelocityInput2 = "2400";
            document.getElementById("medVelocityInput1").value = "12:00";
            document.getElementById("medVelocityInput2").value = "2400";
        } else if (valueSelectMedVelocity == "distance") {
            valueMedVelocityInput1 = "12:00";
            valueMedVelocityInput2 = "12";
            document.getElementById("medVelocityInput1").value = "12:00";
            document.getElementById("medVelocityInput2").value = "12";
        } else {
            valueMedVelocityInput1 = "2400";
            valueMedVelocityInput2 = "12";
            document.getElementById("medVelocityInput1").value = "2400";
            document.getElementById("medVelocityInput2").value = "12";
        }
    } else {
        valueSelectMedVelocity = document.querySelector("#selectMedVelocity").value; //seleciona valor do select
        valueMedVelocityInput1 = document.querySelector("#medVelocityInput1").value; //seleciona valor do input 1
        valueMedVelocityInput2 = document.querySelector("#medVelocityInput2").value; //seleciona valor do input 2
    }


    var controlSelect = localStorage.getItem('valueControlSelect');
    
    if (valueSelectMedVelocity == "velocity"){

        // km to h
        minute = valueMedVelocityInput1.substr(0, 2) * 60;
        second = valueMedVelocityInput1.substr(3, 4);
        totalSecond = parseInt(minute) + parseInt(second);
        distance = valueMedVelocityInput2;
        velocity = ((distance / totalSecond) * 3.6).toFixed(2);
        var auxvelocity = velocity.toString().replace(".", ",");

        // pace
        paceTemp = (1 / velocity) * 60;     
        minutePace = Math.trunc(paceTemp);
        secondPace = (paceTemp - minutePace) * 60;

        var auxTransformTime = transformTime(secondPace, minutePace);
        
        minutePace = auxTransformTime[0];
        secondPace = auxTransformTime[1];

        document.getElementById('convertMedVelocity').innerHTML = "Velocidade de "+ auxvelocity + "km/h ou Pace de "+ minutePace + ":" + secondPace + " por km";
    } else if (valueSelectMedVelocity == "distance"){

        // cálculo da distância
        minute = valueMedVelocityInput1.substr(0, 2) / 60;
        second = valueMedVelocityInput1.substr(3, 4) / 60 / 60;
        velocity = valueMedVelocityInput2;
        distance = (((minute + second) * velocity) * 1000).toFixed(2);

        document.getElementById('convertMedVelocity').innerHTML = "Distância de " + distance + " metros";
    } else {

        // cálculo do tempo
        distance = valueMedVelocityInput1;
        velocity = valueMedVelocityInput2;

        time = (distance / 1000) / velocity;

        minute = Math.trunc(time * 60);
        second = ((time * 60) - minute) * 60;

        var auxTransformTime = transformTime(second, minute);
        
        second = auxTransformTime[0];
        minute = auxTransformTime[1];

        document.getElementById('convertMedVelocity').innerHTML = "Tempo de " + minute + ":" + second;
    }

    localStorage.setItem('valueControlSelect', 0);

    teste2 = localStorage.getItem('valueControlSelect');

    event.preventDefault();
}