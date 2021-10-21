/* Basic Algorithm Scripting Freecodecamp #15
Returns true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
*/

function mutation(arr) {
    let string1 = arr[0].toLowerCase().split('')
    let string2 = arr[1].toLowerCase().split('')
    let checkArray = []

    string2.forEach(element => {
        checkArray.push(string1.includes(element))
    })

    if (checkArray.includes(false)) {
        console.log(false)
        return false;
    } else {
        console.log(true)
        return true;
    }
}

mutation(["hello", "hey"]); // false
mutation(["hello", "Hello"]); // true
mutation(["Mary", "Aarmy"]); // true