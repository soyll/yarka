<?php
	// декодируем JSON формат в массив PHP
	$order = json_decode($_GET['data'], true);

	// формируем строку для отправки клиенту
	$out = sprintf("
		<h2>Добрый день</h2>
		<h3>Вы отправили на сервер следующую информацию о заказе:</h3>
		Товар: <b>%s</b> <br />
		Бренд: <b>%s</b> <br />
		Цвет:<b>%s</b> <br />
		Страна: <b>%s</b> <br />
		Капюшон:  <b>%s</b> <br />
		Размер: <b>%s</b> <br />
		Цена: <b>%s</b> <br />
		<img src='images/%s' width='150px'>
	", 
		$order['title'],
		$order['brand'],
		$order['colour'],
		$order['country'],
		$order['hood'],
		$order['size'],
		$order['price'],
		$order['image']
	);
	
	// отправляем данные клиенту
	echo $out, "<h2>Спасибо за заказ!</h2>";