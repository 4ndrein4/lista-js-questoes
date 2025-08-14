// 1) Escreva um programa que compare dois números e diga qual o maior. Se um dos números for ímpar, ele deve sempre ser considerado maior.
let x = 4, y = 7;
if (x % 2 !== 0) {
    console.log(x);
} else if (y % 2 !== 0) {
    console.log(y);
} else {
    console.log(x > y ? x : y);
}
