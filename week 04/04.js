function cariModus(arr) {
    
    // ARRAY DIJADIKAN OBJEK
    var i;
    var data = {};
    for(i = 0; i < arr.length; i++){
        if(!data[arr[i]]){
            data[arr[i]] = [];
        } else {
            data[arr[i]].push(arr[i]);
        }
    }

    // SORTING JUMLAH LENGTH MASING2 OBJEK
    var sortNumData = Object.keys(data);
    var calcNumData = []
    for(i = 0; i < sortNumData.length; i++){
        calcNumData.push(data[sortNumData[i]]);
    }

    // HITUNG LENGTH TERBANYAK
    var tempA = 0;
    var tempB;
    for(i = 0; i < calcNumData.length; i++){
        if(calcNumData[i].length > tempA){
            tempB = calcNumData[i].length;
        } else{
            tempB = tempA;
        }
        tempA = tempB;
    }

    // MENCARI INDEK TERBANYAK
    var indexData = [];
    for(i = 0; i < calcNumData.length; i++){
        if(calcNumData[i].length == tempB){
            indexData.push(i);
        }
    }

    // TAMPILKAN HASIL
    if(arr.length - 1 == tempB){
        return -1;
    } else if(tempB == 0){
        return -1;
    }
    return(calcNumData[indexData[0]][0]);
}

// // TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
