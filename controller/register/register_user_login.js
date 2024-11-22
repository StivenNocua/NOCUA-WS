// Agrega el listener para el formulario
document.getElementById("formRegistro").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita la recarga de la página

    // Captura los valores del formulario
    const apellido = document.getElementById("apellido").value;
    const nombre = document.getElementById("nombre").value;
    const usuario = document.getElementById("usuario").value;
    const genero = document.getElementById("genero").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Crea un objeto con los datos del usuario
    const usuarios = {
        apellido: apellido,
        nombre: nombre,
        usuario: usuario,
        genero: genero,
        email: email,
        password: password
    };

    // Guarda el objeto en LocalStorage
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarios));

    // Mostrar mensaje de registro exitoso
    Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'El usuario ha sido registrado correctamente. Ahora serás redirigido al inicio de sesión.',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        // Redireccionar al login después de confirmar
        window.location.href = "login.html";
    });
});
