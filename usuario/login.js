document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validación básica
    if (!email || !password) {
      alert("Por favor completá todos los campos.");
      return;
    }

    // Validación de formato de email
    if (!email.includes("@") || !email.includes(".")) {
      alert("El correo electrónico no parece válido.");
      return;
    }

    // Simular login exitoso
    alert("Inicio de sesión exitoso. Redirigiendo al dashboard...");
    window.location.href = "./dashboard.html"; // archivo ficticio por ahora
  });
});
