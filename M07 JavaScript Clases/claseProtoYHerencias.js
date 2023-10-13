//Ejemplo: Usando el prototipo del objeto global "Array" accediendo a el para agregar un nuevo 
//metodo a su constructor.
Array.prototype.mayoresATres = function(){
    let arregloModificado = [];
    for (let i = 0; i < this.length; i++){
        let iteracion = this[i];
        if (iteracion > 3){
            arregloModificado.push (false);
        } else {
        arregloModificado.push(this[i])
    }
    return arregloModificado;
  }
}

let arreglo = [1,2,3,4,5];
let nuevoArreglo = arreglo.mayoresATres();

console.log(nuevoArreglo);

//Ejemplo de un metodo externo que accede a una propiedad de una clase que es un array y le
//agrega un string

class LatinoAmerica {
    constructor(){
        this.paises = [];
    }
}

LatinoAmerica.prototype.agregarPaises = function(pais){
    this.paises.push(pais);
}

//ahora declaramos una nueva instancia donde ya tendremos definido el parametro "pais" que
//recibe el metodo "agregarPais". Declaramos con la palabra reservada "new"

let continente = new LatinoAmerica(); //agregamos la instancia "continente" de "LatinoAmerica"
continente.agregarPaises("Mexico");//declaramos el parametro "pais" de la funcion "agregarPaises"
                                   //de la instancia "continente" de "LatinoAmerica"

console.log (continente.paises)

//Ejemplo de creacion de una clase con 2 propiedades que igualan a 2 parametros recibidos por
//su constructor, y un metodo que devuelve un string junto con las propiedades del constructor
class Persona {
    constructor(nombre, edad){
     this.nombre = nombre;
     this.edad = edad;
    }
    saludar = function(){
        console.log ("Hola mi nombre es " + this.nombre + ". Y tengo " + this.edad + " años.")
    }
}

//Creacion de una nueva instancia de la clase para definir los parametros de las propiedades en
//el constructor, y despues ejecutando el metodo dentro de la clase con la nueva instancia.
let Dan = new Persona ("Dan", 28);
Dan.saludar();

 