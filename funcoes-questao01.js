// 1) Escreva uma função que receba um número e retorne o número invertido. O uso de switch case é necessário.
function inverterNumero(num) {
    let str = String(num);
    let invertido = "";
    for (let i = str.length - 1; i >= 0; i--) {
        switch (str[i]) {
            default:
                invertido += str[i];
                break;
        }
    }
    return Number(invertido);
}
console.log(inverterNumero(12356));
