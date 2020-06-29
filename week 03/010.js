function perkalianUnik(arr){
    var tempSum = 1
    var i;
    for (i = 0; i < arr.length; i++){
        tempSum *= arr[i];
    }

    var newdata = []
    for (i = 0; i < arr.length; i++){
        newdata.push(tempSum/arr[i]);
    }

    return newdata;
    
}

console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]



