function verificaSeOChuteValido (chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
    }
    if (numeroForMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa está entre ${menorValor} e ${maiorValor}</div>`;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}
