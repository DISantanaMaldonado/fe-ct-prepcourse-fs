//Ejemplo de un objeto que contiene "arrays" como propiedades
let instrumentos = {
    cuerdaFrotada: ["Violin", "Viola", "Violonchelo", "Contrabajo"],
    cuerdaRasgada: ["Guitarra", "Bajo", "Ukelele", "Banjo"],
};

//Ejemplo de un objeto que contiene "variables" como propiedades y otro objeto en su interior
let persona = {
    nombre: "Dan",
    apellido: "Santana",
    edad: 28,
    musico : { esMusico: true},
    programador: { esProgramador: false},
}

//Ejemplo de acceso a una propiedad de un objeto usando "Dot notation"
console.log(persona.edad)
//Ejemplo de correccion (o reasignacion) de una propiedad en un objeto 
persona.nombre = "Israel"
console.log(persona.nombre)
persona.programador = true;
console.log(persona.programador)
//Ejemplo de creacion de una nueva propiedad en un objeto despues de haberlo creado
//NOTA: La sintaxis es igual que cuando se corrije o reasigna el valor de una propiedad
persona.mascotas = ["Tacho", "Maria", "Chubeto"];
console.log(persona.mascotas);
//Ejemplo de creacion de una nueva propiedad en un objeto despues de haberlo creado
//usando "Bracket notation"
persona["instrumentos"] = ["Bajo Electrico", "Guitara Acustica", "Teclado"]
console.log(persona.instrumentos);
//Ejemplo de eliminacion de una propiedad de un objeto usando la palabra reservada
//"delete"
delete persona.musico;
console.log(persona.musico);

//Ejemplo de un objeto que contiene "funciones" como propiedades
let misFunciones = {
    saludar: function(){
        console.log("Hola, ¿Como estas?")
    },
    despedirse: function(){
        console.log("Adios, ¡Nos vemos!")
    },
}

misFunciones.saludar();
misFunciones.despedirse();

console.log(misFunciones);

//Diferencias entre Bracket y Dot notation:
let comidas = {}
let diferenciasEntreNotaciones = function(propUno, propDos){
    comidas.propUno = ["Frutas", "Vegetales"];
    comidas["propDos"] = ["Burgers", "Dogos"];
}
diferenciasEntreNotaciones ("saludable", "noSaludable");
//observaremos que la terminal nos devuelve el nombre de las propiedades de forma literal
//y no con el nombre que les asignamos, este tipo de problema donde debemos llamar a algo
//externo, solo puede solucionarse con el "bracket notation" eliminando las comillas al
//momento de llamar crear la propiedad indicamos que esa propiedad esta usando la variable
//y no la palabra recibida por parametro cuando se establece la funcion

let comidas2 = {}
let diferenciasEntreNotaciones2 = function(propUno2, propDos2){
    comidas2 [propUno2] = ["Frutas", "Vegetales"];
    comidas2 [propDos2] = ["Burgers", "Dogos"];
}
diferenciasEntreNotaciones2 ("saludable", "noSaludable");
console.log(comidas2);
