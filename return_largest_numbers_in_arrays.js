// Freecodecamp Basic Algorithm Scripting #5

function largestOfFour(arr) {
    var largestNum;
    var largestNumArray = [];
    for(let i = 0; i < arr.length; i++){
      largestNum = Math.max(...arr[i])
      largestNumArray.push(largestNum)
    }
    return largestNumArray;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

