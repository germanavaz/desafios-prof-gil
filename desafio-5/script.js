
var numero = prompt('Escreva seu número:');
var modulo = numero % 2;

if (modulo === 0 && numero >= 0 && numero < 100) {
    alert('O número atende aos critérios.')
} else {
    alert('O número não atende aos critérios.');
}