function tentukanDeretAritmatika(arr) {
    var i;
    var firstDiff = arr[1] - arr[0];
    var diff = [];
    for(i = 0; i < arr.length - 1; i++){
        diff.push(arr[1 + i] - arr[i]);
    }

    var found = diff.find(function(el){
        return el > firstDiff;
    });

    if (!found){
        return true;
    }
    return false;
    
  }

  

  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false