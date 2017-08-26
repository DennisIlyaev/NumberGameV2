<?php
$myFile = fopen("topRecord.txt", "w");
$text = $_POST[newText];

fwrite($myFile, $text);

fclose($myFile);


?>