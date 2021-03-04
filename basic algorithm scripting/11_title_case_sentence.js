/* Basic Algorithm Scripting #11
- Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
*/

function titleCase(str) {
    let split = str.split(' ')
    let capitalized = split.map(el => (el.charAt(0).toUpperCase() + el.slice(1)))
    let capitalLower = capitalized.map(el => el.slice(0, 1) + el.substr(1, el.length).toLowerCase())

    return capitalLower.join(' ')
}

titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot" 
titleCase("sHoRt AnD sToUt"); // "Short and Stout"
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // "Here Is My Handle Here Is My Spout"