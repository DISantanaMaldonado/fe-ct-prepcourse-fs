let arreglo = [1, 2, 3];

//Push: Agrega un elemento al final del arreglo y devuelve la longitud del arreglo
let arregloPush = arreglo.push(7);
console.log (arregloPush);
console.log (arreglo);

//Pop: Elimina un elemento al final arreglo y devuelve el elemento eliminado
let arregloPop = arreglo.pop();
console.log (arregloPop);
console.log (arreglo);

//Unshift: Agrega un elemento al principio del arreglo y devuelve la longitud del arreglo
let arregloUnshift = arreglo.unshift(0);
console.log (arregloUnshift);
console.log (arreglo);

//Shift: Elimina un elemento al principio del arreglo y devuelve el elemento eliminado
let arregloShift = arreglo.shift();
console.log (arregloShift);
console.log (arreglo);

//Creando un arreglo y dando elementos
let nombreCompleto = [];
nombreCompleto[3] = "Santana";
nombreCompleto[2] = "Israel";
nombreCompleto[1] = "Dan";
nombreCompleto[0] = "Nombre";

let nombre = nombreCompleto[1];
console.log (nombre);

//Length: Nos permite saber cuantos elementos tiene un arreglo (retorna la longitud del arreglo)

console.log (nombreCompleto.length);

//Includes: Revisa si un arreglo incluye algun elemento en especifico (devuelve un booleano)
let incluyeMaldonado = nombreCompleto.includes ("Maldonado");
let incluyeSantana = nombreCompleto.includes ("Santana");
console.log (incluyeMaldonado)
console.log (incluyeSantana)

//Every: Recorre un arreglo y verifica si cumplen un parametro (devuele un booleano)
let numeros = [1,2,3,4];
let cumplenConCondicionMayorACinco = numeros.every ((num) => {
    return num > 5
})

let cumplenConCondicionMayorACero = numeros.every ((num) => {
    return num > 0
})

console.log (cumplenConCondicionMayorACero);

//Split: Transforma un palabra (o String) en un arreglo
let apellido = "Cantana";
let apellidoSeparado = apellido.split ('');
apellidoSeparado.shift()
apellidoSeparado.unshift ("S");
console.log (apellidoSeparado);

//Join: Transforma un arreglo a un String

let arregloAPalabra = apellidoSeparado.join('');
console.log (arregloAPalabra);

//Foreach: Permite recorrer un arreglo elemento por elemento, este metodo realiza una
//accion en especifico para los elementos de un arreglo, pero NO CAMBIA EL ARREGLO
numeros.forEach ((num) => console.log (num));
numeros.forEach (num => {if (num < 3) {console.log(num)}});

//Map: Permite recorrer un arreglo elemento por elemento, creando despues una copia del
//arreglo original y devolviendolo con los cambios hechos
let sumarUnoACadaElemento = numeros.map ((num) => {
    return num + 1;
})
console.log (sumarUnoACadaElemento);
//Filter: Permite recorrer un arreglo elemento por elemento, creando una copia del arreglo
// original y devolviendo con los elementos que cumplan una condicion
let filtrarNumeros = numeros.filter ((elem) => {
    return elem < 3;
})
console.log (filtrarNumeros);