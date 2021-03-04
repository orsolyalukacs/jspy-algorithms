/* Basic Algorithm Scripting #12
- Given two arrays and an index, copies each element of the first array into the second array, in order. Begin inserting elements at index n of the second array.
*/

function frankenSplice(arr1, arr2, n) {
    // Solution 1
    let newArr1 = arr2.slice(0, n);
    let newArr2 = arr2.slice(n, arr2.length);

    newArr1.push(...arr1);
    newArr1.push(...newArr2);

    return newArr1;
}

function frankenSplice2(arr1, arr2, n) {
    // Solution 2
    let newArray = [];
    newArray.push(...arr2)
    newArray.splice(n, 0, ...arr1)

    return newArray;
}


frankenSplice([1, 2, 3], [4, 5, 6], 1); // [4, 1, 2, 3, 5, 6]
frankenSplice2([1, 2, 3], [4, 5, 6], 1); // [4, 1, 2, 3, 5, 6]