function checkAB(num) {

    var huruf = [];
    var i;
    for(i = 0; i < num.length; i++){
        if(num[i] == 'a' || num[i] == 'b'){
            huruf.push(i);
        }
    }

    console.log(huruf);

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false