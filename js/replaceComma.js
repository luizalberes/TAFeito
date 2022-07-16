function replaceComma(array) {

    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].toString().replace(".",",");
    }

    console.log(array);

    return array;
}

