function adicionar(x, y) {
    return x + y;
}

function subtracao(x, y) {
    return x - y;
}

function multiplicacao(x, y) {
    return x * y;
}

function divisao(x, y) {
    return x / y;
}

console.log("Calculadora");

console.log(adicionar(4, 6));
console.log(subtracao(16, 8));
console.log(multiplicacao(6, 10));
console.log(divisao(12, 5));

console.log(divisao(10, 2));

// calculo quadrado do número

function quadradoDoNumero(x) {
    return multiplicacao(x, x);
}

console.log(quadradoDoNumero(12));

// calculo média

function MediaDeTresNumeros(x, y, z) {
    return (divisao((adicionar(x, y) + z), 3))
}

console.log(MediaDeTresNumeros(12, 20, 28));

// calculo porcentagem

function calculaPorcentagem(x, y) {
    return totalPorcentagem = multiplicacao(x, divisao(y, 100))
}

console.log(calculaPorcentagem(400, 50))

// gerador de porcentagem

function geradorDePorcentagem(x, y) {
    return multiplicacao(divisao(x, y), 100)
}

console.log(geradorDePorcentagem(100, 250));