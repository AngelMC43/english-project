const numeros = [5, 9, 10, 1, 3, 5, 8, 10];

console.log(numeros.sort());

console.log(numeros.sort(function(a,b) {
    return a-b;
}));
