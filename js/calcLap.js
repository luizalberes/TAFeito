var minute = "";
var second = "";
var paceTemp = "";
var pace = "";
var kmtoh = "";
var exitIf = "0";



function calcLap() {

    let secondsArray = [];
    let minutesArray = [];
    
    var laps = document.getElementById('laps').value; //quantidade de voltas
    var distance = document.getElementById('distanceTestLap').value; //distância da prova

    var totalTime = document.querySelector("#totalTime").value; //seleciona valor do input do time da prova

    var minuteTotal = totalTime.substr(0, 2); //minutos
    var secondTotal = totalTime.substr(3, 4); //segundos

    var totalTimeInSeconds = ((minuteTotal * 60) + parseInt(secondTotal)); //tempo total em segundos

    var totalTimeInSecondsLap = totalTimeInSeconds / laps; //segundos de cada volta

    var minuteLap = Math.trunc(totalTimeInSecondsLap / 60); //minuto de cada volta

    var secondLapInt = Math.trunc(totalTimeInSecondsLap - (minuteLap * 60));//segundo de forma inteira

    var restSecond = totalTimeInSeconds - (Math.trunc(totalTimeInSecondsLap) * laps); //segundos que sobraram
    
    var timeAll = 0; 

    var auxSecond = secondLapInt; //variável auxiliar dos segundos
    var restAuxSecond = restSecond; //segundos que estão sobrando em uma variável auxiliar

    if (minuteLap < 10 && minuteLap >= 0){ //se o minuto tiver entre 0 e 9 acrescenta um zero à esquerda
        minuteLap = "0" + parseInt(minuteLap);
    }

    var auxMinute = minuteLap;

    if (restAuxSecond > 0){ //quantas segundos estão sobrando

        auxSecond++; //acrescenta um segundo nos segundos da volta

        if (auxSecond < 10 && auxSecond >= 0){ //se o segundo tiver entre 0 e 9 acrescenta um zero à esquerda
            auxSecond = "0" + auxSecond;
        } else if (auxSecond == 60){
            auxMinute = "0" + (parseInt(minuteLap) + parseInt(1));
            auxSecond = "00";
        } 

        for (var i = 1; i <= restSecond; i++ ){ //adiciona o segundo no array
            minutesArray.push(auxMinute);
            secondsArray.push(auxSecond);
        }
        restAuxSecond = 0; //sai do if para que seja complementado o restante das voltas
    } 

    if (restAuxSecond == 0) {   

        auxSecond = secondLapInt;

        if (auxSecond < 10 && auxSecond >= 0){ //se o segundo tive entre 0 e 9 acrescenta um zero à esquerda
            auxSecond = "0" + auxSecond;
        } 

        for (var i = 1; i <= laps - restSecond; i++ ){
            minutesArray.push(minuteLap);
            secondsArray.push(auxSecond);
        }        
    }     

    for (var i = 1; i <= laps; i++ ){
        document.getElementById('lap' + i).value = minutesArray[i-1] + ":" + secondsArray[i-1];
        var vm = ((distance / laps) / ((minuteLap * 60) + parseInt(secondsArray[i-1]))) * 3.6;
        document.getElementById('velocityLap' + i).innerHTML = "Velocidade de " + vm.toFixed(2).toString().replace(".", ",") + "km/h";
    }

    for (i = 1; i <= laps; i++){
        var auxTime = document.getElementById('lap' + i).value;
        var minute = auxTime.substr(0, 2);
        var second = auxTime.substr(3, 4);
        timeAll = parseInt(timeAll) + parseInt(minute * 60) + parseInt(second);
    }

    event.preventDefault();
}