/* 
 * Dr Centaur Module
 * @author Daniel Rodrigues
 * @dnielrodrigues
 * 
 * Este módulo cria a possibilidade de víncular itens dentro de uma lista de DOM elements com o item de mesma posição em outra lista.

    OBS: Todas as funcoes "...Action" possuem 4 parametros = {
        a: "elemento DOM ativo que disparou o evento",
        p: "elemento DOM passivo que corresponde ao aElement na lista passiva",
        aList : "array dos elementos ativos",
        pList : "array dos elementos passivos"
    }
    Isso possibilita construir funcoes para main, after e before que possam realizar grande variedade de tarefas (ver exemplos de uso)

 */

var drHexagramModule = {

    /*
     * :: ARGUMENTOS PARA INICIAR O MÓDULO ::
     * 
     * aList : "array dos elementos DOM de ativação (ativeList)",
     * pList : "array dos elementos DOM passivos (passiveList)",
     * eventType : "tipo de evento (click, hover, risize, etc)",
     * mainAction : "funcao principal a ser executada",
     * afterAction : "funcao a ser executada antes da mainAction",
     * beforeAction : "funcao a ser executada depois da mainAction"
     *
     */

    //atributos config do módulo
    aList : null,
    pList : null,
    eventType : null,
    mainAction : null,
    afterAction : null,
    beforeAction : null,

    init : function(args){
        /* 
         * FUNCAO QUE INICIA O MODULO
         * 
            var args = {
                aList : "array dos elementos DOM de ativação (ativeList)",
                pList : "array dos elementos DOM passivos (passiveList)",
                eventType : "tipo de evento (click, hover, risize, etc)",
                mainAction : "funcao principal a ser executada",
                afterAction : "funcao a ser executada antes da mainAction",
                beforeAction : "funcao a ser executada depois da mainAction"
            }
         */

        //teste existe elementos
        if (args.aList != null && args.pList != null && args.mainAction != null) {
            //seta config do modulo
            this.aList = args.aList;
            this.pList = args.pList;
            this.eventType = args.eventType;
            this.mainAction = args.mainAction;
            this.afterAction = args.afterAction;
            this.beforeAction = args.beforeAction;
            //executa eventos
            this.runEvents();
        };

    },

    runEvents : function(){
        //carrega elementos em variaveis
        var $actives = this.aList,
            $passives = this.pList,
            that = this;

        //Percorre cada item do array aList
        for (var i = 0; i < $actives.length; i++) {
            //executa evento de cada elemento
            (function($a,$p,that){
                $a.addEventListener(that.eventType, function() {
                    //executa as actions
                    that.playActions($a,$p);
                }, true);
            }($actives[i],$passives[i],that));
        };
    },

    playActions : function($a,$p){
        if( this.afterAction != null ) {this.afterAction($a,$p,this.aList,this.pList);}
        if( this.mainAction != null ) {this.mainAction($a,$p,this.aList,this.pList);}
        if( this.beforeAction != null ) {this.beforeAction($a,$p,this.aList,this.pList);}
    }
};