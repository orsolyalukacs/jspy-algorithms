/* Basic Algorithm Scripting #8
- Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */

function truncateString(str, num) {
    if (str.length > num) {
        let strSliced = str.slice(0, (num)) + '...'
        return strSliced
    }
    else {
        return str
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); // A-tisket...
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // A-tisket a-tasket A green and yellow basket
