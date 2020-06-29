function palindrome(kata){
    var newKata = '';
    for(i = kata.length - 1; i >= 0; i--){
        newKata += kata[i];
    }

    if (newKata == kata){
        return 'true';
    }

    return 'false';

}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false