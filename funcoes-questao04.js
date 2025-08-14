// 4) Escreva uma função que receba uma frase e uma palavra. Determine se a palavra está presente na frase.
function contem(frase, palavra) {
    return frase.includes(palavra);
}
console.log(contem("Eu amo JavaScript", "JavaScript"));
