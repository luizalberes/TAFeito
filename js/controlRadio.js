function controlRadio(control) {

    // Botões das opções
    let rbRunLimited = document.getElementById("rbRunLimited"); //com medidas
    let rbRunNoLimited = document.getElementById("rbRunNoLimited"); //sem medidas
    
    // Dados da corrida
    let runTime = document.getElementById("runTime"); //tempo da corrida
    let runDistance = document.getElementById("runDistance"); //distância da corrida

    // controle dos botões
    if (control == 0){

        rbRunLimited.checked = true;
        rbRunNoLimited.checked = false;

        runTime.disabled = false;
        runDistance.disabled = false;

    } else {

        rbRunNoLimited.checked = true;
        rbRunLimited.checked = false;

        runTime.disabled = true;
        runDistance.disabled = true;
    }

    deleteRun();

    localStorage.setItem("valueControl", control);

    event.preventDefault();

}

