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

        this.showHydeDeckOptions();
    };

    //mostrar opcoes de deck
    module.showHydeDeckOptions = function(){

        //testar se elementos existem
        if ( drLib.testNodeElementsByClass('b-show-options','deck-list') ) {
            //carrega botoes em variaveis
            var $bts = document.getElementById('deck-list').getElementsByClassName('b-show-options');
            var $targets = document.getElementById('deck-list').getElementsByClassName('deck-item');

            //loop dos botoes
            for (var i = 0; i < $bts.length; i++) {
                //cria um escopo para cada laço 
                (function($b){
                    //evento clique
                    $b.addEventListener('click', function(){
                        //carrega alvos em variavel
                        var $target = $b.parentNode;
                        //exibe opcoes
                        drLib.doubleChangeClassOnClick({
                            b : $b,
                            eTarget : $target,
                            class1 : "deck-item",
                            class2 : "deck-item-open"
                        });
                    },true);
                } ($bts[i]) );
            };
        };

    };

    //Inicializa toda a aplicação
    module._init();

}());