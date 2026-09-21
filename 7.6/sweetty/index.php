<?php
  //подключаем шапку
  include("inc/header.php");
  //подключаем базу данных в файл
  include("connect.php");


  $sql = "SELECT * FROM `index_page`";

  $result = $mysqli->query($sql);
  
  foreach ($result as $item){
    echo $item["content"];
  }
  

  //подключаем подвал
  include("inc/footer.php");
?>