<?php
//ejercicio de la prueba
// ejercicio numero 1
//
$z = '2';
$h = &$z;
$h = "2$h";
//resultado = 21  (concatenacion de numeros)
echo $h
 // ejercicio numero 2
 //esta variable nos muestra toda la informacion de los datos como los tipo de datos y valores asigandos
 //los operadores == comparan el de la variable y === compara la variable y el tipo
 //el retorno seria tipo de dato booleano y el resultado de su comparacion
var_dump(0145 == 145);
var_dump('0145' == 145);
var_dump('0145' === 145);
var_dump('0145' === 146);

//ejercicio numero 3
//
$text = 'juan';
$text[10] = 'perez';
echo $text
//ejercicio numero 4
$a = "3j3mpl0";
$a = $a + 1;
echo $a


?>
