function toggleSection() {
    var demo = document.getElementById ("demo");
    if (demo.style.display === "none") {
        demo.style.display = "block";
        document.getElementById("toggleBloque").textContent = "Ocultar Operaciones";
    } else { 
        demo.style.display = "none";
        document.getElementById("toggleBloque").textContent = "Mostrar Operaciones";
    }
}
function sumar() {
    var suma = parseInt (document.getElementById ("primerNumero").value) + parseInt (document.getElementById("segundoNumero").value)
    validarVacios (suma, "suma")
}

function restar() {
    var resta = parseInt (document.getElementById ("primerNumero").value) - parseInt (document.getElementById("segundoNumero").value)
    validarVacios (resta, "resta")
}
function multiplicar() {
    var multiplica = parseInt (document.getElementById ("primerNumero").value) * parseInt (document.getElementById("segundoNumero").value)
    validarVacios (multiplica, "multiplica")
}
function validarVacios(resultado,operacion) {
    if(!isNaN(resultado)) {
        imprimirMensaje(operacion,resultado);
    } else {
        document.getElementById("result").textContent = "Debe ingresar valores numericos";
    }
}
function imprimirMensaje(operacion,resultado) {
    document.getElementById("result").textContent = "El resultado de la " + operacion + " es " + resultado
}
