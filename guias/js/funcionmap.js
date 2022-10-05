let arr = [4, 9, 16, 25];

// aplicar raiz cuadrada a cada elemento del array usando la funcion map
console.log(arr);
console.log(arr.map(Math.sqrt));

// implementacion para aplicar raiz cuadrada a los elementos del array
function square(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Math.sqrt(a[i]);
    }

    return a;
}

console.log(square(arr));

// rapida implementacion de la funcion map
function myMap(a, call) {
    for (let i = 0; i < a.length; i++) {
        a[i] = call(a[i]);
    }

    return a;
}

console.log(myMap(arr, Math.sqrt));

// incluir letra `a` a cada elemento del array
let letras = ["a", "b", "c", "d"];
console.log(letras.map(function(elem) {
    return elem + "a";
}));

// Incluir simbolo euro a cada numero del array
let numeros = [15, 20, 35, 10];
console.log(numeros.map(function(elem) {
    return elem + ".00 €";
}));

// Multiplica cada elemento del array por si mismo
console.log(numeros.map(elem => elem * elem));

// Filtrar los numeros pares
console.log(numeros.map(function (e) {
    if ((e % 2) == 0) {
        return e;
    } else {
        return 0;
    }
}));