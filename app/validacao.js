function verificaSeOChuteValido (chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        console.log('Valor inválido');
    }
    if (numeroForMaiorOuMenorPermitido(numero)) {
        console.log(`Valor inválido: o número secreto precisa está entre ${menorValor} e ${maiorValor}`);
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}
