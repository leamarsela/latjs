function dataHandling(arg){

    var data = '';
    for (i = 0; i < arg.length; i++){
        data += 'Nomor ID: ' + arg[i][0] + '\n'
                + 'Nama Lengkap: ' + arg[i][1] + '\n'
                + 'TTL: ' + arg[i][2] + ' ' + arg[i][3] + '\n'
                + 'Hobi: ' + arg[i][4] + '\n\n';
    }

    return data;
}


var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input));