/* Freecodecamp Basic Algorithm Scripting #7
- Repeats a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
  let strConcat = [];

  for (let i = 0; i < num; i++) {
    strConcat.push(str);
  }

  strConcat = strConcat.join('');
  return strConcat;
}

repeatStringNumTimes("abc", 3);
  // abcabcabc
