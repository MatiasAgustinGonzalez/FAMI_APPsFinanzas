document.addEventListener("DOMContentLoaded", () => {
  console.log("auth.js cargado");

  // --- LOGIN ---
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Por favor completá todos los campos.");
        return;
      }
      if (!email.includes("@") || !email.includes(".")) {
        alert("El correo electrónico no parece válido.");
        return;
      }

      alert("Inicio de sesión exitoso. Redirigiendo al dashboard...");
      window.location.href = "dashboard.html";
    });
  }

  // --- REGISTRO ---
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!firstName || !lastName || !email || !password) {
        alert("Por favor completá todos los campos.");
        return;
      }
      if (!email.includes("@") || !email.includes(".")) {
        alert("El correo electrónico no parece válido.");
        return;
      }

      alert("Cuenta creada con éxito. Redirigiendo a Iniciar Sesión...");
      window.location.href = "index.html";
    });
  }

  // --- RECUPERAR CONTRASEÑA ---
  const recoverForm = document.getElementById("recoverForm");
  if (recoverForm) {
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");

    // Paso 1: envío del email
    recoverForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      if (!email || !email.includes("@")) {
        alert("Por favor ingresá un correo válido.");
        return;
      }
      alert(`Se ha enviado un código a ${email}.`);
      step1.style.display = "none";
      step2.style.display = "block";
    });

    // Paso 2: verificación del código
    document
      .getElementById("verifyCode")
      .addEventListener("click", function (e) {
        e.preventDefault();
        const code = document.getElementById("code").value.trim();
        if (code !== "1234") {
          alert("Código incorrecto. Probá de nuevo.");
          return;
        }
        alert("Código verificado.");
        step2.style.display = "none";
        step3.style.display = "block";
      });

    // Paso 3: establecer nueva contraseña
    document
      .getElementById("setPassword")
      .addEventListener("click", function (e) {
        e.preventDefault();
        const newPassword = document.getElementById("newPassword").value.trim();
        if (!newPassword) {
          alert("Ingresá tu nueva contraseña.");
          return;
        }
        alert("Contraseña actualizada con éxito.");
        window.location.href = "index.html";
      });
  }
});
