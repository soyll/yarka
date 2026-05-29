<!DOCTYPE html>
<html lang="ru">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Программирование на языке PHP</title>
</head>
<body>

	<h1>Основы программирования</h1>
	
	<h1>Backend with Frontend</h1>
	
	<hr>
	<div id="con"></div>
	<hr>

	<!-- Внедрение клиентского скрипта -->
	<script>
		// определение клиентских переменных
		let surname = "Номеров";
		let name = "Антон";
		let patronomyc = "Сергеевич";
		let full_name = surname + " " + name + " " + patronomyc;
		
		str = "<h2>Вывод результата клиентского скрипта в браузер</h2>";
		str += "<button onclick=\"alert('Привет, '+ full_name +'')\">Нажми на меня</button>";

		// вывод контента в браузер
		document.getElementById("con").innerHTML = str;
	</script>	

	<!-- Внедрение серверного скрипта -->
	<?php
		// определение серверных переменных
		$login = "master";
		$password = "12345";
		$role = "admin";
		// вывод контента в браузер
		echo "
		<h2>Вывод результата cерверного скрипта в браузер</h2>
		<h3>Успешный вход!</h3>
		Ваш логин: $password <br>
		Ваш пароль: $login <br>
		Ваша роль: $role ";	
	?>		
	
	<footer align="center">
		<h3>Дизайн | Верстка | Веб-программирование</h3>
		<a href="https://vk.com/pechora_pro" target="_blank">pechora_PRO</a>
	</footer>
</body>
</html>