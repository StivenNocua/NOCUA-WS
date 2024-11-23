// Registro de usuario
document.getElementById("formRegister").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página y el envío de datos por URL

    // Llamada a la función que genera el usuario
    registerUsuario();

    // Captura los valores del formulario
    const apellido = document.getElementById("registerApellido").value;
    const nombre = document.getElementById("registerNombre").value;
    const usuario = document.getElementById("usuario").value; // Ahora se llena automáticamente con registerUsuario()
    const genero = document.getElementById("registerGenero").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    // Crea un objeto con los datos del usuario
    const usuarioRegistrado = {
        apellido: apellido,
        nombre: nombre,
        usuario: usuario,
        genero: genero,
        email: email,
        password: password
    };

    // Guarda el objeto en LocalStorage (o en donde prefieras)
    const usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
    usuarios.push(usuarioRegistrado);
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarios));

    // Mostrar mensaje de éxito y redirigir a la página de login
    Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Tu cuenta ha sido creada. Ahora puedes iniciar sesión.',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        // Redirige al login sin mostrar los datos en la URL
        window.location.href = "login.html";
    });
});

// Función que genera el nombre de usuario automáticamente
function registerUsuario() {
    const nombre = document.getElementById('registerNombre').value;
    const apellido = document.getElementById('registerApellido').value;
    const usuario = `${nombre.toLowerCase()}${apellido.toLowerCase()}`;
    document.getElementById('usuario').value = usuario;
}


// Inicio de sesión de usuario
document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página

    // Captura los valores del formulario
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Aquí podrías validar el email y la contraseña
    // Este ejemplo usa LocalStorage para simplificar, pero lo ideal sería hacer una llamada AJAX al servidor para validar

    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    const usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.email === email && usuario.password === password);

    if (usuarioEncontrado) {
        // Si el usuario está registrado, redirigir a la página principal
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'Has iniciado sesión correctamente.',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            window.location.href = "admin/admin.html"; // Redirige a la página principal del usuario
        });
    } else {
        // Si no se encuentra el usuario o la contraseña no es correcta
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Email o contraseña incorrectos. Intenta nuevamente.',
            confirmButtonText: 'Aceptar'
        });
    }
});
