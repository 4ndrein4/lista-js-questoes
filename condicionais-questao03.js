// 3) Escreva um programa que realize uma iteração entre 0 e 99 e exiba a soma de todos os números pares e ímpares.
let somaPares = 0, somaImpares = 0;
for (let i = 0; i <= 99; i++) {
    if (i % 2 === 0) somaPares += i; else somaImpares += i;
}
console.log(somaPares, somaImpares);
