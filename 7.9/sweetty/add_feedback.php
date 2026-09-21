<?php
    include("connect.php");
    $filename = md5(uniqid());
				
    $ext = pathinfo($_FILES["download"]["name"], PATHINFO_EXTENSION);

    $current_path = $_FILES["download"]["tmp_name"];
    
    $new_path = __DIR__ . '/upload/' . $filename . "." . $ext;

    move_uploaded_file($current_path, $new_path);
    
    $sql = sprintf("INSERT INTO `feedback`(`id_feedback`, `name`, `phone`, `path`) VALUES (NULL,'%s','%s','%s')", $_POST['name'], $_POST['tel-number'], $new_path);
    $mysqli->query($sql);
    exit;