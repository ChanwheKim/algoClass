/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

// For loop
function factorialForLoop(num) {
    let sum = 1;
    for(let i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
};

// Recursive
function factorialRecursive(num) {
    if(num < 0) {
        return -1;
    } else if(num === 1) {
        return 1;
    } else {
        return num * factorialRecursive(num - 1);
    }
};