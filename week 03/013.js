function targetTerdekat(arr) {

    var i;
    var indexO = arr.indexOf('o')

    var calc = []
    for(i = 0; i < arr.length; i++){
        if(arr[i] == 'x'){
            calc.push(Math.abs(i - indexO));
        }
    }

    calc.sort(function(a,b){
        return a-b;
    });

    if(!calc[0]){
        return 0;
    }
    return calc[0];
    
}
  
//   TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2