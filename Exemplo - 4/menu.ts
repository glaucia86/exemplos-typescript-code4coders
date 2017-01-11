/**
 * Arquivo: menu.ts
 * Data: 11/01/2017
 * Author: Glaucia Lemos
 * 
 */

class Menu {
    /* Nossas propriedades
    que por default são públicas (public), mas que ao mesmo podem ser também
    private ou protected */
    itens: Array<string> //aqui estamos declarando um array... uma vez que vamos ter inúmeros menus.. :)
    paginas: number;     //aqui estamos definindo a quantidade de páginas terá o menu.
    
    /**
     * Aqui estamos definindo um construtor simples
     */
    constructor(lista_itens: Array<string>, total_paginas: number) {
        this.itens = lista_itens;
        this.paginas = total_paginas;   
    }

    /* Métodos */
    lista(): void {
        console.log("Nosso menu de Hoje é:");
        for(var i = 0; i < this.itens.length; i++) {
            console.log(this.itens[i]);
        }
    }
}

/* Aqui vamos criar uma nova instância para a classe Menu */
/* Lembrando que aqui devemos passar 2 parâmetros: os itens da lista e o número de páginas;) */
var menuDomingo = new Menu(["Hamburger", "CheeseCake", "Bolo de Cenoura", "Espaguete"], 1)

/* E aqui finalmente, fazermos a chamada do método :D * */
menuDomingo.lista();