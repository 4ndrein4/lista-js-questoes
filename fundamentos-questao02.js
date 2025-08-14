// 2) Escreva um programa em Javascript que calcule a área de um triângulo.
let a = 5, b = 6, c = 7;
let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(area);
