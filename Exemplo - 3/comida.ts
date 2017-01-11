/**
 * Arquivo: comida.ts
 * Data: 08/11/2016
 * Author: Glaucia Lemos
 * 
 */

interface Comida {
    nome: string;
    calorias: number;
}


function pedido(comida: Comida): void {
  console.log("Seu pedido " + comida.nome + " tem " + comida.calorias + " calorias.");
}

var sorvete = {
  noeame: "sorvete", 
  calorias: 200
}

pedido(sorvete);