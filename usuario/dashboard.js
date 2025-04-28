document.addEventListener("DOMContentLoaded", () => {
  // Buscar el nombre del usuario en localStorage
  const nombreUsuario = localStorage.getItem("nombreUsuario");

  if (nombreUsuario) {
    document.getElementById("userName").innerText = `¡Hola, ${nombreUsuario}!`;
  } else {
    document.getElementById("userName").innerText = "¡Hola, Usuario!";
  }
});
