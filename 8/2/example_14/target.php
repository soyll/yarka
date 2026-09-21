<!DOCTYPE html>
<html lang="ru">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Программирование в среде JavaScript</title>
</head>
<body> 
	<header align="center">
		<h1>Работа с браузером. BOM</h1>
	</header>

	<?php
	// формируем ответ на стороне сервера
	echo <<<HERE
			<h2>{$_POST['citate']} 
 			({$_POST['firstName']} {$_POST['secondName']}).
			</h2>
HERE;
	?>

    <footer align="center">
        <h3>Веб-разработка от профессионалов. Бесплатные курсы</h3>
        <a href="https://vk.com/pechora_pro" target="_blank">pechora_PRO</a>
    </footer>	
</body>
</html>