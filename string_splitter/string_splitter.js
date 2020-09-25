//5. String Splitter
//Write a recursive function that splits a string based on a separator (similar to String.prototype.split). 
//Don't use JS array's split function to solve this problem.

//Input: 02/20/2020
//Output: ["02", "20", "2020"]

const stringSplitter = function(str) {
    if (str === "") {
        return [];
    } else {
        return '"' + stringSplitter(str.substr(2)) + '",'
    }
}

let str = "02/20/2020"
console.log (stringSplitter(str));
