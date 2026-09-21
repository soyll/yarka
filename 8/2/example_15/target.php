<?php
	// подключение к СУБД
	$mysqli = new mysqli('localhost', 'root', '', 'db_distance');	
	
	// запрос к таблице personnel
	$select_personnel = "SELECT * FROM `personnel` WHERE `id_personnel` = " . $_GET['id'];	
	$res_personnel = $mysqli->query($select_personnel);
	$row = $res_personnel->fetch_assoc();

	// вывод контента
	echo <<<HERE
            <h2>{$row['surname']} {$row['name']} {$row['patronymic']}</h2>
            Должность: <b>{$row['post']}</b><br>
            Категория: <b>{$row['category']}</b><br>
            Уровень образования: <b>{$row['level_edu']}</b><br>	
            Рейтинг: <b>{$row['rating']}</b><br>	
HERE;

	// запрос к таблице education
	$select_edu = "SELECT * FROM `education` WHERE `id_personnel` = " . $_GET['id'];	
	$res_edu = $mysqli->query($select_edu);
	$rows = $res_edu->fetch_all(MYSQLI_ASSOC);

	echo '<h3>Образование</h3><hr>';
	
	// циклический вывод контента
	foreach ($rows as $row) {
		echo "
            <h3>{$row['institution']}</h3>
            Квалификация: <b>{$row['qualification']}</b><br>
            Специализация: <b>{$row['specialty']}</b> ({$row['years']})<br>
		"; 
	}	

	// запрос к таблице courses
	$select_course = "SELECT * FROM `courses` WHERE `id_personnel` = " . $_GET['id'];	
	$res_course = $mysqli->query($select_course);
	$rows = $res_course->fetch_all(MYSQLI_ASSOC);

	echo '<h3>Читаемые курсы</h3><hr>';
	
	// циклический вывод контента
	foreach ($rows as $row) {
		echo "
           	<h3>{$row['name']}</h3>
            Длительность: <b>{$row['duration']}</b> часов<br>
            Цена: <b>{$row['price']}</b> р.<br>
		"; 
	}
?>