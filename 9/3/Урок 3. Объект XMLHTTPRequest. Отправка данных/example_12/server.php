<?php
	// отправим пользователю 
	// текстовые данные формы 
	$resp['data'] = $_GET;
	// информацию о загруженном файле
	$resp['file'] = $_FILES["file"];

	echo json_encode($resp);