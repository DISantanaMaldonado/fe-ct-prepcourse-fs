/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:
   class Usuario{
      constructor(usuario, nombre, email, password){
        this.usuario = usuario;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
      }
      saludar (){
         return "Hola, mi nombre es " + this.nombre;
      }
   }
   
   let usuarioUno = new Usuario(1, "Dan", "db_s@hotmail.com", 1234)
   return Usuario;
}

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
   Usuario.prototype.saludar = function(){
      return "Hello World!";
   }
}

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   String.prototype.reverse = function(){
      let arregloInvertido = this.split (" ").reverse();//"this" hace contexto a la clase de la 
                                                        //cual se toma el metodo: "String"
                                                        //con split lo transformamos en un arreglo
                                                        //de caracteres (" ") los separa
                                                        //revers los invierte y () los junta
      let stringInvertida = arregloInvertido.join (""); //con join lo transformamos en string
      return stringInvertida;
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
