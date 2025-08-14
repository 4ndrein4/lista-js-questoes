// 7) Escreva um programa que receba uma frase, realize modificações em cada palavra e exiba a nova frase modificada.
let frase = "O sol está brilhando maravilhosamente";
let modificada = frase.split(" ").map(p => p.length < 5 ? p.toUpperCase() : p.toLowerCase()).join(" ");
console.log(modificada);
