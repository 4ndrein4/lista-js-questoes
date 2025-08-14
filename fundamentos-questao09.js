// 9) Escreva um programa que calcule a soma dos tamanhos de todas as palavras em uma frase.
let frase2 = "Eu gosto de programar";
let soma = frase2.split(" ").reduce((acc, palavra) => acc + palavra.length, 0);
console.log(soma);
