var minute = "";
var second = "";
var paceTemp = "";
var pace = "";
var kmtoh = "";
var exitIf = "0";


function simuleTest() {
        
    console.log("entrou simule"); 

    var timeTest = document.querySelector("#timeTest").value; //seleciona valor do input do time da prova
    var timeInitial = document.querySelector("#timeInitial").value; //seleciona valor do input do time inicial

    var distanceTest = document.querySelector("#distanceTest").value; //seleciona valor do input da distância da prova

    var velocityInitial = document.querySelector("#velocityInitial").value; //seleciona valor do input da velocidade inicial

    var minuteTest = timeTest.substr(0, 2);
    var secondTest = timeTest.substr(3, 4);

    var minuteInitial = timeInitial.substr(0, 2);
    var secondInitial = timeInitial.substr(3, 4);

    var minuteFinal = minuteTest - minuteInitial;
    var secondFinal = secondTest - secondInitial;
    
    var distanceInitial = velocityInitial * ((minuteInitial / 60) + (secondInitial / 60 / 60)) * 1000;
    var distanceFinal = distanceTest - distanceInitial;

    
    console.log(parseInt(distanceInitial)); 
    console.log(distanceFinal); 

    if (distanceInitial - parseInt(distanceInitial) > 0)  {
        document.getElementById('distanceInitial').value = distanceInitial.toFixed(2);
        document.getElementById('distanceFinal').value = distanceFinal.toFixed(2);
    } else {
        document.getElementById('distanceInitial').value = distanceInitial;
        document.getElementById('distanceFinal').value = distanceFinal;          
    }

    minute = minuteFinal / 60;
    second = secondFinal / 60 / 60;
    var velocityFinal = (distanceFinal / 1000) / (minute + second);
    kmtoh = parseFloat(velocityFinal).toFixed(2);
    document.getElementById('velocityFinal').value = kmtoh;


    if ((minuteInitial > minuteTest) || ((minuteInitial == minuteTest) && secondInitial > 0)){
        exitIf = "1"; 
        document.getElementById('timeInitial').value = "00:00"; 
        document.getElementById('timeFinal').value = "00:00";
        alert("O tempo da prova é menor que o tempo de início!");
    } else if (exitIf != "1") {
        console.log(exitIf);
        console.log("entrou");
        if (secondFinal < 10 && secondFinal >= 0){
            secondFinal = "0" + secondFinal;
            if (minuteFinal < 10 && minuteFinal >= 0){
                minuteFinal = "0" + minuteFinal;
            }           
        } else if (secondFinal < 0){
            secondFinal = 60 - secondInitial;
            if (secondFinal < 10){
                secondFinal = "0" + secondFinal;            
            }
            if (minuteFinal < 10 && minuteFinal > 0){
                minuteFinal = "0" + (minuteFinal - 1);
            } 
        } 
        
        if (minuteInitial == 0 && secondInitial > 0){
            minuteFinal = minuteFinal - 1;
            console.log("entrou"); 
        }
        document.getElementById('timeFinal').value = minuteFinal + ":" + secondFinal 
    }

    if (distanceFinal < 0){
        alert("A velocidade inicial seria suficiente para completar a prova!");
        document.getElementById('timeInitial').value = "00:00"; 
        document.getElementById('timeFinal').value = "00:00";
        document.getElementById('distanceInitial').value = "0";
        document.getElementById('distanceFinal').value = "0";
        document.getElementById('velocityInitial').value = "0";
        document.getElementById('velocityFinal').value = "0";           
    }

    event.preventDefault();
}