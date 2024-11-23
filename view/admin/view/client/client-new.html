<?php
session_start();

// Inclusión de archivos de conexión y seguridad
include_once '../../../../model/conect.php';
include_once '../../../../controller/security/admin.php';

// Función para finalizar sesión de forma consistente
function finalizarSesion() {
    session_destroy();
    header("Location: ../login.php");
    exit();
}

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['usuario'])) {
    echo '
    <script>
        alert("DEBES INICIAR SESIÓN");
    </script>';
    finalizarSesion();
}

// Asignar el valor de sesión a una variable y validar email
$id_usuario = $_SESSION['usuario'];
if (!filter_var($id_usuario, FILTER_VALIDATE_EMAIL)) {
    echo '
    <script>
        alert("Correo inválido.");
    </script>';
    finalizarSesion();
}

try {
    // Preparar la consulta SQL para obtener los datos del usuario
    $stmt = $conex->prepare("SELECT id_usuario, apellido, nombre, usuario, email, cargo, foto FROM usuarios WHERE email = ?");

    if (!$stmt) {
        throw new Exception("Error en la preparación de la consulta: " . $conex->error);
    }

    // Enlazar el parámetro a la consulta
    $stmt->bind_param("s", $id_usuario);

    // Ejecutar la consulta
    $stmt->execute();

    // Obtener los resultados
    $result = $stmt->get_result();

    // Verificar si se encontraron resultados
    if ($result->num_rows > 0) {
        $valores = $result->fetch_assoc();

        // Asignar los valores a variables
        $id_usuario = $valores['id_usuario'];
        $apellido = $valores['apellido'];
        $nombre = $valores['nombre'];
        $usuario = $valores['usuario'];
        $email = $valores['email'];
        $cargo = $valores['cargo'];
        $foto = $valores['foto'];

        // Establecer una imagen predeterminada si no hay foto de perfil
        if (empty($foto) || !file_exists($foto)) {
            $foto = '../../assets/img/usuario.png'; // Ruta de la imagen predeterminada
        } else {
            $foto = '../../' . $foto; // Asegurarte de que la ruta esté bien formada
        }
    } else {
        echo '
        <script>
            alert("No se encontró información para este usuario.");
        </script>';
        finalizarSesion();
    }

} catch (Exception $e) {
    // Manejo de errores
    echo '
    <script>
        alert("Ocurrió un error: ' . $e->getMessage() . '");
    </script>';
    finalizarSesion();
}

// Cerrar la declaración y la conexión
$stmt->close();
$conex->close();
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>Nuevo cliente</title>

	<!-- Normalize V8.0.1 -->
	<link rel="stylesheet" href="../../assets/css/normalize.css">

	<!-- Bootstrap V4.3 -->
	<link rel="stylesheet" href="../../assets/css/bootstrap.min.css">

	<!-- Bootstrap Material Design V4.0 -->
	<link rel="stylesheet" href="../../assets/css/bootstrap-material-design.min.css">

	<!-- Font Awesome V5.9.0 -->
	<link rel="stylesheet" href="../../assets/css/all.css">

	<!-- Sweet Alerts V8.13.0 CSS file -->
	<link rel="stylesheet" href="../../assets/css/sweetalert2.min.css">

	<!-- Sweet Alert V8.13.0 JS file-->
	<script src="../../assets/js/sweetalert2.min.js" ></script>

	<!-- jQuery Custom Content Scroller V3.1.5 -->
	<link rel="stylesheet" href="../../assets/css/jquery.mCustomScrollbar.css">
	
	<!-- General Styles -->
	<link rel="stylesheet" href="../../assets/css/style.css">


