//APLICAÇÃO PARA gruposm.com.br
/*
 * Copyright: www.gibee.com.br
 * Author: @dnielrodrigues
 */

var drApp = {

    //mostrar opcoes de deck
    showHydeDeckOptions : function(){

        var args = {

            //parametros para o módulo
            aList : document.getElementsByClassName("b-show-options"),
            pList : document.getElementsByClassName("deck-item"),
            eventType : "click",
            
            //Abrir Deck Clicado
            mainAction : function($b,$target,bList,targetList){
                //troca a classe
                $target.classList.toggle("open");
            },

            //Fechar o outros Decks não clicados
            afterAction : function($b,$target,bList,targetList){
                //loop decks
                for (var i = 0; i < targetList.length; i++) {
                    //testa target é o atual
                    if (targetList[i] != $target) {
                        //fecha o item
                        targetList[i].classList.remove("open");
                    };
                };
            }
        }

        //Usa o módulo DR Hexagram para esconder e ocultar as opcoes de deck
        drHexagramModule.init(args);

    },

};

//Executa toda a Aplicação
(function(){
    for (var i in drApp) {
        drApp[i]();
    }
})();



