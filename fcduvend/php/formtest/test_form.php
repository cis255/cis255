<?php
function colorp($text, $color) {
  return "<p style=\"color: " . $color . ";\">" . $text . "</p>";
}

function translateRoman($roman) {
  return $roman == "I"   ? "first"  : 
         $roman == "II"  ? "second" : 
         $roman == "III" ? "third"  : $roman;
}

$getprefix = $_GET['prefix'];
$issir = $getprefix == "Sir";
$isking = $getprefix == "King";

if($getprefix == "I" || $getprefix == "II" || $getprefix == "III")
  $getprefix = 'the ' . translateRoman($getprefix);

if($issir)
  echo colorp("Hello, Sir " . $_GET['firstname'] . ' ' . $_GET['lastname'] . '!', "blue");
elseif($isking)
  echo colorp("&#9812;Hello, King " . $_GET['lastname'] . '!&#9812;', "red");
else
  echo colorp("Hello, " . $_GET['firstname'] . ' ' . $_GET['lastname'] . ' ' . $getprefix . '!', "green");
?>
