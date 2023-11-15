// Escreva um programa que solicita ao usuário um número inteiro e verifica se esse número atende aos seguintes critérios, sem nenhuma exceção:

// É um número par.
// É um número positivo (maior que zero).
// É um número menor que 100.

// O programa deve imprimir a mensagem "O número atende aos critérios.", se o número atender a todos os critérios acima, caso contrário, deve imprimir a mensagem "O número não atende aos critérios.".


var numero = prompt('Escreva seu número:');
var modulo = numero % 2;

if (modulo === 0 && numero >= 0 && numero < 100) {
    alert('O número atende aos critérios.')
} else {
    alert('O número não atende aos critérios.');
}