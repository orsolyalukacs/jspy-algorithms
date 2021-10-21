/* Freecodecamp Basic Algorithm Scripting #4
- Returns the length of the longest word in the provided sentence. */

function findLongestWordLength(str) {
  let arrayFromWords = str.split(" ");
  return Math.max(...(arrayFromWords.map(el => el.length)));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
