let boton = document.getElementById("verificarNota");
let inputNot = document.getElementById("inputNota");
let resulNota = document.getElementById("resultadoNota");

boton.addEventListener("click", function(){
    let nota = parseInt(inputNot.value);

    if (nota >= 0 && nota <=10) {
        if (nota < 3) {
            resulNota.innerHTML = "Muy deficiente 😢";
        }   
        else if (nota < 5) {
            resulNota.innerHTML = "Insuficiente 😢";
        }
        else if (nota < 6) {
            resulNota.innerHTML = "Suficiente 😐";
        }
        else if (nota < 7) {
            resulNota.innerHTML = "Bien 🙂";
        }
        else if (nota < 9) {
            resulNota.innerHTML = "Notable 😊";
        }
        else if (nota >=9) {
            resulNota.innerHTML = "Sobresaliente 😁";
        }
    }else{
        alert("Nota erronea")
    }  
})