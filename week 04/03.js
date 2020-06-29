function cariMedian(arr) {
   if(arr.length % 2 !== 0){
       var index = (arr.length - 1) / 2;
       
       return arr[index];
   } else {
       var indexEven = Math.ceil((arr.length + 1) / 2);
       var indexOdd = Math.floor((arr.length + 1) / 2);
       
       return (arr[indexEven - 1] + arr[indexOdd - 1]) / 2 ;
    }
}


// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5