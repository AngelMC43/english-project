const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

console.log(ages);
console.log(result);

// filtrar solo los numeros menores que 10
const numeros = [3, 5, 10, 12, 15, 6, 8, 14, 15, 16];

console.log(numeros.filter(e => e < 10));

// filtrar solo numeros pares
console.log(numeros.filter(e => e % 2 == 0));