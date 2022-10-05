const numbers = [175, 50, 25];

console.log(numbers.reduce(myFunc));

function myFunc(total, num) {
    return total - num;
}

const otrosNumeros = [1.5, 2.49, 3.49, 2.4];

console.log(otrosNumeros.reduce(getSum));

function getSum(total, num) {
    return total + num;
}

// Factorial
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.reduce(function(total, e) {
    return total * e;
}));
console.log(arr.reduce((total, num) => total * num));