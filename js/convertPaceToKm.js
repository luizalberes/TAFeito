var minute = "";
var second = "";
var paceTemp = "";
var pace = "";
var kmtoh = "";

function convertPaceToKm() {

    var valuePaceToKm = document.querySelector("#paceToKm").value; //seleciona valor do input

    var valueSelectPaceToKm = localStorage.getItem('valuePaceToKm');

    if (valueSelectPaceToKm == "pace"){
        minute = valuePaceToKm.substr(0, 2) / 60;
        second = valuePaceToKm.substr(3, 4) / 60 / 60;
        kmtoh = (1 / (minute + second)).toFixed(2).toString().replace(".", ",") 
        document.getElementById('convertPaceToKm').innerHTML = "Velocidade de "+ kmtoh + "km/h";
    } else {
        paceTemp = (1 / valuePaceToKm) * 60;     
        minute = Math.trunc(paceTemp);
        second = Math.trunc((paceTemp - minute) * 60);
        if (minute < 10){
            minute = "0" + minute;
        }
        if (second < 10){
            second = "0" + second;            
        }  
        document.getElementById('convertPaceToKm').innerHTML = "Pace de "+ minute + ":" + second + " por km"; 
    }
    

    event.preventDefault();
}