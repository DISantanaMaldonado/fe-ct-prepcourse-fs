//"numeros" es un arreglo de numeros que es recibida por parametro por la funcion "mayoMenor"
//Devolver un arreglo que contenga el numero mayor en la pocision 1 y el menor en la pocision 0 
//de "numeros"
//Solucion 1
function mayorMenor (numeros){
let mayor = -Infinity;
let menor = +Infinity;
 for (let i = 0; i < numeros.length; i++){
    let iteracionActual = numeros[i];
    if (iteracionActual > mayor ){
        mayor = iteracionActual;
    } else if (iteracionActual < menor){
        menor = iteracionActual;
    } 
 }
 return [menor, mayor];
}

console.log(mayorMenor([9, 17, 6, 2, 4]))

//Solucion 2 
function mayorMenor2 (numeros){
return [Math.min(...numeros), Math.max(...numeros)] 
}
    console.log(mayorMenor2([9, 17, 6, 2, 4]))
    
