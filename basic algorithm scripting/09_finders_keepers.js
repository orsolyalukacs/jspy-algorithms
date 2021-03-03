/* Basic Algorithm Scripting #8
- Creates a function that looks through an array arr and returns the first element in it that passes a 'truth test'. If no element passes the test, returns undefined.
*/

function findElement(arr, func) {
    return arr.find(element => func(element));
}

findElement([1, 2, 3, 4], num => num % 2 === 0) //2
findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; })) // 8
findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; }) // undefined