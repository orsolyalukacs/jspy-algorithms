/* Freecodecamp Intermediate Algorithm Scripting #12
- Given a positive integer num, returns the sum of all odd Fibonacci numbers that are less than or equal to num.
 */
function sumFibs(num) {
    let a = 1;
    let b = 1;
    let sum = a;

    while (b <= num) {
        if (b % 2 !== 0) { //check if b is an odd number
            sum += b;
        }
        [a, b] = [b, a + b]
        // let temp = b;
        // b += a;
        // a = temp;
    }

    return sum;
}

console.log(sumFibs(4));
