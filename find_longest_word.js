// Freecodecamp Basic Algorithm Scripting #4

function findLongestWordLength(str) {
  let arrayFromWords = str.split(" ");
  return Math.max(...(arrayFromWords.map(el => el.length)));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
