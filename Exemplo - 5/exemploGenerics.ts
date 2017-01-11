/**
 * Arquivo: exemploGenerics.ts
 * Data: 11/01/2017
 * Author: Glaucia Lemos
 * 
 */

/* O <T> após a função simboliza que é uma função genérica.
    Quando chamamos a função, cada instância de T será substituída pelo
    tipo atual fornecido. */

/** Aqui ele irá receber um argumento do tipo T,
 *  Depois retorna uma matriz do tipo T
 */
function funcaoGenerica<T>(arg: T): T[] {
    var arrayT: T[] = []; //Aqui estamos criando um array do tipo T.
    arrayT.push(arg);     //Agora o 'arrayT receberá o 'arg'
    return arrayT;
}

var arrayString = funcaoGenerica<string>("Atchim!!!!!");
console.log(arrayString[0]); //"Atchim"
console.log(typeof arrayString[0]); //string

var arrayNumero = funcaoGenerica(30);
console.log(arrayNumero[0]); //30
console.log(typeof arrayNumero[0]); //number