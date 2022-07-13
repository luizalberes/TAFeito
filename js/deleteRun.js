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

    //botão para adicionar o split
    var btAddSprint= document.getElementById("btAddSprint");
    btAddSprint.disabled = false;

    localStorage.setItem('valueIndex', null);

    localStorage.setItem('valueLap', 1);

    var container = document.getElementById("tableSimuleRun");
    container.innerHTML = "";

    document.getElementById("btDeleteSprint").style.visibility = "hidden"; //sumir id escolhido do html

    event.preventDefault();

    document.getElementById("sprintTime").value = "02:00";
    document.getElementById("sprintDistance").value = 400;
}

