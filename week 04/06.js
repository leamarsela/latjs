function digitPerkalianMinimum(angka) {

    var i;
    var num = [];
    for(i = 0; i <= angka; i++){
        if(angka % i == 0){
            num.push(i);
        }
    }

    console.log(num);

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2