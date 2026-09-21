<?php
	// проверка данных пользователя
	if ($_POST['login'] == 'admin' &&
		$_POST['pwd'] == 'qwerty@'
	){
		// пользователь авторизован
		echo "<h2>Добрый день {$_POST['login']}!</h2>";
		echo "<h3>Начните работу в режиме администратора</h3>";
	} else {
		// пользователь не прошел проверку и перенаправлен
		header("HTTP/1.1 302 Found");
		header("Location: http://js/redirect.php"); 
	}