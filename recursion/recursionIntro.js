//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function loop(n) {
    while(n < 0) {
        console.log(n);
        n--;
    }
};

//2. Next, try looping just like above except using recursion
function recursiveLoop(n) {
    if(n === 0) return;
    console.log(n);
    recursiveLoop(n-1);
};

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
    let result = base;
    while(expo > 1) {
        result *= base;
        expo--;
    }
    return result;
};

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base, expo) {
    if(expo === 1) {
        return base;
    } 
    return base * recursiveExponent(base, --expo);
};

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
    if(arr.length === 1) {
        return arr[0] * num;
    }
    return [arr[0] * num].concat(recursiveMultiplier(arr.slice(1), num));
};

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr) {
    if(arr.length === 0) return;
    let el = arr.pop();
    recursiveReverse(arr);
    arr.unshift(el);
    return arr;
};

function recursiveReverse(arr) {
    if(arr.length === 1) {
        return arr;
    }
    return [arr.pop()].concat(recursiveReverse(arr));
};