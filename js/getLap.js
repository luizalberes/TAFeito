var initialDay = "";
var sunday = "Domingo";
var monday = "Segunda";
var tuesday = "Terça";
var wednesday = "Quarta";
var thursday = "Quinta";
var friday = "Sexta";
var saturday = "Sábado";

function getLap() {

    var laps = document.getElementById('laps').value;
    var distance = document.getElementById('distanceTestLap').value;

    var auxLaps = 6;

    var lap1 = document.querySelector("#lap1");
    var lap2 = document.querySelector("#lap2");
    var lap3 = document.querySelector("#lap3");
    var lap4 = document.querySelector("#lap4");
    var lap5 = document.querySelector("#lap5");
    var lap6 = document.querySelector("#lap6");

    if (distance == ""){
        alert("Insira uma distância!");
    } else {
        if (laps > 6){
            alert("O número excede o máximo de voltas permitidas!");
        } else {
            for (var i = 1; i <= auxLaps; i++){
                eval('lap'+i).disabled = false;
            }
        
        
            for (var i = 0; i < (auxLaps - laps); i++){
                eval('lap'+(auxLaps - i)).disabled = true;
                eval('lap'+(auxLaps - i)).value = "00:00";
                document.getElementById('velocityLap' + (auxLaps - i)).innerHTML = "";
                //document.getElementById('lap'+(auxLaps - i)).remove();
            }
        }
    }

    event.preventDefault();
}

