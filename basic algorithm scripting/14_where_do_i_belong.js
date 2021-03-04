/* Basic Algorithm Scripting #14
- Returns the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
*/

function getIndexToIns(arr, num) {
    arr.push(num)
    arr.sort(function (a, b) { return a - b }); // compareFunction
    return arr.indexOf(num);
}

getIndexToIns([40, 60], 50); // 1
getIndexToIns([1, 2, 3, 4], 1.5); // 1
getIndexToIns([3, 10, 5], 3) // 0
getIndexToIns([2, 20, 10], 19) // 2