const express = require('express');
const session = require('express-session');

const app = express();

// Configurar sesión
app.use(
    session({
        secret: 'clave_secreta', // Cambia por una clave más segura
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Cambiar a true si usas HTTPS
    })
);

// Middleware para verificar si un usuario ha iniciado sesión
function verificarSesion(req, res, next) {
    if (req.session.usuario) {
        next(); // Continúa si el usuario ha iniciado sesión
    } else {
        res.status(401).json({ mensaje: 'DEBES INICIAR SESIÓN' });
    }
}

// Middleware para verificar si el usuario es administrador
function verificarAdmin(req, res, next) {
    if (req.session.cargo === 1) {
        next(); // Continúa si es administrador
    } else {
        res.status(403).json({ mensaje: 'Acceso Denegado' });
    }
}

// Ruta protegida (solo para administradores)
app.get('/admin', verificarSesion, verificarAdmin, (req, res) => {
    res.status(200).json({ mensaje: 'Bienvenido, Administrador' });
});

// Ruta para iniciar sesión (ejemplo)
app.post('/login', (req, res) => {
    const { usuario, cargo } = req.body; // Supongamos que obtienes estos datos del cliente
    req.session.usuario = usuario; // Guardar datos en la sesión
    req.session.cargo = cargo; // Guardar rol en la sesión
    res.status(200).json({ mensaje: 'Sesión iniciada' });
});

// Ruta para cerrar sesión
app.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.status(200).json({ mensaje: 'Sesión cerrada' });
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
