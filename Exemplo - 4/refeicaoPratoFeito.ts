/**
 * Arquivo: refeicaoPratoFeito.ts
 * Data: 11/01/2017
 * Author: Glaucia Lemos
 * 
 */

/* a palavra reservada: extends - indica que estamos realizando herança com a classe Menu */
 class RefeicaoPratoFeito extends Menu {
    /**
     * Aqui vamos definir um novo construtor para a nossa classe
     */
    constructor(lista_itens: Array<string>, total_paginas:number) {
        /* Porém nesse caso, como estamos trabalhando com herança,
        precisamos da palavra reservada: super para que a classe subtende que este construtor
        é parente da classe Menu. */
        super(lista_itens, total_paginas);
    }

    /* Assim como as propriedades, os métodos também serão herdados da classe pai.
    Porém, nós iremos subscrever esse método e para isso vamos usar o 'override' :D */
    lista(): void {
        console.log("Nosso menu especial de hoje para quem quer pagar mais barato: ");
        for(var i = 0; i < this.itens.length; i++) {
            console.log(this.itens[i]);
        }
    }
}

/** Criaremos uma nova instância para a nossa classe: refeicaoPratoFeito */
var menuRefeicaoPratoFeito = new RefeicaoPratoFeito(['Arroz', 'Feijão', 'Batata Frita', 'Cebola', 'Tomate', 'Farofa'], 1);

/** Nesse caso aqui o log de mensagem começará com a mensagem especial */
menuRefeicaoPratoFeito.lista();