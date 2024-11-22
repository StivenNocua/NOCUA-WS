// Función para eliminar un usuario
function eliminarUsuario(id) {
    if (!id) {
        alert("¡Por favor complete los campos para eliminar el usuario!");
        return;
    }

    // Confirmar eliminación
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar este usuario?");
    if (!confirmacion) {
        return;
    }

    // Enviar la solicitud de eliminación al servidor
    fetch('eliminar_usuario.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            id: id,
            eliminar: true
        })
    })
    .then(response => response.text())
    .then(data => {
        // Verificar si la eliminación fue exitosa
        if (data.includes("¡Ups ha ocurrido un error")) {
            alert(data);
        } else {
            window.location.href = '../security/cerrar.php'; // Redirigir tras la eliminación
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Ocurrió un error al eliminar el usuario.");
    });
}
