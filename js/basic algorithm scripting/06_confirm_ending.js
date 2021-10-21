/* Freecodecamp Basic Algorithm Scripting #6
- Checks if a string (first argument, str) ends with the given target string (second argument, target)
    without using .endsWith() ES2015 method  */

function confirmEnding(str, target) {
    return str.substr(str.length - target.length, str.length - 1) === target;
}

confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on");
