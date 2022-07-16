function calcAverageArray(array) {

    var average = 0;

    for (var i = 0; i < array.length; i++) {
        average = average + parseFloat(array[i]);
    }

    average = (average / array.length).toFixed(2);

    return average;
}

