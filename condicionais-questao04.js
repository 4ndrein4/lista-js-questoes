// 4) Escreva um programa que calcule as médias de 5 alunos.
let alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [80, 85, 70]],
    ["Aluno4", [60, 60, 60]],
    ["Aluno5", [100, 90, 80]]
];
for (let [nome, notas] of alunos) {
    let media = notas.reduce((a, b) => a + b) / notas.length;
    let status = media >= 70 ? "Aprovado" : "Reprovado";
    console.log(`${nome}, média ${media}, ${status}`);
}
