// Función para manejar el envío del formulario de edición de usuario
function editarUsuario(event) {
    event.preventDefault(); // Prevenir el envío del formulario tradicional

    // Obtener los datos del formulario
    const formData = new FormData(document.getElementById('editUserForm'));

    // Realizar la solicitud AJAX usando Fetch API
    fetch('edit_user_backend.php', {
        method: 'POST',
        body: formData // Enviar los datos del formulario
    })
    .then(response => response.text())
    .then(data => {
        // Manejar la respuesta del servidor
        if (data.includes("Error")) {
            alert(data); // Mostrar error en caso de fallo
        } else {
            alert("Datos actualizados correctamente.");
            window.location.href = "../security/cerrar.php"; // Redirigir tras éxito
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un problema con la actualización.");
    });
}

// Asignar el evento al formulario
document.getElementById('editUserForm').addEventListener('submit', editarUsuario);
