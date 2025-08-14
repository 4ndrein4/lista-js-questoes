// 1) Escreva um programa em Javascript que exiba propriedades de data e hora no seguinte formato:
// ◦ Hoje é: [dia da semana].
// ◦ A hora atual é: [hora atual no formato de HH:MM:SS].
const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
const hoje = new Date();
console.log(`Hoje é: ${diasSemana[hoje.getDay()]}.`);
console.log(`A hora atual é: ${hoje.toLocaleTimeString("pt-BR")}`);
