//7. Factorial
//Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by 
//multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

const factorial = function(number) {
    if (number== 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }

}

number = 6
console.log(factorial(number));