const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { Pool } = require('pg'); // Para la conexión con PostgreSQL (o mysql para MySQL)

const app = express();
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'nocuaws',
    password: '',
    port: 5432, // Cambiar según la configuración
});

// Ruta para manejar la solicitud de restablecimiento de contraseña
app.post('/password-reset', async (req, res) => {
    const { email } = req.body;

    try {
        // Verificar si el correo existe en la base de datos
        const userQuery = await pool.query('SELECT id_usuario, nombre FROM usuarios WHERE email = $1', [email]);
        if (userQuery.rowCount === 0) {
            return res.status(404).json({ status: 'not_found', message: 'Correo no encontrado' });
        }

        const user = userQuery.rows[0];

        // Generar el token y la fecha de expiración
        const token = crypto.randomBytes(50).toString('hex');
        const expira = new Date(Date.now() + 60 * 60 * 1000); // 1 hora desde ahora

        // Insertar el token en la base de datos
        await pool.query('INSERT INTO password_resets (email, token, expira) VALUES ($1, $2, $3)', [
            email,
            token,
            expira,
        ]);

        // Enviar el correo
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Cambiar según tu configuración
            auth: {
                user: 'tu_correo@gmail.com',
                pass: 'tu_contraseña',
            },
        });

        const mailOptions = {
            from: 'no-reply@tusitio.com',
            to: email,
            subject: 'Restablecer tu contraseña de NOCUA Web Solutions',
            text: `Hola, ${user.nombre}.\n\nHaz clic en el siguiente enlace para restablecer tu contraseña:\nhttp://tusitio.com/reset_password.html?token=${token}\n\nEste enlace es válido por 1 hora.\nSi no solicitaste este cambio, simplemente ignora este correo.`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ status: 'success', message: 'Correo enviado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Error en el servidor' });
    }
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
