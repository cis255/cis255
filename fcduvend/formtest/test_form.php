<?php
$getprefix = $_GET['prefix'];
$issir = $_GET['prefix'] == "Sir";

if($getprefix == "I" || $getprefix == "II" || $getprefix == "III")
  $getprefix = "the " . $getprefix;

if($issir)
  echo "Hello, Sir " . $_GET['firstname'] . ' ' . $_GET['lastname'] . '!';
else
  echo "Hello, " . $_GET['firstname'] . ' ' . $_GET['lastname'] . ' ' . $getprefix . '!';
?>
