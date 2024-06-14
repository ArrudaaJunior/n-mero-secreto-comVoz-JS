function verificaSeOChuteValido (chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if (numeroForMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa está entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    } else if (numeroMaior > numeroSecreto) {
        elementoChute.innerHTML += `
            <div> O número secreto é menor <i class="fa-solid fa-arrow-dow"></i></div>
        `
    } else {
        `<div> O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}
