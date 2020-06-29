function game(nama, peran){
    var pesan;
    var infoperan;
    var infonama;

    if (!peran){
        infoperan = 'Pilih peranmu untuk memulai game!';
    } else if(peran == 'Ksatria'){
        infoperan = 'kamu dapat menyerang dengan senajatamu!';
    } else if(peran == 'Tabib'){
        infoperan = 'kamu akan membantu temanmu yang terluka';
    } else if(peran == 'Penyihir'){
        infoperan = 'ciptakan keajaiban yang membantu kemenanganmu';
    }

    if(!peran){
        pesan = 'Halo ' + nama + ', ' + infoperan + '.';
    } else {
        pesan = 'Selamat datang di Dunia Proxytia, ' + nama + '.\n' + 'Halo ' + peran + ' ' + nama + ', ' + infoperan + '.';
    }

    if (!nama && !peran){
        pesan = 'Nama harus diisi!';
    }
    

    return pesan;
}


console.log(game());
console.log(game('Mikael'));
console.log(game('Mikael', 'Penyihir'));
console.log(game('Mikael', 'Tabib'));
console.log(game('Mikael', 'Ksatria'));