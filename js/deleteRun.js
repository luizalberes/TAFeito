var initialDay = "";
var sunday = "Domingo";
var monday = "Segunda";
var tuesday = "Terça";
var wednesday = "Quarta";
var thursday = "Quinta";
var friday = "Sexta";
var saturday = "Sábado";
var indexTR = 10;

function deleteRun() {

    localStorage.setItem('valueIndex', null);

    localStorage.setItem('valueLap', 1);

    var container = document.getElementById("tableSimuleRun");
    container.innerHTML = "";

    document.getElementById("btDeleteLap").style.visibility = "hidden"; //sumir id escolhido do html

    event.preventDefault();
}

