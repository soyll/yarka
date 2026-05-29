<?php
    include("connect.php");
    // генерируем уникальное имя файла
    $filename = md5(uniqid());
				
    // получаем расширение загружаемого файла
    $ext = pathinfo($_FILES["download"]["name"], PATHINFO_EXTENSION);

    // текущая временная директория
    $current_path = $_FILES["download"]["tmp_name"];
    
    // директория постоянного хранения
    $new_path = __DIR__ . '/upload/' . $filename . "." . $ext;

    // перемещаем файл в директорию постоянного хранения
    move_uploaded_file($current_path, $new_path);
    
    $sql = sprintf("INSERT INTO `feedback`(`id_feedback`, `name`, `phone`, `path`) VALUES (NULL,'%s','%s','%s')", $_POST['name'], $_POST['tel-number'], $new_path);
    $mysqli->query($sql);

    header("Location: /answer.php");
    exit;