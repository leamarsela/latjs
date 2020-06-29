function xo(str){
    var calcX = 0;
    var calcO = 0;

    for (i = 0; i <= str.length; i++){
        if(str[i] == 'o'){
            calcO ++;
        } else if(str[i] == 'x'){
            calcX ++;
        }
    }

    if(calcX == calcO){   
        return 'true';
    }

    return 'false';
}


console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true