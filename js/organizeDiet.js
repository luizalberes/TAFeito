var initialDay = "";
var sunday = "Domingo";
var monday = "Segunda";
var tuesday = "Terça";
var wednesday = "Quarta";
var thursday = "Quinta";
var friday = "Sexta";
var saturday = "Sábado";

function organizeDiet() {

    var userOn = sessionStorage.getItem('userOn');

    if (!userOn) {
        window.location = "index.html"
    }

    var age = localStorage.getItem('valueAge');
    var weight = localStorage.getItem('valueWeight');
    var height = localStorage.getItem('valueHeight');
    var estrategy = localStorage.getItem('valueEstrategy');
    var sex = localStorage.getItem('valueSex');
    var kcal = Math.round(1.3*(66.47+(13.75*weight)+(5*height)-(6.8*age)));
    var proteines = 0;
    var fats = 0;

    console.log(sex);

    if (sex == "masculino"){
        sex = "Masculino";
        proteines = weight * 2;
        fats = weight * 1;
    } else {
        sex = "Feminino";
        proteines = weight * 1.6;
        fats = weight * 0.8;
    }

    var carboidrates = Math.round((kcal-(proteines*4)-(fats*9))/4); 

    if (estrategy == "bulking"){
        carboidrates = carboidrates + 125;
        kcal = kcal + 500;
    } else {
        carboidrates = carboidrates - 125;
        kcal = kcal - 500;
    }

    for (var i = 1; i <= 7; i++ ) {
        document.getElementById('carb' + i).innerHTML = carboidrates.toString().replace(".", ",") + "g";
        document.getElementById('kcal' + i).innerHTML = (((proteines + carboidrates) * 4) + (fats * 9)).toFixed(2).toString().replace(".", ",") + "kcal";
        document.getElementById('prot' + i).innerHTML = proteines.toString().replace(".", ",") + "g";
        document.getElementById('fat' + i).innerHTML = fats.toString().replace(".", ",") + "g";
    }

    document.getElementById('estrategy').innerHTML = "A estratégia escolhida foi o " + estrategy;

    document.getElementById('age').innerHTML = "Idade: " + age + " anos";
    document.getElementById('weight').innerHTML = "Peso: " + weight + " kg";
    document.getElementById('height').innerHTML = "Altura: " + height + " cm";
    document.getElementById('sex').innerHTML = "Sexo: " + sex;

}

