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

    if (distance == ""){
        alert("Insira uma distância!");
    } else {
        if (laps > 6){
            alert("O número excede o máximo de voltas permitidas!");
        } else {
            for (var i = 1; i <= auxLaps; i++){
                // eval('lap'+i).style.visibility = "visible";
                document.getElementById('lblap'+i).innerHTML = "Volta "+i+ " no tempo de ";
            }
        
            for (var i = 0; i < (auxLaps - laps); i++){
                // eval('lap'+(auxLaps - i)).style.visibility = "hidden"; //sumir id escolhido do html
                document.getElementById('lblap'+(auxLaps - i)).innerHTML = "";
                document.getElementById('lap'+(auxLaps - i)).innerHTML = "";
                document.getElementById('velocityLap'+(auxLaps - i)).innerHTML = "";
            }
        }
    }

    event.preventDefault();
}

