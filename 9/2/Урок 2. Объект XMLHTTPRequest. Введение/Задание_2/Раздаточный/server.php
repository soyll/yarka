<?php
	//
	$albums = [
		[
			"id" => "1",
			"name" => "Atom Heart Mother",
			"date" => "10 октября 1970", 
			"label" => "EMI, Harvest, Capitol",
			"format" => "LP, CD",
			"status" => "Золотой (USA)"
		],

		[
			"id" => "2",
			"name" => "Meddle",
			"date" => "30 октября 1971",
			"label" => "EMI, Harvest, Capitol",
			"format" => "Vinyl, кассета, CD",
			"status" => "Платиновый (USA)"
		],

		[
			"id" => "3",
			"name" => "Obscured by Clouds",
			"date" => "3 июня 1972",
			"label" => "EMI, Harvest, Capitol",
			"format" => "LP, кассета, CD",
			"status" => "Золотой (USA), Серебряный (GBR)"
		],

		[
			"id" => "4",
			"name" => "The Dark Side Od The Moon",
			"date" => "17 марта 1973",
			"label" => "Harvest, Capitol, EMI",
			"format" => "LP, кассета, CD, SACD",
			"status" => "Платиновый (USA), Платиновый (GBR), Бриллиантовый (CAN)"
		],

		[
			"id" => "5",
			"name" => "Wish You Were Here",
			"date" => "15 сентября 1975",
			"label" => "Harvest, EMI, Columbia, Capitol",
			"format" => "LP, 8-track, кассета, CD, SACD",
			"status" => "Платиновый (USA), Золотой (GBR), Платиновый (CAN)"
		],

		[
			"id" => "6",
			"name" => "Animals",
			"date" => "23 января 1977",
			"label" => "Harvest, EMI, Columbia, Capitol",
			"format" => "LP, 8-track, кассета, CD",
			"status" => "Платиновый (USA), Золотой (GBR), Платиновый (CAN)"
		],

		[
			"id" => "7",
			"name" => "The Wall",
			"date" => "30 ноября 1979",
			"label" => "Harvest, EMI, Columbia, Capitol",
			"format" => "LP, 8-track, кассета, CD",
			"status" => "Платиновый (USA), Платиновый (GBR), Бриллиантовый (CAN)"
		],

		[
			"id" => "8",
			"name" => "The Final Cut",
			"date" => "21 марта 1983",
			"label" => "Harvest, EMI, Columbia, Capitol",
			"format" => "LP, 8-track, кассета, CD",
			"status" => "Платиновый (USA), Золотой (GBR)"
		],

		[
			"id" => "9",
			"name" => "A Momentary Lapse of Reason",
			"date" => "8 сентября 1987",
			"label" => "EMI, Columbia",
			"format" => "LP, кассета, CD",
			"status" => "Платиновый (USA), Золотой (GBR), Платиновый (CAN)"
		],

		[
			"id" => "10",
			"name" => "The Division Bell",
			"date" => "30 марта 1994",
			"label" => "EMI, Columbia",
			"format" => "LP, кассета, CD",
			"status" => "Платиновый (USA), Платиновый (GBR), Платиновый (CAN)"
		]
	];

	echo json_encode($albums);