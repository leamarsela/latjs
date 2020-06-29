function urutkanAbjad(str) {

    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // mencari index dari str
    var i;
    var j;
    var index = [];
    for(i = 0; i < str.length; i++){
        for(j = 0; j < alphabet.length; j++){
            if(str[i] == alphabet[j]){
                index.push([j]);
            }
        }
    }

    // mengurutkan index
    index.sort((a,b) => a-b);

    // mencari index huruf
    var alphaIndex = [];
    for(i = 0; i < index.length; i++){
        for(j = 0; j < alphabet.length; j++){
            if(index[i] == j){
                alphaIndex.push(alphabet[j]);
            }
        }
    }
    
    return alphaIndex.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'



