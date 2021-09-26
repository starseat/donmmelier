<?php
    //header("Access-Control-Allow-Headers: X-Requested-With, X-Prototype-Version");
    
	$servername = "127.0.0.1";
	$username = "donmmelier";
	$password = "dondb!23";
    $dbname = "donmmelier";
    $dbport = 3306;

	$conn = mysqli_connect($servername, $username, $password, $dbname, $dbport);

	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
    }
?>
