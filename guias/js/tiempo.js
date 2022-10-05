const array = [5, 3, 1, 4, 2];

function bubblesort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];

        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

let temp = 0;

function coctelsort(array) {
  for (let j = 0; j < array.length / 2; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
    for (let i = array.length - 1; i > 0; i--) {
      if (array[i - 1] > array[i]) {
        temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
      }
    }
    console.log(array);
  }
  return array;
}

function insertionsort(num) {
  let resultado = [];

  resultado[0] = num[0];

  for (let i = 1; i < num.length; i++) {
    let posicion = resultado.length;
    let j = 0;
    let continuar = true;

    while (continuar && j < resultado.length) {
      if (resultado[j] > num[i]) {
        posicion = j;
        continuar = false;
      }

      j++;
    }

    for (let j = resultado.length - 1; j >= posicion; j--) {
      resultado[j + 1] = resultado[j];
    }

    resultado[posicion] = num[i];
  }

  return resultado;
}

let now = new Date();

let start = now.getSeconds() * 1000 + now.getMilliseconds();

console.log(bubblesort(array));

now = new Date();
let end = now.getSeconds() * 1000 + now.getMilliseconds();
let elapsed = end - start;

console.log(`Algoritmo bubblesort ha tardado ${elapsed} milisegundos`);

console.log(array);

start = now.getSeconds() * 1000 + now.getMilliseconds();

coctelsort(array);
console.log(array);

now = new Date();
end = now.getSeconds() * 1000 + now.getMilliseconds();
elapsed = end - start;

console.log(`Algoritmo coctelsort ha tardado ${elapsed} milisegundos`);

start = now.getSeconds() * 1000 + now.getMilliseconds();

console.log(coctelsort(array));

now = new Date();
end = now.getSeconds() * 1000 + now.getMilliseconds();
elapsed = end - start;

console.log(`Algoritmo insertionsort ha tardado ${elapsed} milisegundos`);
