//Creamos una clase general llamada "Persona"
class Persona {
    constructor(nombre, edad){
     this.nombre = nombre;
     this.edad = edad;
    }
    saludar = function(){
        console.log ("Hola mi nombre es " + this.nombre + ". Y tengo " + this.edad + " años.")
    }
}


let Dan = new Persona ("Dan", 28);
Dan.saludar();

//Creamos una clase secundaria que heredara propiedades de la clase "Persona" mediante el uso
//de la palabra reservada "extends". Es como si crearamos una nueva clase (normal) y al final
//ponemos "extends" + "nombreDeLaClase" de la que heredaremos.
class Musico extends Persona {
    constructor (nombre, edad, experiencia){ //los parametros "nombre" y "edad" ya existen en
                                             //la clase "Persona", para heredar estos valores
                                             //usamos la palabra reservada "super" seguido de
                                             //parentesis donde ecribiremos los parametros que
                                             //heredaran su valor de la clase "General"
        super (nombre, edad);
        this.experiencia = experiencia;

    }
    tocaInstrumento(){
        console.log(
            "Soy " + this.nombre + "musico desde hace " + this.experiencia + "años."
        )
    }
}

let DanMusico = new Musico ("Dan", 28, 10);
DanMusico.tocaInstrumento()