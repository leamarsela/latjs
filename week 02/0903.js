function processSentence(inname, inage, inaddress, inhobby){
    return 'Nama saya ' + inname + ', ' + 'umur saya ' + inage + ' tahun,' +' alamat saya di ' + inaddress + ', ' + 'dan saya punya hobby yaitu ' + inhobby + '.';  
}

var name = 'Agus';
var age = 30;
var address = 'Jln. Malioboro, Yogyakarta';
var hoby = 'gaming';

var fullSentence = processSentence(name, age, address, hoby);
console.log(fullSentence);