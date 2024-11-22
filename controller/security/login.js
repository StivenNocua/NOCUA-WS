// Evento para el formulario de registro
document.getElementById("formRegistro").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar recarga de la página

    // Capturar los datos del formulario
    const apellido = document.getElementById("apellido").value;
    const nombre = document.getElementById("nombre").value;
    const usuario = document.getElementById("usuario").value;
    const genero = document.getElementById("genero").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Crear un objeto usuario
    const usuarioRegistrado = {
        apellido: apellido,
        nombre: nombre,
        usuario: usuario,
        genero: genero,
        email: email,
        password: password
    };

    // Guardar el usuario en localStorage
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioRegistrado));

    // Mostrar mensaje de éxito
    alert("Registro exitoso. Serás redirigido al inicio de sesión.");

    // Redirigir al login
    window.location.href = "../../security/login.js";
});
