var day1 = "Domingo";
var day2 = "Segunda";
var day3 = "Terça";
var day4 = "Quarta";
var day5 = "Quinta";
var day6 = "Sexta";
var day7 = "Sábado";

function getSelectTrashDay() {

    var trashDay = document.querySelector("#trashDay").value; //seleciona valor do select

    localStorage.setItem('valueTrashDay', trashDay); //salva na variável local o valor do select
    
    var indexTrashDay = trashDay.substr(-1); //captura o último caractere do valor do select
    if (trashDay != ""){
        for (var i = 1; i <= 7; i++ ){
            if (i == indexTrashDay) { //entra no if se o valor do i for igual ao último caractere do valor do select
                var tempTrashDay = eval('day'+ i); //identifica e atribui o dia do lixo
                for (var j = 1; j <= 7; j++){
                    if (tempTrashDay == document.getElementById('day' + j).innerHTML){ //entra no if se o valor do dia do lixo for igual ao elemento 
                        organizeDiet();
                        document.getElementById('carb' + j).innerHTML = "LIVRE";
                        document.getElementById('kcal' + j).innerHTML = "LIVRE";
                        document.getElementById('prot' + j).innerHTML = "LIVRE";
                        document.getElementById('fat' + j).innerHTML = "LIVRE";
                    }
                }
            }   
        }  
    } else {
        organizeDiet();
    }


    event.preventDefault();
}

