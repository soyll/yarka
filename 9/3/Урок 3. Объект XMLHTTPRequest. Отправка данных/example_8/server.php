<?php
	// извлекаем и преобразуем в PHP-массив полученные данные
	$data = json_decode(file_get_contents("php://input"), true);

	// отправляем данные обратно клиенту
	print_r ($data);