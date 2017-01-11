/**
 * Arquivo: hamburger.ts
 * Data: 08/11/2016
 * Author: Glaucia Lemos
 * 
 */

var hamburger: string = 'hamburger', //Tipo string   
    calorias: number = 300,          //Tipo Numérico
    sabor: boolean = true            //Tipo Booleano

/** Opcionalmente você pode omitir o tipo de declaração. Por exemplo:
 * Ex.: var hamburger = 'hamburger'
 */

/** A Função espera o retorno do tipo string e inteiro.
 * Mas não retornará nada uma vez que o tipo da função está declarada como 'void'
 */
function pedido (comida: string, energia: number): void {

    console.log(" Essa " + comida + " tem " + energia + " calorias!");
}

pedido(hamburger, calorias);

