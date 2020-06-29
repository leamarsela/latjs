function angkaPalindrome(num){
    var status = true;

    var i = num;
    while(status){
        i++;
        
        if(i.toString().length == 1){
            return i;
            break;
        } else {
            var newnum = '';
            var j;
            for(j = i.toString().length - 1; j >= 0; j--){
                newnum += (i.toString())[j];
            }
            if(newnum == i.toString()){
                return i;
                break;
            }
        }
    }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
