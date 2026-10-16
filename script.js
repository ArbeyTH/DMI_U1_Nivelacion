
const boton = document.getElementById("botonMensaje");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    mensaje.textContent = "¡Hola! Esta es nuestra primera aplicación móvil.";
});
