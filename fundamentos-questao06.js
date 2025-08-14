// 6) Escreva um programa que encontre o número com maior quantidade de ocorrência em um array de números.
let arr = [1, 2, 2, 3, 3, 3, 4];
let contador = {};
let maxNum = arr[0], maxCount = 0;
for (let num of arr) {
    contador[num] = (contador[num] || 0) + 1;
    if (contador[num] > maxCount) {
        maxCount = contador[num];
        maxNum = num;
    }
}
console.log(maxNum);
