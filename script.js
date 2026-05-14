document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();
  let mensajeTexto = document.getElementById("mensajeExito");

  mensajeTexto.textContent = "";

  if (nombre === "" || correo === "" || mensaje === "") {
    mensajeTexto.textContent = "Por favor completa todos los campos ❗";
    mensajeTexto.style.color = "red";
    return;
  }

  if (!correo.includes("@")) {
    mensajeTexto.textContent = "Correo inválido ❗";
    mensajeTexto.style.color = "red";
    return;
  }

  mensajeTexto.textContent = "Mensaje enviado con éxito 💖";
  mensajeTexto.style.color = "green";

  document.getElementById("formulario").reset();
});