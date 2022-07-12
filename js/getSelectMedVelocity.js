var day1 = "Domingo";
var day2 = "Segunda";
var day3 = "Terça";
var day4 = "Quarta";
var day5 = "Quinta";
var day6 = "Sexta";
var day7 = "Sábado";

function getSelectMedVelocity() {

    var valueSelectMedVelocity = document.querySelector("#selectMedVelocity").value; //seleciona valor do select
    
    localStorage.setItem('valueControlSelect', 1);

    var teste = localStorage.getItem('valueControlSelect');

    if (valueSelectMedVelocity == "velocity") {
        document.getElementById('lbMedVelocity1').innerHTML = "Tempo";
        document.getElementById('lbMedVelocity2').innerHTML = "Distância";
        document.getElementById("medVelocityInput1").type = "time";
        document.getElementById("medVelocityInput1").value = "12:00";
        document.getElementById("medVelocityInput2").type = "number";
        document.getElementById("medVelocityInput2").value = "2400";
    } else if (valueSelectMedVelocity == "distance") {
        document.getElementById('lbMedVelocity1').innerHTML = "Tempo";
        document.getElementById('lbMedVelocity2').innerHTML = "Velocidade";
        document.getElementById("medVelocityInput1").type = "time";
        document.getElementById("medVelocityInput1").value = "12:00";
        document.getElementById("medVelocityInput2").type = "number";
        document.getElementById("medVelocityInput2").value = "12";
    } else {
        document.getElementById('lbMedVelocity1').innerHTML = "Distância";
        document.getElementById('lbMedVelocity2').innerHTML = "Velocidade";
        document.getElementById("medVelocityInput1").type = "number";
        document.getElementById("medVelocityInput1").value = "2400";
        document.getElementById("medVelocityInput2").type = "number";
        document.getElementById("medVelocityInput2").value = "12";
    }

    

    event.preventDefault();
}

