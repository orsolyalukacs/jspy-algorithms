/* Basic Algorithm Scripting #13
- Removes all falsy values from an array. (Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.)
*/

function bouncer(arr) {
    return arr.filter(function (value) {
        if (value) {
            return value
        }
    });
}

bouncer([7, "ate", "", false, 9]); // [7, "ate", 9]
bouncer([false, null, 0, NaN, undefined, ""]) // []