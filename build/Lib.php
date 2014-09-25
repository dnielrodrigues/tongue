<?php

class Lib {

    //RETORNA URL RAIZ DO PROJETO
    public static function urlRaiz(){
        $urlRaiz = "http://" . $_SERVER['SERVER_NAME'] . $_SERVER['PHP_SELF'];
        $urlRaiz = str_replace("/index.php", "", $urlRaiz);
        
        return $urlRaiz;
    }
    
    public static function getConnection(){
        //
    }
    
    public static function closeConnection(){
        //
    }

    public static function testQuery($res){
        if (!$res) {
            echo "</br><strong>Erro na consulta ao banco: </strong></br>" . mysql_error()."</br>";
        }
    }
    
}

?>