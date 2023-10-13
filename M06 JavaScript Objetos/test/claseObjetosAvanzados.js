//Metodo "hasOwnProperty" que verifica si un objeto tiene cierta propiedad:
let persona = {
    nombre: "Dan",
    apellido: "Santana",
    edad: 28,
    musico : { esMusico: true},
    programador: { esProgramador: false},
}

let tienePropiedad = persona.hasOwnProperty("nombre")
let tienePropiedad2 = persona.hasOwnProperty("familia")
console.log(tienePropiedad);
console.log(tienePropiedad2);

//Metodo "keys" devuelve un arreglo con el nombre de todas las propiedades del objeto

let todasLasPropiedades = Object.keys (persona);
console.log(todasLasPropiedades)

//Bucle "for In" en los objetos, similar a un bucle for pero cambia la sintaxis al momento
//de darle los valores de iteraciones. Aqui las "iteraciones" se escribe usando "prop, key o clave"

for (let prop in persona){
    console.log("Esta es la propiedad: " + prop);
    console.log("Este es el valor: " + persona[prop])
}
//Ejemplo de un bucle "for in" usando bracket notation para llamar a las propiedades
//sin conocer del todo su nombre o "key"
for (let key in persona){
    console.log (persona[key]);
}

//objeto "This", es un objeto que hace referencia al contexto de un objeto
let mascota = {
    animal : "Perro",
    raza : "Pug",
    nombre: "tacho",
    amistoso : true,
    dueño: "Dan Santana",
    info: function(){
        console.log (this) //Ejemplo de como un "This" dentro de un objeto 
                           //referencia al objeto en el que se encuentra
        console.log("Mi perro es un: " + this.raza);
    }
}
mascota.info(); //Ejemplo de como ejecutar un metodo (funcion dentro de un objeto)
console.log(mascota.info);
//En caso de querer llamar a la funcion (info) dentro de este objeto (mascota), mandaria
//un error: mascota.info(); ya que "raza" no estaria definida porque la funcion a la que
//llamamos no reconoceria el contexto en el que quiera que se ejecute en
//console.log("Mi perro es un: " + raza);. Para corregir esto debemos poner antes de 
//"raza" la palabra This indicando asi que la palabra "raza" apunta a una propiedad del obj
//"This" es un objeto que por defecto esta vacio, pero al momento de ponerlo dentro de un
//metodo que se encuentra dentro de un objeto, hara referencia a dicho objeto. Practicamente
//el "This" toma el lugar del objeto en el que se encuentra. Por lo que para hacer referencia
//a un objeto dentro de algo que tiene contenido, deberemos usar "This"

console.log(this) //Ejemplo de como un "This" fuera de un objeto esta vacio