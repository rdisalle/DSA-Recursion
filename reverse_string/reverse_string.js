//3. Reverse String
//Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

const reverseString = function(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
};

let str = 'Hello'

console.log(reverseString(str));
