const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const age = document.querySelector("#age");

    const value = age.value;

    console.log(value);
});


