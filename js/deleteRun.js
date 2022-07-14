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

    localStorage.setItem('valueSprint', 1);

    localStorage.setItem('valueControlRemove', "false");

    localStorage.setItem('valueSumDistance', 0);

    var container = document.getElementById("tableSimuleRun");
    container.innerHTML = "";

    // document.getElementById("btDeleteRun").style.visibility = "hidden"; //sumir id escolhido do html
    // document.getElementById("btRemoveSprint").style.visibility = "hidden"; //sumir id escolhido do html

    var btDeleteRun = document.getElementById("btDeleteRun");
    var btRemoveSprint = document.getElementById("btRemoveSprint");
    btDeleteRun.disabled = true;
    btRemoveSprint.disabled = true;

    event.preventDefault();

    document.getElementById("sprintTime").value = "02:00";
    document.getElementById("sprintDistance").value = 400;
}

