<?php
	// ассоциативный PHP-массив
	$album = 
		[
			"id" => "1",
			"name" => "Atom Heart Mother",
			"date" => "10 октября 1970", 
			"label" => "EMI, Harvest, Capitol",
			"format" => "LP, CD",
			"status" => "Золотой (USA)"
		];
	
	// преобразуем массив в JSON формат
	echo json_encode($album);