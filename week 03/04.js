var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling(arg){
    arg.splice(1, 1, 'Roman Alamsyah Elsharawy');

    arg.splice(2, 1, 'Provinsi Bandar Lampung');
    
    arg.splice(-1, 1, 'Pria', 'SMA Internasional Metro');
    console.log(arg);


    var date = arg[3];
    var month = (date.split('/'))[1];
    
    switch (month){
        case '01':
            namabulan = 'Januari';
            break;
        case '02':
            namabulan = 'Februari';
            break;
        case '03':
            namabulan = 'Maret';
            break;
        case '04':
            namabulan = 'April';
            break;
        case '05':
            namabulan = 'Mei';
            break;
        case '06':
            namabulan = 'Juni';
            break;
        case '07':
            namabulan = 'Juli';
            break;
        case '08':
            namabulan = 'Agustus';
            break;
        case '09':
            namabulan = 'September';
            break;
        case '10':
            namabulan = 'Oktober';
            break;
        case '11':
            namabulan = 'November';
            break;
        case '12':
            namabulan = 'Desember';
            break;
    }

    console.log(namabulan);

    var newdate = (arg[3].split('/'));
    newdate.sort(function(a,b){
        return b-a;
    });
    console.log(newdate);

    var newdate2 = date.split('/');
    console.log(newdate2.join('-'));
    
    var newname = arg[1];
    console.log(newname.slice(0, 15));
    
}

console.log(dataHandling(input));


// https://jshint.com/

