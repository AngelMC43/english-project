function suma(uno, otro) {
    uno = 7;

    console.log(`valor de a dentro de la funcion ${uno}`);

    return uno+otro;
}

let a = 5;
let b = 3;

console.log(`valor de a antes de llamar a suma ${a}`);
console.log(suma(a,b));
console.log(`valor de a despues de llamar a suma ${a}`);
console.log(a+b);


function sumaArray(uno, otro) {
    for (let i = 0; i < uno.length; i++) {
        uno[i] = uno[i] + otro[i];
    }
}

a = [1, 2, 3, 4, 5];
b = [1, 2, 3, 4, 5];

console.log(`valor de a antes de suma ${a}`);
sumaArray(a, b);
console.log(`valor de a despues de suma ${a}`);

function sumaEstructuraDeDatos(uno, otro) {
    uno.cantidad = uno.cantidad + otro.cantidad;
}
a = {
    cantidad: 5,
    detalle: "numero a"
};
b = {
    cantidad: 3,
    detalle: "numero b"
}

console.log(`valor de a antes de suma ${a.cantidad}`);
sumaEstructuraDeDatos(a, b);
console.log(`valor de a despues de suma ${a.cantidad}`);