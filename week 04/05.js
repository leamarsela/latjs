function ubahHuruf(kata) {
    
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    var i;
    var j;
    var index = []
    for(i = 0; i < kata.length; i++){
        for(j = 0; j < alphabet.length; j++){
            if(kata[i] == alphabet[j]){
                index.push(j);
            }
        }
    }

    var newIndex = []
    for(i = 0; i < index.length; i++){
        newIndex.push(index[i] + 1);
    }

    var newKata = [];
    for(i = 0; i < newIndex.length; i++){
        if(newIndex[i] == 26){
            newKata.push(alphabet[0]);
        }
        newKata.push(alphabet[newIndex[i]]);
    }

    return newKata.join('');
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu