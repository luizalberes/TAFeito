function transformTime(minute, second) {
    console.log("entrou");
    if (second < 10){
        second = "0" + second;
    } else if (second == 60) {
        second = "0" + second;
        minute++;
    }

    if (minute < 10){
        minute = "0" + minute;
    }

    return [second, minute];
}

