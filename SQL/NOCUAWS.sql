CREATE DATABASE NOCUAWS
USE NOCUAWS,

CREATE TABLE usuarios (
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
	apellido varchar (100) NOT NULL,
	nombre varchar (100) NOT NULL,
	usuario varchar (200) UNIQUE,
	email varchar (100) UNIQUE,
	password varchar (255),
	cargo INT NOT NULL,
	fecha_registro DATETIME,
	failed_attempts INT DEFAULT 0,
    is_locked BOOLEAN DEFAULT FALSE,
    lock_time DATETIME DEFAULT NULL,
    reset_token VARCHAR(100) DEFAULT NULL,
    token_expira DATETIME DEFAULT NULL,
    foto LONGBLOB DEFAULT NULL,
    acepta_terminos BOOLEAN DEFAULT FALSE
);

CREATE TABLE clientes (
	id_cliente INT AUTO_INCREMENT PRIMARY KEY,
	id_usuario_FK INT, FOREIGN KEY (id_usuario_FK) REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
	telefono VARCHAR (200),
	direccion VARCHAR (255),
	fecha_nacimiento DATE,
	genero ENUM ('Masculino', 'Feminina', 'Otro'),
	nacionalidad VARCHAR (50),
	fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trabajadores (
    id_trabajador INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario_FK INT, FOREIGN KEY (id_usuario_FK) REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
    telefono VARCHAR(20),
    direccion VARCHAR(255),
    fecha_nacimiento DATE,
    genero ENUM('Masculino', 'Femenino', 'Otro'),
    nacionalidad VARCHAR(50),
    fecha_ingreso DATE,
    salario DECIMAL(10, 2),
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE permisos (
	id_permiso INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR (100) NOT NULL,
	descripcion TEXT 
);

CREATE TABLE usuario_permisos (
	id_usuario_FK INT, FOREIGN KEY (id_usuario_FK) REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
	id_permiso_FK INT, FOREIGN KEY (id_permiso_FK) REFERENCES permisos (id_permiso) ON DELETE CASCADE,
	PRIMARY KEY (id_usuario_FK, id_permiso_FK)
);

CREATE TABLE proyectos (
	id_proyecto INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR (100) NOT NULL,
	descripcion TEXT,
	fecha_inicio DATE,
	fecha_fin DATE,
	id_usuario_FK INT, FOREIGN KEY (id_usuario_FK) REFERENCES usuarios (id_usuario) ON DELETE SET NULL,
	total_costo DECIMAL (10, 2) NOT NULL,
	saldo_pendiente DECIMAL (10, 2) NOT NULL
);

CREATE TABLE tareas (
	id_tarea INT AUTO_INCREMENT PRIMARY KEY,
	id_proyecto_FK INT, FOREIGN KEY (id_proyecto_FK) REFERENCES proyectos (id_proyecto) ON DELETE CASCADE,
	nombre VARCHAR (200) NOT NULL,
	descripcion TEXT,
	fecha_inicio DATE,
	fecha_fin DATE,
	estado ENUM('Pendiente', 'En Proceso', 'Completada') DEFAULT 'Pendiente',
	id_usuario_FK INT, FOREIGN KEY (id_usuario_FK) REFERENCES usuarios (id_usuario) ON DELETE CASCADE
);

CREATE TABLE ingresos (
	id_ingreso INT AUTO_INCREMENT PRIMARY KEY,
	descripcion TEXT,
	monto DECIMAL (10, 2) NOT NULL,
	fecha DATE DEFAULT CURRENT_DATE,
	categoria VARCHAR (100),
	estado ENUM ('Pendiente','Confirmado','Anulado') DEFAULT 'Confirmado', -- Estado de la transacción
	id_proyecto_FK INT, FOREIGN KEY (id_proyecto_FK) REFERENCES proyectos (id_proyecto) ON DELETE CASCADE,
	id_usuario_FK INT, FOREIGN KEY (id_usuario_FK) REFERENCES usuarios (id_usuario) ON DELETE CASCADE
);

CREATE TABLE gastos (
	id_gasto INT AUTO_INCREMENT PRIMARY KEY,
	descripcion TEXT,
	monto DECIMAL (10, 2) NOT NULL,
	fecha DATE DEFAULT CURRENT_DATE,
	categoria VARCHAR (100),
	estado ENUM ('Pendiente','Confirmado','Anulado') DEFAULT 'Confirmado', -- Estado de la transacción
	id_proyecto_FK INT, FOREIGN KEY (id_proyecto_FK) REFERENCES proyectos (id_proyecto) ON DELETE CASCADE,
	id_usuario_FK INT, FOREIGN KEY (id_usuario_FK) REFERENCES usuarios (id_usuario) ON DELETE CASCADE
);

CREATE TABLE saldo_total (
	id_saldo INT AUTO_INCREMENT PRIMARY KEY,
	saldo DECIMAL (10, 2) NOT NULL DEFAULT 0.00,
	fecha_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	descripcion TEXT
);

CREATE TABLE proyectos_trabajadores (
	id_proyecto_FK INT, FOREIGN KEY (id_proyecto_FK) REFERENCES proyectos (id_proyecto) ON DELETE CASCADE,
	id_usuario_FK INT, FOREIGN KEY (id_usuario_FK) REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
	rol VARCHAR (100),
	PRIMARY KEY (id_proyecto_FK, id_usuario_FK)
);

CREATE TABLE nomina (
	id_nomina INT AUTO_INCREMENT PRIMARY KEY,
	id_usuario_FK INT, FOREIGN KEY (id_usuario_FK) REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
	monto_base DECIMAL (10, 2) NOT NULL,
	fecha_pago DATETIME DEFAULT CURRENT_DATE,
	periodo_inicio DATE,
	periodo_fin DATE,
	horas_trabajadas DECIMAL (5, 2) DEFAULT 0,
	bonificaciones DECIMAL (10, 2) DEFAULT 0,
	deducciones DECIMAL (10, 2) DEFAULT 0,
	salud DECIMAL (10, 2) DEFAULT 0,
	pension DECIMAL (10, 2) DEFAULT 0,
	riesgos_laborales DECIMAL (10, 2),
	cesantias DECIMAL (10, 2) DEFAULT 0,
	intereses_cesantias DECIMAL (10, 2) DEFAULT 0,
	prima_servicios DECIMAL (10, 2) DEFAULT 0,
	vacaciones DECIMAL (10, 2) DEFAULT 0,
	comentarios Text
);

CREATE TABLE pago_proyectos (
	id_pago INT AUTO_INCREMENT PRIMARY KEY,
	id_proyecto_FK INT, FOREIGN KEY (id_proyecto_FK) REFERENCES proyectos (id_proyecto) ON DELETE CASCADE,
	id_usuario_FK INT, FOREIGN KEY (id_usuario_FK) REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
	monto DECIMAL (10, 2) NOT NULL,
	fecha_pago DATETIME DEFAULT CURRENT_DATE,
	tipo_pago ENUM ('Inicial', 'Final') NOT NULL,
	estado ENUM('Pendiente', 'Confirmado', 'Anulado') DEFAULT 'Confirmado'
);

CREATE TABLE mensajes (
    id_mensaje INT AUTO_INCREMENT PRIMARY KEY,
    id_proyecto INT NOT NULL,
    id_usuario_remitente INT NOT NULL,
    id_usuario_destinatario INT NOT NULL,
    contenido TEXT NOT NULL,
    fecha_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('Pendiente', 'Leído', 'Respondido') DEFAULT 'Pendiente',
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto) ON DELETE CASCADE,
    FOREIGN KEY (id_usuario_remitente) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_usuario_destinatario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);


CREATE TABLE t (
	id_t INT AUTO_INCREMENT PRIMARY PRIMARY KEY
);
