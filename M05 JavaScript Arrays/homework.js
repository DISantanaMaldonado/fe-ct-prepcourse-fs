/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   let primerElemento = (array[0]);
   return primerElemento;
}
console.log(devolverPrimerElemento ([1,2,3]));


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let primerElemento = (array[2]);
   return primerElemento;
}
console.log(devolverUltimoElemento ([1,2,3]));


array2 = [1,2,3,4]

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   let obtenerLargoDelAray = array.length;
   return (obtenerLargoDelAray);
}
console.log(obtenerLargoDelArray ([1,2,3]));


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let arraySumaUno = array.map (function(num){
     elem = num +1;
     return num;
   })
   return arraySumaUno;
}
console.log (incrementarPorUno([1,2,3,4]))

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
console.log (agregarItemAlFinalDelArray([1,2,3], 4))

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
  array.unshift(elemento);
  return array;
}
console.log (agregarItemAlComienzoDelArray([1,2,3], 0))

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let nombre = (palabras.join (" "));
   return nombre;
}
console.log(dePalabrasAFrase(["Dan", "Israel", "Santana" , "Maldonado"]))


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   let saberSiContiene = array.includes(5);
   return saberSiContiene;
}
console.log (arrayContiene([1,2,3,4]))

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   return arrayOfNums.reduce (function (acumulador, elemento){
      acumulador = acumulador + elemento;
      return acumulador;
   })
   
}
console.log (agregarNumeros([1,2,3]));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let promedio = 0;
   
   for (let i=0; i<resultadosTest.length; i++){
         promedio+=resultadosTest[i];
}
promedio = promedio / resultadosTest.length;
return promedio;
}
console.log (promedioResultadosTest([1,2,3]))

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numeroMayor = arrayOfNums[0];

   arrayOfNums.forEach(function (numero) {
      if (numeroMayor < numero) {
         numeroMayor = numero;
      }
   });

   return numeroMayor;
}
console.log (numeroMasGrande([1,2,3,4,5,6,7,8]))

function multiplicarArgumentos(arr) {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let multiplicacion = 1;
   for (let i = 0; i < arguments.length; i++  ){
      multiplicacion *= arguments[i];
   }
   return multiplicacion;
}
  
console.log (multiplicarArgumentos(1,2,3));

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   for (let i=0; i < array.length; i++){
      if (array[i] > 18){
         return (array[i]);
      }
   }
}
console.log (cuentoElementos([5,10,15,20]))

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia == 1 || numeroDeDia == 6 ){
          return "Es fin de semana"
      }  else {
         return "Es dia laboral"
      }
  
}
console.log(diaDeLaSemana(6));

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
  let numToStr = num.toString();
  if (numToStr.charAt(0) === "9"){
   return true;
  } else {
   return false;
  }
}

console.log (empiezaConNueve(912123))

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (let i = 0; i < array.length; i++){
      if (array[i] !== array[0]){
         return false;
      }
   }
   return true;
}

console.log (todosIguales([1,3]))

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código: 
   let filtrarMeses = array.filter (function (elem) {
      if (elem == "Enero" || elem == "Marzo" || elem == "Noviembre"){
          return elem;
      } 
   })
   if (filtrarMeses.length === 3){
      return filtrarMeses;
   } else {
      return "No se encontraron los meses pedidos";
   }
   
}
console.log (mesesDelAño(["Febrero", "Marzo", "Junio", "Julio", "Octubre", "Noviembre"]))

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tablaSeis = [];
   for (let i=0; i <= 10; i++){
       let operacion = 6 * i;
       tablaSeis.push (operacion);
   }
   return tablaSeis;
}
console.log(tablaDelSeis());

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
 let filtrarNumeros = array.filter (function (num){
   return 100 < num;
 })
 return filtrarNumeros;
}
console.log (mayorACien([20,40,80,160]))
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let nuevoArreglo = [];
   let numero = 0;
   let suma = numero;
   for (let i = 0; nuevoArreglo.length < 10; i++){
        suma = suma+2;
        if (suma === i){
         break;
        } else {
         nuevoArreglo.push(suma);
        }
   }
   if (nuevoArreglo.length < 10){
      return "Se interrumpió la ejecucion"
   } else if (nuevoArreglo.length === 10) {
      return nuevoArreglo;
}
}
console.log(breakStatement([]))

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let nuevoArreglo2 = [];
   let suma2 = 0;
   for (let i = 0; nuevoArreglo2.length < 10; i++){
        if (i === 5){ 
         continue;
      }else{
         suma2 += 2;
         nuevoArreglo2.push(suma2);}
   }
   return nuevoArreglo2;
}
console.log (continueStatement());
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
