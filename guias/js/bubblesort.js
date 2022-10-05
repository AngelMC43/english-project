const numeros = [1, 7, 3, 8, 12, 2];

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

console.log(numeros);
console.log(bubblesort(numeros));