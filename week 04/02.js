function fpb(angka1, angka2) {
    
    var sum1 = [];
    
    var i;
    for(i = 0; i <= angka1; i++){
        var tempsum1 = angka1 / i;
        if(tempsum1 % 1 == 0){
            sum1.push(tempsum1);
        }
    }

    var sum2 = [];
    for(i = 0; i <= angka2; i++){
        var tempsum2 = angka2 / i;
        if(tempsum2 % 1 == 0){
            sum2.push(tempsum2);
        }
    }

    var final = []
    sum1.forEach(function(e1){
        sum2.forEach(function(e2){
            if(e1 === e2){
                final.push(e1);
            }
        });
    });

    return final[0];


}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1