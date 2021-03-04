/* Basic Algorithm Scripting #10
- Check if a value is classified as a boolean primitive. Return true or false.
*/

function booWho(bool) {
    return bool === Boolean || bool === true || bool === false;
}