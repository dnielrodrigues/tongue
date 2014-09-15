//APLICAÇÃO PARA gruposm.com.br
/*
 * Copyright: www.gibee.com.br
 * Author: @dnielrodrigues
 */

var drApp = (function(){

    var module = {};

    //acao inicial
    module._init = function(){
        console.log('teste de modulo');
    };

    //mostrar opcoes de deck
    module._showHydeDeckOptions = function(){
        var $bs = document.getElementById('deck-list').getElementsByClassName('b-show-options');
        
        for (var i = 0; i < $bs.length; i++) {
            $bs[i].addEventListener('click', function(){
                //
                drLib.doubleChangeClassOnClick();
            },true);
        };

    };

    //Inicializa toda a aplicação
    module._init();

}());