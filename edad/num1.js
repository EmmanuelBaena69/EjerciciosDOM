// Obtener el botón, el campo de entrada y el elemento de resultado por sus ID
let verificar = document.getElementById("verificarEdad");
let edadInput = document.getElementById("edad");
let resultado = document.getElementById("resultado");

// Agregar un evento click al botón
verificar.addEventListener("click", function() {
    // Obtener la edad ingresada por el usuario
    let edad = parseInt(edadInput.value);

    // Verificar si la edad es mayor o igual a 18
    if (!isNaN(edad) && edad >= 18) {
        resultado.innerHTML = "¡Puede conducir!";
    } else {
        resultado.innerHTML = "Lo siento, no cumple con la edad mínima para conducir";
    }
});
