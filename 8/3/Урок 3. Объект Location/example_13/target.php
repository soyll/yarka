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

	<h2>Работает PHP!</h2>
	<!-- этот сценарий выполнится на сервере PHP-движком -->
	<?php
		// выводим значения в браузер 
		echo <<<HERE
			Тема: {$_GET["topic"]}<br>
			Урок: {$_GET["lesson"]}<br>
			Раздел: {$_GET["section"]}
		HERE;
	?>
	
	<h2>Работает JS!</h2>	
	<!-- этот сценарий выполнится на клиенте JS-движком -->
	<script>
		// получаем массив параметров
		search = location.search.substr(1).split('&');

		arr = new Array();

		// сохраняем значения параметров в массив
		for (par of search) {
			arr.push(par.split("=")[1]);
		}

		// выводим значения в браузер 
		document.write(`
			Тема: ${arr[0]}<br>
			Урок: ${arr[1]}<br>
			Раздел: ${arr[2]}
		`);
	</script>

	<h2>Работает Браузер (построение DOM)!</h2>

    <footer align="center">
        <h3>Веб-разработка от профессионалов. Программирование и дизайн</h3>
        <a href="https://vk.com/pechora_pro" target="_blank">pechora_PRO</a>
    </footer>	
</body>
</html>
<h2>Никто не работает ;)</h2>