console.log('ok');

var decksModule = {

    //CONSTANTES DO MODULO
    tbDecks : localStorage.getItem("decks_and_folders"), // Recupera os dados armazenados

    init : function(){
        // Caso não haja conteúdo
        if(this.tbDecks == null){
            this.tbDecks = [];
        // Converte string para objeto
        }else{
            this.tbDecks = JSON.parse(this.tbDecks);
        }
    },

    createDeck : function(obj){
        this.tbDecks.push({
            id : 00,
            type : "d", //D = deck //F = folder
            title : "nome do deck",
            active : true, //false = deletado
            cards : [
                { id:00 , content:"ipsum loren" , translate:"ipsum loren", active : true },
                { id:00 , content:"ipsum loren" , translate:"ipsum loren", active : true },
                { id:00 , content:"ipsum loren" , translate:"ipsum loren", active : true },
            ]
        });
    },

    updateDeck : function(){
        //
    },

    readDeck : function(){
        //
    },

    deleteDeck : function(){
        //
    }

    //
}