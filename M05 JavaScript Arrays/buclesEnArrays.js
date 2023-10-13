let numeros = [1,2,3,4,5];
for (i = 0; i < numeros.length; i++) {
    if (numeros[i <= 3]){
        console.log (numeros [i]);
    }
    
}

function encontrarLetraA(string) {
    let letras = string.split('');
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === "S") {
            console.log ("Si contiene a");
        }
    }
}

encontrarLetraA ("Santana");
encontrarLetraA ("Maldonado");

let arregloConBucleWhile = [];
while (arregloConBucleWhile < 5){
    arregloConBucleWhile.push ("boom");
}

console.log (arregloConBucleWhile)

