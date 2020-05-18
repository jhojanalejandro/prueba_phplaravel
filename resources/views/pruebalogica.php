<?php
 function obtenermultipplpos($numerodado){
    $multiplotres=0;
    $multiplocinco=0;
    for($i=0;$i<$numerodado;$i++){
        if($i% 3==0){
        $multiplotres += $i;

        }  if($i% 5==0){
            $multiplocinco += $i;


            }

            $multiplocinco += $multiplotres;
            return  $multiplocinco;
    }
    function obtenermayus(){
        $multiplotres="";
        ucwords($multiplotres);

        return  $multiplotres;
        }






}




?>
