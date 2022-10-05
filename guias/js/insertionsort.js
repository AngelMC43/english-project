let numeros = [8, 5, 12, 3]

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

console.log(insertionsort(numeros));