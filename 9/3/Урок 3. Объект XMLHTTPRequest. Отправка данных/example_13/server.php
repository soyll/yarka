<?php
# серверная часть базовой аутентификации
if ( (!isset($_SERVER['PHP_AUTH_USER'])) || 
	(!isset($_SERVER['PHP_AUTH_PW'])) || 
	($_SERVER['PHP_AUTH_USER'] != 'admin') || 
	($_SERVER['PHP_AUTH_PW']) != '12345') 
	{
		header("HTTP/1.1 401 Unauthorized");
		header("WWW-Authenticate: Basic realm='/'");
		exit('<h1>Get out of here...</h1>');
	} else {
		
		echo "<h1>Привет! Вы как здесь оказались? )</h1>";		
	
	}