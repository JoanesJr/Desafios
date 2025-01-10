// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência
// ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


const reverseString = (input) => {
    const splitInput = input.split('');
    const reverseInput = new Array(splitInput.length);
    splitInput.forEach((character, index) => {
        reverseInput[splitInput.length-(index+1)] = character;
    });

    return reverseInput.join();
}

console.log(reverseString('paralelepipedo'));