var age = "";
var weight = "";
var height = "";
var metabolism = "";
var estrategy = "";

function calcMetabolism() {

    let btGetValues = document.getElementById("btGetValues");

    sessionStorage.setItem('userOn', '1');

    age = document.getElementById('age').value;
    weight = document.getElementById('weight').value;
    height = document.getElementById('height').value;
    estrategy = document.getElementById('estrategy').value;
    sex = document.getElementById('sex').value;
    kcal = Math.round(1.3*(66.47+(13.75*weight)+(5*height)-(6.8*age)));
    
    if ((age && weight && height && estrategy && sex) != "") {
        metabolism = "Seu metabolismo basal é de aproximadamente " + kcal + " kcal";
        btGetValues.disabled = false;
    } else {
        metabolism = "Insira os dados corretamente!";
    }
    document.getElementById('metabolism').innerHTML = metabolism;

    localStorage.setItem('valueAge', age);
    localStorage.setItem('valueWeight', weight);
    localStorage.setItem('valueHeight', height);
    localStorage.setItem('valueKcal', kcal);
    localStorage.setItem('valueSex', sex);

    event.preventDefault();
    console.log("entrou cálculo");

    console.log("saiu cálculo");
}

