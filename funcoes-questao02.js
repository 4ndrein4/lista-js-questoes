// 2) Escreva uma função que receba uma frase e retorna a quantidade de vogais e consoantes presentes na frase.
function contarVogaisConsoantes(frase) {
    let vogais = "aeiouAEIOU";
    let v = 0, c = 0;
    for (let ch of frase) {
        if (/[a-zA-Z]/.test(ch)) {
            if (vogais.includes(ch)) v++; else c++;
        }
    }
    return { vogais: v, consoantes: c };
}
console.log(contarVogaisConsoantes("Olá mundo"));
