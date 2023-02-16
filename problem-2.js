// problem-2
// A function to input a string & finding the length of string is even or odd 
function evenOdd(str) {
    if(typeof str != 'string'){
        return "Provide a valid Input"
    }
    // checking the length of the string is even or odd
    if (str.length % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log(evenOdd("anamul"));