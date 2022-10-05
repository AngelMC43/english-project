/*
 *
 */

const numeros = [2, 5, 12, 21, 13, 8];

function promedio(array) {
    let suma = 0;

    // suma + array[5] i = array.length = 6
    // suma + array[4] i = 5
    // suma + array[3] i = 4
    // suma + array[2] i = 3
    // suma + array[1] i = 2
    // suma + array[0] i = 1
    for (let i = array.length - 1; i >= 0; i--) {
        suma += array[i];
    }

    return suma / array.length;
}

console.log(promedio(numeros));