</head>
<body>
	
	<!-- Main container -->
	<main class="full-box main-container">
		<!-- Nav lateral -->
		<section class="full-box nav-lateral">
			<div class="full-box nav-lateral-bg show-nav-lateral"></div>
			<div class="full-box nav-lateral-content">
				<figure class="full-box nav-lateral-avatar">
					<i class="far fa-times-circle show-nav-lateral"></i>
					<img src="./assets/avatar/Avatar.png" class="img-fluid" alt="Avatar">
					<figcaption class="roboto-medium text-center">
						Carlos Alfaro <br><small class="roboto-condensed-light">Web Developer</small>
					</figcaption>
				</figure>
				<div class="full-box nav-lateral-bar"></div>
				<nav class="full-box nav-lateral-menu">
					<ul>
						<li>
							<a href="home.html"><i class="fab fa-dashcube fa-fw"></i> &nbsp; Dashboard</a>
						</li>

						<li>
							<a href="#" class="nav-btn-submenu"><i class="fas fa-users fa-fw"></i> &nbsp; Clientes <i class="fas fa-chevron-down"></i></a>
							<ul>
								<li>
									<a href="client-new.html"><i class="fas fa-plus fa-fw"></i> &nbsp; Agregar Cliente</a>
								</li>
								<li>
									<a href="client-list.html"><i class="fas fa-clipboard-list fa-fw"></i> &nbsp; Lista de clientes</a>
								</li>
								<li>
									<a href="client-search.html"><i class="fas fa-search fa-fw"></i> &nbsp; Buscar cliente</a>
								</li>
							</ul>
						</li>

						<li>
							<a href="#" class="nav-btn-submenu"><i class="fas fa-pallet fa-fw"></i> &nbsp; Items <i class="fas fa-chevron-down"></i></a>
							<ul>
								<li>
									<a href="item-new.html"><i class="fas fa-plus fa-fw"></i> &nbsp; Agregar item</a>
								</li>
								<li>
									<a href="item-list.html"><i class="fas fa-clipboard-list fa-fw"></i> &nbsp; Lista de items</a>
								</li>
								<li>
									<a href="item-search.html"><i class="fas fa-search fa-fw"></i> &nbsp; Buscar item</a>
								</li>
							</ul>
						</li>

						<li>
							<a href="#" class="nav-btn-submenu"><i class="fas fa-file-invoice-dollar fa-fw"></i> &nbsp; Préstamos <i class="fas fa-chevron-down"></i></a>
							<ul>
								<li>
									<a href="reservation-new.html"><i class="fas fa-plus fa-fw"></i> &nbsp; Nuevo préstamo</a>
								</li>
								<li>
									<a href="reservation-list.html"><i class="fas fa-clipboard-list fa-fw"></i> &nbsp; Lista de préstamos</a>
								</li>
								<li>
									<a href="reservation-search.html"><i class="fas fa-search-dollar fa-fw"></i> &nbsp; Buscar préstamos</a>
								</li>
								<li>
									<a href="reservation-pending.html"><i class="fas fa-hand-holding-usd fa-fw"></i> &nbsp; Préstamos pendientes</a>
								</li>
							</ul>
						</li>

						<li>
							<a href="#" class="nav-btn-submenu"><i class="fas  fa-user-secret fa-fw"></i> &nbsp; Usuarios <i class="fas fa-chevron-down"></i></a>
							<ul>
								<li>
									<a href="user-new.html"><i class="fas fa-plus fa-fw"></i> &nbsp; Nuevo usuario</a>
								</li>
								<li>
									<a href="user-list.html"><i class="fas fa-clipboard-list fa-fw"></i> &nbsp; Lista de usuarios</a>
								</li>
								<li>
									<a href="user-search.html"><i class="fas fa-search fa-fw"></i> &nbsp; Buscar usuario</a>
								</li>
							</ul>
						</li>

						<li>
							<a href="company.html"><i class="fas fa-store-alt fa-fw"></i> &nbsp; Empresa</a>
						</li>
					</ul>
				</nav>
			</div>
		</section>

		<!-- Page content -->
		<section class="full-box page-content">
			<nav class="full-box navbar-info">
				<a href="#" class="float-left show-nav-lateral">
					<i class="fas fa-exchange-alt">Bienvenid@ <?php echo htmlspecialchars($usuario); ?></i>
				</a>
				<a href="user/edit_user_admin.php" title="Editar Usuario <?php echo htmlspecialchars($usuario); ?>">
					<i class="fas fa-user-cog"></i>
				</a>
				<a href="../../controller/security/cerrar.php" title="Cerrar Sesión" class="btn-exit-system">
					<i class="fas fa-power-off"></i>
				</a>
			</nav>

			<!-- Page header -->
			<div class="full-box page-header">
				<h3 class="text-left">
					<i class="fas fa-plus fa-fw"></i> &nbsp; AGREGAR CLIENTE
				</h3>
				<p class="text-justify">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem odit amet asperiores quis minus, dolorem repellendus optio doloremque error a omnis soluta quae magnam dignissimos, ipsam, temporibus sequi, commodi accusantium!
				</p>
			</div>

			<div class="container-fluid">
				<ul class="full-box list-unstyled page-nav-tabs">
					<li>
						<a class="active" href="client-new.html"><i class="fas fa-plus fa-fw"></i> &nbsp; AGREGAR CLIENTE</a>
					</li>
					<li>
						<a href="client-list.html"><i class="fas fa-clipboard-list fa-fw"></i> &nbsp; LISTA DE CLIENTES</a>
					</li>
					<li>
						<a href="client-search.html"><i class="fas fa-search fa-fw"></i> &nbsp; BUSCAR CLIENTE</a>
					</li>
				</ul>	
			</div>
			
			<!-- Content here-->
			<div class="container-fluid">
				<form action="" class="form-neon" autocomplete="off">
					<fieldset>
						<legend><i class="fas fa-user"></i> &nbsp; Información básica</legend>
						<div class="container-fluid">
							<div class="row">
								<div class="col-12 col-md-6">
									<div class="form-group">
										<label for="cliente_dni" class="bmd-label-floating">DNI</label>
										<input type="text" pattern="[a-zA-Z0-9-]{1,27}" class="form-control" id="cliente_dni" id="cliente_dni" maxlength="27">
									</div>
								</div>
								<div class="col-12 col-md-6">
									<div class="form-group">
										<label for="cliente_nombre" class="bmd-label-floating">Nombre</label>
										<input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,40}" class="form-control" name="cliente_nombre" id="cliente_nombre" maxlength="40">
									</div>
								</div>
								<div class="col-12 col-md-4">
									<div class="form-group">
										<label for="cliente_apellido" class="bmd-label-floating">Apellido</label>
										<input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,40}" class="form-control" name="cliente_apellido" id="cliente_apellido" maxlength="40">
									</div>
								</div>
								<div class="col-12 col-md-4">
									<div class="form-group">
										<label for="cliente_telefono" class="bmd-label-floating">Teléfono</label>
										<input type="text" pattern="[0-9()+]{1,20}" class="form-control" name="cliente_telefono" id="cliente_telefono" maxlength="20">
									</div>
								</div>
								<div class="col-12 col-md-4">
									<div class="form-group">
										<label for="cliente_direccion" class="bmd-label-floating">Dirección</label>
										<input type="text" pattern="[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ#- ]{1,150}" class="form-control" name="cliente_direccion" id="cliente_direccion" maxlength="150">
									</div>
								</div>
							</div>
						</div>
					</fieldset>
					<br><br><br>
					<p class="text-center" style="margin-top: 40px;">
						<button type="reset" class="btn btn-raised btn-secondary btn-sm"><i class="fas fa-paint-roller"></i> &nbsp; LIMPIAR</button>
						&nbsp; &nbsp;
						<button type="submit" class="btn btn-raised btn-info btn-sm"><i class="far fa-save"></i> &nbsp; GUARDAR</button>
					</p>
				</form>
			</div>	

		</section>
	</main>
	
	
	<!--=============================================
	=            Include JavaScript files           =
	==============================================-->
	<!-- jQuery V3.4.1 -->
	<script src="../../assets/js/jquery-3.4.1.min.js" ></script>

	<!-- popper -->
	<script src="../../assets/js/popper.min.js" ></script>

	<!-- Bootstrap V4.3 -->
	<script src="../../assets/js/bootstrap.min.js" ></script>

	<!-- jQuery Custom Content Scroller V3.1.5 -->
	<script src="../../assets/js/jquery.mCustomScrollbar.concat.min.js" ></script>

	<!-- Bootstrap Material Design V4.0 -->
	<script src="../../assets/js/bootstrap-material-design.min.js" ></script>
	<script>$(document).ready(function() { $('body').bootstrapMaterialDesign(); });</script>

	<script src="../../assets/js/main.js" ></script>
</body>
</html>