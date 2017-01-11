/**
 * Arquivo: menu.ts
 * Data: 11/01/2017
 * Author: Glaucia Lemos
 *
 */
var Menu = (function () {
    /**
     * Aqui estamos definindo um construtor simples
     */
    function Menu(lista_itens, total_paginas) {
        this.itens = lista_itens;
        this.paginas = total_paginas;
    }
    /* Métodos */
    Menu.prototype.lista = function () {
        console.log("Nosso menu de Hoje é:");
        for (var i = 0; i < this.itens.length; i++) {
            console.log(this.itens[i]);
        }
    };
    return Menu;
}());
/* Aqui vamos criar uma nova instância para a classe Menu */
/* Lembrando que aqui devemos passar 2 parâmetros: os itens da lista e o número de páginas;) */
var menuDomingo = new Menu(["Hamburger", "CheeseCake", "Bolo de Cenoura", "Espaguete"], 1);
/* E aqui finalmente, fazermos a chamada do método :D * */
menuDomingo.lista();
