/*
 * 1. introducir un dia
 * 2. introducir un mes
 * 3. introducie un year
 * 4. es fecha valida?
 * 
 * Si -> Imprimir dia/mes (nombre)/year
 * No -> mensaje de error y vuelve al paso 1
 */

let dia = 12; // paso 1
let mes = 2; // paso 2
let year = 2022; // paso 3

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

while (dia > 31 || mes > 12 || year < 1) {
    // No
    console.log("Error: fecha no valida");

    // Introducir otra fecha
}

// Si
console.log(`${dia}/${meses[mes]}/${year}`);
// mes = 1 = Enero = meses[0]
// mes = 2 = Febrero = meses[1]
// mes = 3 =  Marzo = meses[2]
// mes = 12 = Diciembre = meses[11]

