function tentukanDeretGeometri(arr) {
    var i;
    var diff = [];
    for(i = arr.length-1; i >= 1; i--){
        diff.push(arr[i]/arr[i-1]);
    }

    for(i = diff.length-2; i >= 1; i--){
        if(diff[i] !== diff[diff.length-1]){
            return false;
        }else{
            return true;
        }
    }

    // -------cara alternatif--------
    // var found = diff.find(function(el){
    //     return el < diff[diff.length-1];
    // })

    // if(!found){
    //     return true;
    // }
    // return false;


}
  
  // TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false