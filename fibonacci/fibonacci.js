//6. Fibonacci
//Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which 
//each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks 
//as follows: 1, 1, 2, 3, 5, 8, 13.

const fibonacci = function(number) {
    if (number <= 2) {
        return 1;
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    } 
}

n = 7;
console.log(fibString(n));
