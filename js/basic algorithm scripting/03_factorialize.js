/* Freecodecamp Basic Algorithm Scripting #3
- Returns the factorial of the provided integer. */

function factorialize(num) {
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

factorialize(10);
  // 1 * 2 * 3 * 4 * 5
  // 120