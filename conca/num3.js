let resultado = ""

do {
    let cadena = prompt("Introduce una cadena");

    if (resultado == "") {

        resultado = resultado + cadena;
    }
    else {
        
        resultado = resultado + "-" + cadena;
    }
} while (confirm("Desea seguir?"));

alert("Cadenas: " + resultado);