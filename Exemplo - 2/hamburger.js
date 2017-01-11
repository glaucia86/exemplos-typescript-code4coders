/**
 * Arquivo: hamburger.ts
 * Data: 08/11/2016
 * Author: Glaucia Lemos
 *
 */
var hamburger = 'hamburger', //Tipo string   
calorias = 300, //Tipo Numérico
sabor = true; //Tipo Booleano
/** Opcionalmente você pode omitir o tipo de declaração. Por exemplo:
 * Ex.: var hamburger = 'hamburger'
 */
/** A Função espera o retorno do tipo string e inteiro.
 * Mas não retornará nada uma vez que o tipo da função está declarada como 'void'
 */
function pedido(comida, energia) {
    console.log(" Essa " + comida + " tem " + energia + " calorias!");
}
pedido(hamburger, calorias);
