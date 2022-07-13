function transformTime(second, minute) {

    //arredonda o segundo para o número que o faz completar
    // ex: 59.95 vira 60

    second = Math.trunc(Math.ceil(second.toFixed(2)));

    if (second < 10){
        second = "0" + second;
    } else if (second == 60) {
        second = "00";
        minute++;
    }

    if (minute < 10){
        minute = "0" + minute;
    }

    return [second, minute];
}

