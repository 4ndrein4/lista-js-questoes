// 13) Escreva um programa que leia uma lista de números, eleve cada um ao cubo e depois some o total.
let nums = [1, 2, 3];
let somaCubos = nums.map(x => x ** 3).reduce((a, b) => a + b, 0);
console.log(somaCubos);
