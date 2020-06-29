function balikString(txt){
    var hasil = "";
    for(i = txt.length - 1; i >= 0; i--){
        hasil += txt[i];
    }
    return hasil;
}

var cetak = balikString('Hello World!');
console.log(cetak);