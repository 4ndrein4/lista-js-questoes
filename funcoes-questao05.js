// 5) Escreva uma função que receba uma frase e determine qual a maior palavra encontrada.
function maiorPalavra(frase) {
    let palavras = frase.split(" ");
    let maior = palavras[0];
    for (let p of palavras) {
        if (p.length > maior.length) maior = p;
    }
    return maior;
}
console.log(maiorPalavra("Eu amo programação avançada"));
