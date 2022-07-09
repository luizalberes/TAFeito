function getSelectEstrategy() {

    var estrategy = document.querySelector("#estrategy").value;

    localStorage.setItem('valueEstrategy', estrategy);

    console.log("entrou Estratégia");
    console.log(estrategy);      

    event.preventDefault();
}

