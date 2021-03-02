// Freecodecamp Basic Algorithm Scripting #4
function findLongestWordLength(str) {
    let arrayFromWords = str.split(" ")
    // let wordsLength = arrayFromWords.forEach(element => console.log(element.length))
    // let wordMax = Math.max(wordsLength)
  
    let maxLength = Math.max(...(arrayFromWords.map(el => el.length)));
    
    return maxLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
