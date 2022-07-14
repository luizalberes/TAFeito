function transformArray(oldArray) {

    var newArray = [];
    var auxVar = "";

    for (var i = 0; i < oldArray.length; i++) {
        if (oldArray[i] != ","){
            auxVar = auxVar + oldArray[i];
            if ((oldArray.length - i) == 1) {
                newArray.push(auxVar);
            } 
        } else {
            newArray.push(auxVar);
            auxVar = "";      
        }
    }

    return newArray;
}

