let numeros = [];

// crear array de 10000 elementos aleatorios
for (let i = 0; i < 100000; i++) {
    numeros[i] = Math.floor(Math.random() * 100000);
}

function bubblesort(array) {

    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temporal = array[i + 1];

                array[i + 1] = array[i];
                array[i] = temporal;
            }
        }
    }

    return array;
}

function cocktailsort(array) {

    for (let j = 0; j < array.length / 2; j++) {
        // de izquierda a derecha
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temporal = array[i + 1];

                array[i + 1] = array[i];
                array[i] = temporal;
            }
        }

        // derecha a izquierda (i = 5 hasta i = 0)
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] < array[i - 1]) {
                let temporal = array[i - 1];

                array[i - 1] = array[i];
                array[i] = temporal;
            }
        }
    }

    return array;
}

function insertionsort(num) {
    let resultado = [];

    resultado[0] = num[0];

    for (let i = 1; i < num.length; i++) {  // i = 3, resultado = [5, 8, 12]
        let posicion = resultado.length;    // posicion = 3
        let j = 0;
        let continuar = true;

        while (continuar && j < resultado.length) { // j = 3; j < 3; ++
            if (resultado[j] > num[i]) {   // resultado[2] = 12 > num[3] = 3; si
                posicion = j;
                continuar = false;            // posicion = 2
            }

            j++;
        }

        for (let j = resultado.length - 1; j >= posicion; j--) {  // j = 3 - 1 = 2; j >= 2
            resultado[j + 1] = resultado[j]; // resultado[2+1] = resultado[2], resultado = [5, 8, 12, 12]
        }

        resultado[posicion] = num[i]; // resultado[2] = num[3] = 3 -> resultado = [5, 8, 3, 12]
    }

    return resultado;
}

let now = new Date();
let start = now.getSeconds() * 1000 + now.getMilliseconds();

bubblesort(numeros);

now = new Date();
let end = now.getSeconds() * 1000 + now.getMilliseconds();
let elapsed = end - start;

console.log(`Algoritmo bubblesort ha tardado ${elapsed} milisegundos`);

now = new Date();
start = now.getSeconds() * 1000 + now.getMilliseconds();
cocktailsort(numeros);
now = new Date();
end = now.getSeconds() * 1000 + now.getMilliseconds();
elapsed = end - start;

console.log(`Algoritmo cocktailsort ha tardado ${elapsed} milisegundos`);

now = new Date();
start = now.getSeconds() * 1000 + now.getMilliseconds();
insertionsort(numeros);
now = new Date();
end = now.getSeconds() * 1000 + now.getMilliseconds();
elapsed = end - start;

console.log(`Algoritmo insertionsort ha tardado ${elapsed} milisegundos`);