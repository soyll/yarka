<?php
	// извлекаем и преобразуем в PHP-массив полученные данные
	$data = file_get_contents("php://input");

	// отправляем данные обратно клиенту
	print_r ($data);