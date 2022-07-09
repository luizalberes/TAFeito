var initialDay = "";
var sunday = "Domingo";
var monday = "Segunda";
var tuesday = "Terça";
var wednesday = "Quarta";
var thursday = "Quinta";
var friday = "Sexta";
var saturday = "Sábado";

function getValues() {
        
    var btn = document.querySelector("#btCalc");

    btn.addEventListener("click", function () {
        var age = document.querySelector("#age").value;
        var weight = document.querySelector("#weight").value;
        var height = document.querySelector("#height").value;
        var estrategy = document.querySelector("#estrategy").value;

        localStorage.setItem('valueAge', age);
        localStorage.setItem('valueWeight', weight);
        localStorage.setItem('valueHeight', height);
        localStorage.setItem('valueEstrategy', estrategy);
        console.log(estrategy);
    })

    console.log("entrou valores"); 

    window.location.href = "macros.html";   

    event.preventDefault();
}

