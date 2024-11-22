const express = require('express');
const multer = require('multer'); // Para manejar la carga de archivos
const bcrypt = require('bcrypt'); // Para hashear contraseñas
const mysql = require('mysql2'); // Para interactuar con MySQL
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Multer para la carga de imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../assets/users')); // Ruta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Nombre único para cada archivo
    },
});
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Límite de 5MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Solo se permiten archivos JPG, PNG y GIF'));
        }
    },
});

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nocuaws',
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        process.exit(1);
    }
    console.log('Conexión exitosa a la base de datos');
});

---

#### **2. Ruta para registrar usuarios**
```javascript
app.post('/register', upload.single('photo'), async (req, res) => {
    const { nombre, apellido, usuario, email, password, acepta_terminos } = req.body;

    // Validar campos obligatorios
    if (!nombre || !apellido || !usuario || !email || !password) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Ruta de la imagen subida
        const photoPath = req.file ? `assets/users/${req.file.filename}` : null;

        // Cargo predeterminado
        const cargo = 4;

        // Fecha de registro
        const fechaRegistro = new Date();

        // Preparar la consulta SQL
        const query = `
            INSERT INTO usuarios (nombre, apellido, usuario, email, password, cargo, fecha_registro, acepta_terminos, photo)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            nombre,
            apellido,
            usuario,
            email,
            hashedPassword,
            cargo,
            fechaRegistro,
            acepta_terminos ? 1 : 0,
            photoPath,
        ];

        // Ejecutar la consulta
        db.query(query, values, (err, results) => {
            if (err) {
                console.error('Error al registrar usuario:', err);
                return res.status(500).json({ error: 'Error al registrar usuario' });
            }

            res.status(201).json({
                message: 'Registro exitoso. Puedes iniciar sesión ahora.',
                userId: results.insertId,
            });
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});