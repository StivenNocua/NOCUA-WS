// Función para registrar un usuario en Local Storage
document.getElementById("formRegister").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const apellido = document.getElementById("registerApellido").value;
    const nombre = document.getElementById("registerNombre").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const genero = document.getElementById("registerGenero").value;

    // Crear un objeto usuario
    const usuario = {
        apellido,
        nombre,
        email,
        password,
        genero,
    };

    // Guardar en Local Storage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if (usuarios.some((user) => user.email === email)) {
        alert("Este correo ya está registrado.");
        return;
    }
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuario registrado con éxito. Ahora puedes iniciar sesión.");
    document.getElementById("formRegister").reset();
});

// Función para iniciar sesión
document.getElementById("formLogin").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Recuperar usuarios de Local Storage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioValido = usuarios.find(
        (user) => user.email === email && user.password === password
    );

    if (usuarioValido) {
        alert(`Bienvenido, ${usuarioValido.nombre} ${usuarioValido.apellido}`);
        // Guardar sesión en Local Storage
        localStorage.setItem("usuarioActivo", JSON.stringify(usuarioValido));
        // Redirigir a admin.html
        window.location.href = "admin/admin.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});

// Función para generar el campo usuario automáticamente
function registerUsuario() {
    const apellido = document.getElementById("registerApellido").value;
    const nombre = document.getElementById("registerNombre").value;
    const usuario = `${nombre.toLowerCase()}.${apellido.toLowerCase()}`;
    document.getElementById("usuario").value = usuario;
}
