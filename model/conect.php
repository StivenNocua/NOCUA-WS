<?php
include("setting.php");

$conex = new mysqli($server,$user,$password,$bd);
if (mysqli_connect_error()) {
	echo "No se pudo conectar", mysqli_connect_error();
	exit();
}
?>