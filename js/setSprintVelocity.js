function setSprintVelocity() {

    var time = document.getElementById("sprintTime").value; //seleciona valor do input

    var distance = document.getElementById("sprintDistance").value; //seleciona valor do input

    var minute = time.substr(0, 2) * 60;
    var second = time.substr(3, 4);

    var totalSecond = parseInt(minute) + parseInt(second);

    var velocity = ((distance / totalSecond) * 3.6).toFixed(2);

    document.getElementById('sprintVelocity').innerHTML = "Velocidade de "+ velocity + "km/h";

    event.preventDefault();
}