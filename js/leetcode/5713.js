/*
5713. Number of Different Integers in a String
You are given a string word that consists of digits and lowercase English letters.

You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".

Return the number of different integers after performing the replacement operations on word.

Two integers are considered different if their decimal representations without any leading zeros are different.
*/

var numDifferentIntegers = function (word) {
    var numbers = word.match(/\d+/g)
    function onlyUnique(value, index, self) { return self.indexOf(value) === index; }

    var repl = function (str) {
        return Number(str)
    }

    if (numbers) {
        numbers = numbers.map(repl)
        var count = numbers.filter(onlyUnique).length
        return count;
    }
    else {
        return 0;
    }

};

numDifferentIntegers("a123bc34d8ef34");  // 3
numDifferentIntegers("leet1234code234"); // 2
numDifferentIntegers("a1b01c001"); // 1
numDifferentIntegers("gi851a851q8510v"); // 2
