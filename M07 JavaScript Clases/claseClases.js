//Como crear una clase con funcion "Constructora" (este tipo de clases son funciones)
function Auto(puertas, color, marca, año, ruedas) {
  this.puertas = puertas;
  this.color = color;
  this.marca = marca;
  this.año = año;
  this.ruedas = ruedas;
  //Ejemplo de un metodo (funcion) dentro de una clase
  this.info = function(){
    console.log ("Este es un " + this.marca + "de color " + this.color + "con " + this.ruedas);
  }
}

//para activar o usar nuestra clase deberemos hacer una nueva INSTANCIA usando la palabra reservada
//"new". Ejemplo:
let miPrimeroCoche = new Auto(4, "gris", "mirage", 2023, 4);

console.log(miPrimeroCoche);
console.log(miPrimeroCoche.marca);
console.log(miPrimeroCoche.info);

//Como crear una clase con funcion de "Clases" (este tipo de clases no son funciones)
//usamos la palabra reservada "class" y los parametros estaran dentro de un bloque creado
//a partir de la palabra reservada "constructor". La creacion o sintaxis del constructor
//es igual a que si hicieramos una funcion
//EJEMPLO:
class Animales{
    constructor (nombre, habitat, tamaño){
        this.nombre = nombre; 
        this.habitat = habitat;
        this.tamaño = tamaño;
    }
//Ejemplo de un metodo (funcion) dentro de una clase
   info (){
        console.log("Este es un " + this.nombre + "del tipo " + this.habitat + "de tamaño " + this.tamaño);
   }
}

let animalUno = new Animales("Gato", "Terrestre", "Pequeño")

console.log(animalUno)
console.log(animalUno.nombre)
console.log(animalUno.info);
