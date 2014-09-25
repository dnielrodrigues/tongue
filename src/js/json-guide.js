/*

localStorage.setItem(nome, valor): esta função é utilizada para armazenar um valor no local storage. Cada objeto gravado é referenciado por uma chave (nome).
localStorage.getItem(nome): por sua vez, o getItem é usado para recuperar um valor armazenado a partir da sua chave identificadora.
JSON.stringfy(objeto): para armazenar os dados, utilizaremos o formato JSON e esta função transforma um objeto em string com sintaxe adequado ao JSON.
JSON.parse(objeto): já a função parse transforma um item no formato JSON no seu formato original.

*/




//exemplo de json
user = {
    "user_data" : [
        // ...
        decksIdCount : 00,
        foldersIdCount : 00,
        cardsIdCount : 00
    ],

    "decks_and_folders" : [
        {
            id : 00,
            type : "d", //D = deck //F = folder
            title : "nome do deck",
            active : true, //false = deletado
            cards : [
                { id:00 , content:"ipsum loren" , translate:"ipsum loren", active : true },
                { id:00 , content:"ipsum loren" , translate:"ipsum loren", active : true },
                { id:00 , content:"ipsum loren" , translate:"ipsum loren", active : true },
            ]
        },

        {
            id : 00,
            type : "f", //D = deck //F = folder
            title : "nome da pasta",
            active : true,
            childs : [
                { id : 00, type : "d", title : "nome do deck", active : true, cards : [ /*...*/ ]},
                { id : 00, type : "f", title : "nome do deck", active : true, childs : [ /*...*/ ]},
            ]
        },
    ],

    "gameHistory" : [
        {
            id : 00,
            deckId : 00,
            date : "09/13/2014",
            points : 00,
            time : 1000,
            timeAverage : 1000,
            hits : 00,
            erros : 00,
        }
        // ...
    ],

    "updates" : [
        {
            id : 00,
            type : "d", //D = deck //F = folder //C = cards //U = user //G = game
            date : "00/00/000",
            hour : 0000,
            itemId : 00,
            previousObj : {},
        }
    ]
}















