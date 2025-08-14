// 3) Escreva uma função que receba uma lista de 10 números e retorne o maior e o menor valor encontrado.
function maiorMenor(lista) {
    return { maior: Math.max(...lista), menor: Math.min(...lista) };
}
console.log(maiorMenor([1, 5, 9, 3, 7, 2, 8, 4, 6, 0]));
