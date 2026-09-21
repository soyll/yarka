<?php
	$header = getallheaders();
	// сервер просто вернет тип пересылаемых данных
	echo $header['Content-Type'];