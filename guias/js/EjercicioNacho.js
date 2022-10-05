/*
 * Solicitar al usuario un nombre
 * Buscar el nombre en el listado de alumnos
 * Eliminar el nombre del listado de alumnos
 * Devolver el array sin el nombre encontrado
 */

const nombre = "Pedro";
const alumnos = ["Antonio", "Pedro", "Manuel", "Jose", "Laura", "Carolina"];
let encontrado = 0;
let index = 0;
let resultado = [];

for (let i = 0; i < alumnos.length; i++) {
    if (nombre !== alumnos[i]) {
        resultado[index] = alumnos[i];
        index++;
    }
}

console.log(resultado);

// resultado[0] = alumnos[0]; i = 0
// resultado[1] = alumnos[1]; i = 1
// resultado[2] = alumnos[2]; i = 2
// alumnos[3] -> Quitar       i = 3
// resultado[3] = alumnos[4]; i = 4
// resultado[4] = alumnos[5]; i = 5






