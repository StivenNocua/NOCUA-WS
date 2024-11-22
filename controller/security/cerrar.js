const express = require('express');
const session = require('express-session');

const app = express();

// Configuración de la sesión
app.use(
    session({
        secret: 'clave_secreta', // Cambiar por una clave más segura
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Cambiar a true si usas HTTPS
    })
);

// Ruta para destruir la sesión
app.post('/logout', (req, res) => {
    if (req.session) {
        // Destruir la sesión
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ status: 'error', message: 'No se pudo cerrar la sesión.' });
            }
            res.clearCookie('connect.sid'); // Limpia la cookie de sesión
            return res.status(200).json({ status: 'success', message: 'Sesión cerrada correctamente.' });
        });
    } else {
        res.status(400).json({ status: 'error', message: 'No hay sesión activa.' });
    }
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
