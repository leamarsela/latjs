var hari = 21;
var bulan = 1;
var tahun = 1945;
switch (bulan){
    case 1:
        namabulan = 'Januari';
        break;
    case 2:
        namabulan = 'Februari';
        break;
    case 3:
        namabulan = 'Maret';
        break;
    case 4:
        namabulan = 'April';
        break;
    case 5:
        namabulan = 'Mei';
        break;
    case 6:
        namabulan = 'Juni';
        break;
    case 7:
        namabulan = 'Juli';
        break;
    case 8:
        namabulan = 'Agustus';
        break;
    case 9:
        namabulan = 'September';
        break;
    case 10:
        namabulan = 'Oktober';
        break;
    case 11:
        namabulan = 'November';
        break;
    case 12:
        namabulan = 'Desember';
}

var tanggal = hari + ' ' + namabulan + ' ' + tahun;

console.log(tanggal);