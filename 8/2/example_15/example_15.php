<?php
	// подключение к СУБД
	$mysqli = new mysqli('localhost', 'root', '', 'db_distance');	
	// строка запроса к базе данных
	$select = "SELECT *	FROM `personnel`";	
	$res = $mysqli->query($select);

	$html = '';

	// формирование списка педагогов образовательного заведения
	while ($row = $res->fetch_assoc()) {
		$html .= "
			<li>
			<a href='#' data-id={$row['id_personnel']} onclick='fnSend()'>
			{$row['surname']} {$row['name']} {$row['patronymic']}</a>
			</li>"; 
	}
?>

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
		// вывод списка 
		echo '<ul>' . $html . '</ul>';
	?>

	<script>		
		// функция-обработчик клика по ссылке
		function fnSend() {
			// получаем id ссылки
			let id = event.target.dataset.id;
			// передаем в всплывающее окно идентификатор педагога
			window.open(`target.php?id=${id}`, "pupUp", "width=600,height=700");	
		}
	</script>
	
    <footer align="center">
        <h3>Веб-разработка от профессионалов. Бесплатные курсы</h3>
        <a href="https://vk.com/pechora_pro" target="_blank">pechora_PRO</a>
    </footer>	
</body>
</html>