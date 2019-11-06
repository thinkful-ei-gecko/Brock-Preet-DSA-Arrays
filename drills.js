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
function maxSum(arr) {
  let currentSum = 0; //O(1)
  let maxSum = 0; //O(1)
  for (let i = 0; i < arr.length; i++) {
    //O(n)
    currentSum += arr[i];
    if (maxSum < currentSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}
// console.log(maxSum([4, 6, -3, 5, -2, 1]));
//O(n) - linear time complexity

//Q8: Merge arrays
function mergeArray(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
}
// console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
//O(n log n) - sorting

//Q9: Remove characters
function removeChar(str) {
  let newStr = str.replace(/[aeiou]/gi, '');
  return newStr;
}
let originalStr = 'this is a string to remove vowels from';
removeChar(originalStr);
// O(n)

//Q10: Products
function product(arr) {
  let result = [];

  let productSoFar = 1;

  for (let i = 0; i < arr.length; i++) {
    result[i] = productSoFar;
    productSoFar *= arr[i];
  }
  // console.log(productSoFar);

  productSoFar = 1;

  for (let j = arr.length - 1; j >= 0; j--) {
    result[j] *= productSoFar;
    productSoFar *= arr[j];
  }

  return result;
}
var array = [1, 3, 9, 4];
product(array);
// O(n) 


//Q11: 2D array

function zeroArray(arr){
  let column = [];
  let row = [];

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; i < arr.length; i++){
      if(arr[i][j] === 0){
        column[j] = true;
        row[i] = true;
      }
    }
  }
  for(let i = 0; i < arr.length; i++){
    let rows = arr[i];
    for (let j = 0; j < rows.length; j++){
      //let columns = rows[j];
      if(column[j] || row[i]){
        rows[j] = 0;
      }
    }
  }
  // for(let i = 0; i < row.length; i++){
  //   for(let j = 0; j < arr[row].length; j++){
  //     arr[row[i][j]] = 0;
  //   }
  // }

  // for(let i = 0; i < column.length; i++){
  //   for(let j = 0; j < arr[column].length; j++){
  //     arr[j][column[i]] = 0;
  //   }
  // }
  return arr;
}
console.log(zeroArray([[[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]]));


//Q12: String Rotation

function stringRotation(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  let string = str1 + str1;
  return string.includes(str2);
}
console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('amazon', 'azonam'));
