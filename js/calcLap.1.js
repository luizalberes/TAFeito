var minute = "";
var second = "";
var paceTemp = "";
var pace = "";
var kmtoh = "";
var exitIf = "0";


function calcLap() {

    let secondsArray = [];
    
    var laps = document.getElementById('laps').value; //quantidade de voltas
    var distance = document.getElementById('distanceTestLap').value; //distância da prova

    var totalTime = document.querySelector("#totalTime").value; //seleciona valor do input do time da prova

    var minuteTotal = totalTime.substr(0, 2);
    var secondTotal = totalTime.substr(3, 4);

    var totalTimeInSeconds = ((minuteTotal * 60) + parseInt(secondTotal));

    var totalTimeInSecondsLap = totalTimeInSeconds / laps;

    var minuteLap = Math.trunc(parseInt(totalTimeInSecondsLap) / 60);

    var secondLapInt = secondTotal / laps;

    var restSecondLap = Math.round((totalTimeInSecondsLap - Math.trunc(parseInt(totalTimeInSecondsLap))) * laps);

    console.log("laps: "+laps);
    console.log("distance: "+distance);
    console.log("totalTime: "+totalTime);

    console.log("totalTimeInSeconds: "+totalTimeInSeconds);
    console.log("totalTimeInSecondsLap: "+totalTimeInSecondsLap);
    console.log("minuteLap: "+minuteLap);
    console.log("secondLapInt: "+secondLapInt);
    console.log("restSecondLap: "+restSecondLap);


    console.log("")


    var auxSecond = 0;
    var restAuxSecond = restSecondLap;

    if (minuteLap < 10 && minuteLap > 0){
        minuteLap = "0" + parseInt(minuteLap);
    }
    if (restAuxSecond > 0){ //quantas vezes vai para o for
        if (minuteTotal % 6 == 0) {
            auxSecond = parseInt(secondLapInt) + 1; //segundo inteiro + 1
        } else {
            auxSecond = parseInt(totalTimeInSecondsLap) - (parseInt(minuteLap) * 60) + parseInt(1);
        }    

        
        if (secondLapInt - parseInt(secondLapInt) > 0){
            for (var i = 1; i <= restSecondLap; i++ ){
                var contador = 0
                if (auxSecond < 10 && auxSecond >= 0){
                    auxSecond = "0" + parseInt(auxSecond);
                }  
                secondsArray.push(auxSecond)
            }
        } else {
            for (var i = 1; i <= restSecondLap; i++ ){
                if (auxSecond < 10 && auxSecond >= 0){
                    auxSecond = "0" + parseInt(auxSecond);
                }        
                secondsArray.push(auxSecond)
            }
        }
        restAuxSecond = 0;
    } 

    if (restAuxSecond == 0) {      
        if (minuteTotal % 6 == 0) {
            auxSecond = parseInt(secondLapInt); 
        } else {
            if (secondTotal == 0){
                auxSecond = (minuteTotal * 10) - (laps * minuteLap * 10); 
            } else if ((totalTimeInSecondsLap - parseInt(totalTimeInSecondsLap) >= 0)){
                auxSecond = parseInt(totalTimeInSecondsLap) - (parseInt(minuteLap) * 60);
            } else {
                auxSecond = parseInt(totalTimeInSecondsLap) - (parseInt(minuteLap) * 60) + parseInt(1); 
            }

        }       
        if (secondLapInt - parseInt(secondLapInt) > 0){
            for (var i = 1; i <= laps - restSecondLap; i++ ){
                if (auxSecond < 10 && auxSecond >= 0){
                    auxSecond = "0" + parseInt(auxSecond);
                }
                secondsArray.push(auxSecond)    
            }
        } else {
            for (var i = 1; i <= laps - restSecondLap; i++ ){
                if (auxSecond < 10 && auxSecond >= 0){
                    auxSecond = "0" + parseInt(auxSecond);
                }        
                secondsArray.push(auxSecond)
            }
        }
    }     
    

    for (var i = 1; i <= laps; i++ ){
        document.getElementById('lap' + i).value = minuteLap + ":" + secondsArray[i-1];
        var vm = ((distance / laps) / ((minuteLap * 60) + parseInt(secondsArray[i-1]))) * 3.6;
        document.getElementById('velocityLap' + i).innerHTML = "Velocidade de " + vm.toFixed(2).toString().replace(".", ",") + "km/h";
    }

    event.preventDefault();
}