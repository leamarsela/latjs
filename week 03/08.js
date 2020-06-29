function pasanganTerbesar(num){
    var stringnum = num.toString();
    var i;
    var pairnum = [];
    for (i = 0; i <= stringnum.length - 2; i++ ){
        pairnum.push((stringnum.slice(i, i+2)).toString());
        pairnum.sort(function(a,b){ return b-a});
    }
    return pairnum[0];
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99