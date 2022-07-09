var initialDay = "";

var day1 = "Domingo";
var day2 = "Segunda";
var day3 = "Terça";
var day4 = "Quarta";
var day5 = "Quinta";
var day6 = "Sexta";
var day7 = "Sábado";

function orderDays(initialDay) {

    console.log("entrou order days");

    var trashDay = localStorage.getItem('valueTrashDay');
    console.log(trashDay)
    var i = 1; 
    while (true) {
        if (i == initialDay.substr(-1)){
            for (var j = 1; j <= 7; j++ ) {
                document.getElementById('day'+ j).innerHTML = eval('day'+ i);
                if (i == 7){
                    i = 0;
                }
                i++;
            }          
            break;
        }
        i++;
    }

    organizeDiet();
    getSelectTrashDay();


    event.preventDefault();

    console.log(initialDay);
}

