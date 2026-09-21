<?php
  //подключаем шапку
  include("inc/header.php");
  //подключаем базу данных в файл
  include("connect.php");
  // запрос к базе данных
  $sql = "SELECT * FROM `index_page`";
  // выполняем запрос
  $result = $mysqli->query($sql);
  // обрабатываем данные полученные выполненным запросом
  foreach ($result as $item){
    echo $item["content"];
  }
  

  //подключаем подвал
  include("inc/footer.php");
?>