const numeros = [7, 1, 9, 6, 8 ,3, 14, 20, 5, 12]; // [1, 3, 6, 7, 8, 9]
const numeroABuscar = 20;

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

function binarysearch(array, b) {
    let posicion = 0;
    let encontrado = false;

    while (!encontrado) {
        let izquierda = [];
        let derecha = [];
        
        for(let i = 0; i < Math.floor(array.length / 2); i++) {
            izquierda[i] = array[i];
        }
        for (let i = Math.floor(array.length / 2); i < array.length; i++) {
            derecha[i - Math.floor(array.length / 2)] = array[i];
        }

        if (b < derecha[0]) { // busco en el array de la izquierda
            if (izquierda.length > 1) {
                array = izquierda;
            } else {
                if (b === izquierda[0]) {
                    encontrado = true;
                } else {
                    return;
                }
            }
        } else { // busco en el array de la derecha
            if (derecha.length > 1) {
                array = derecha;
                posicion += izquierda.length;
            } else {
                if (b === derecha[0]) {
                    posicion += 1;
                    encontrado = true;
                } else {
                    return;
                }
            }
        }
    }

    return posicion;
}

let ordenado = bubblesort(numeros);
console.log(numeros);
console.log(binarysearch(ordenado, numeroABuscar));