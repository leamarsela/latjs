for (i = 1; i <= 100; i++){
    console.log('counter sekarang = ' + i)
    if(i % 2 == 0){
        console.log('genap');
    } else {
        console.log('ganjil');
    }
}

for (i = 1; i <= 100; i = i + 2){
    console.log('counter sekarang = ' + i);
    if(i % 3 == 0){
        console.log(i + ' KELIPATAN 3');
    }
}

for (i = 1; i <= 100; i = i + 5){
    console.log('counter sekarang = ' + i);
    if(i % 6 == 0){
        console.log(i + ' KELIPATAN 6');
    }
}

for (i = 1; i <= 100; i = i + 9){
    console.log('counter sekarang = ' + i);
    if (i % 10 == 0){
        console.log(i + ' KELIPATAN 10');
    }
}