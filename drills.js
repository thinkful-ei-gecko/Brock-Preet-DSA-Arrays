'use strict';


//Q5: URLify a string
function urlify(str) {
  let newStr = str.split(' ').join('%20');
  //console.log(newStr);
}
urlify('www.thinkful.com         /tauh ida parv een');
//time complexity - O(1)

//Q6: Filtering an array
// function bFilter(num) {
//   var filtered = [];
//   for (let i = 0; i < this.length; i++) {
//     if (num(this[i], i, this)) filtered.push(this[i]);
//   }
// }
// bFilter([1,2,3,4,5,6,7,8]);
//time complexity - O(n)

//Q7: Max sum in the array
function maxSum(arr){
  let currentSum = 0; //O(1)
  let maxSum = 0; //O(1)
  for(let i = 0; i < arr.length; i++){ //O(n)
    currentSum += arr[i];
    if(maxSum < currentSum){
      maxSum = currentSum;
    }
  }
  return maxSum;
}
// console.log(maxSum([4, 6, -3, 5, -2, 1]));
//O(n) - linear time complexity

//Q8: Merge arrays
function mergeArray(arr1, arr2){
  let result = [...arr1, ...arr2];
  return result.sort((a,b) => a - b);
}
console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
//O(n log n) - sorting

//Q9: Remove characters