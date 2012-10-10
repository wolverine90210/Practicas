<?php

$cant= $_POST["ntablas"];
$mult= $_POST["tope"];

echo "<strong>Se haran $cant tablas de multiplicar hasta el $mult</strong><br /><br /> ";

for($i=1; $i<=$cant; $i++){

	echo "

	<table border='1'>
	<caption>Tabla del ", $i, "</caption>";

	for($j=1; $j<=$mult; $j++){

		echo "<tr>
			<td>", $i ,"x", $j, "</td>
			<td>", $i*$j, "</td>
		      </tr>";
	}

	echo "

	</table>
	<br /><br />";
}


?>
