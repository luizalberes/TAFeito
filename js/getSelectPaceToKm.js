function getSelectPaceToKm() {

    var selectPaceToKm = document.querySelector("#selectPaceToKm").value;

    localStorage.setItem('valuePaceToKm', selectPaceToKm);
    
    if (selectPaceToKm == "pace"){
        document.getElementById('labelPaceToKm').innerHTML = "PACE"
        document.getElementById ("paceToKm").type = "time";
        document.getElementById ("paceToKm").value = "05:00";   
    } else {
        document.getElementById('labelPaceToKm').innerHTML = "KM/H"
        document.getElementById ("paceToKm").type = "number";
        document.getElementById ("paceToKm").value = "12";      
    }
    event.preventDefault();
}

