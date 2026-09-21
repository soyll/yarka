<!DOCTYPE html>
<html lang="ru">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Программирование в среде JavaScript</title>
</head>
<body>
	<header align="center">
		<h1>Работа с браузером. Browser Object Model (BOM)</h1>
	</header>
		
	<h3>Сервер принял данные:</h3>

	<?php 
		echo "<h3>Серверная переменная REQUEST_URI</h3>";
		echo $_SERVER["REQUEST_URI"];
	
		echo "<h3>GET-параметры строки запроса</h3>";
		echo "<pre>";
		print_r($_GET);
		echo "</pre>";
		
		/*
			обратите внимание, hash-параметр:
			-- в адресной строке присутствует
			-- на сервер не отправляется
		*/
	?>	

    <footer align="center">
        <h3>Веб-разработка от профессионалов. Программирование и дизайн</h3>
        <a href="https://vk.com/pechora_pro" target="_blank">pechora_PRO</a>
    </footer>	
</body>
</html>