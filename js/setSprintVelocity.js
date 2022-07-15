var minute = "";
var second = "";
var paceTemp = "";
var pace = "";
var kmtoh = "";

function setSprintVelocity() {

    console.log("sprint velocity");

    var time = document.getElementById("sprintTime").value; //seleciona valor do input

    var distance = document.getElementById("sprintDistance").value; //seleciona valor do input

    console.log("time");

    console.log(time);

    console.log("distance");

    console.log(distance);

    var minute = time.substr(0, 2) * 60;
    var second = time.substr(3, 4);

    totalSecond = parseInt(minute) + parseInt(second);

    velocity = ((distance / totalSecond) * 3.6).toFixed(2);

    document.getElementById('sprintVelocity').innerHTML = "Velocidade de "+ velocity + "km/h";

    event.preventDefault();
}