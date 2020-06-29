function groupAnimals(animals) {
    
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var i;
    var j;
    var sum = [];
    for(i = 0; i < alphabet.length; i++){

        var group = [];
        var initial = alphabet[i];
        for(j = 0; j < animals.length; j++){
            if(initial == animals[j][0]){
                group.push(animals[j]);
            }
        }
        sum.push(group);
    }

    var sum2 = [];

    for(i = 0; i < sum.length; i++){
        if(sum[i].length !== 0){
            sum2.push(sum[i]);
        }
    }

    return sum2;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
// console.log(groupAnimals([3,2,1,8,9,7,4]));