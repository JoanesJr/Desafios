// 2) Dado a sequência de Fibonacci, onde se inicia por
// 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número,
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando
// se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const existsInFibonacci = (searchValue) => {
    if (isNaN(searchValue) || searchValue < 0 || searchValue % 1 != 0) {
        return "Não pertente a sequencia";
    }
    const fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] < searchValue) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }

    const existsInSequence = fibonacci.includes(searchValue);
    return existsInSequence ? 'Pertence a sequencia' : 'Não pertence a sequencia';
}



const searchValue = 8;
console.log(existsInFibonacci(searchValue));
