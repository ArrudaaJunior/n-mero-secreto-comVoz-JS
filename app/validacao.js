// Função principal que verifica se o chute é válido
function verificaSeOChuteValido(chute) {
    // Converte o chute para um número
    const numero = +chute;

    // Verifica se o chute foi "GAME OVER"
    if (chute.toUpperCase() === "GAME OVER") {
        // Atualiza o conteúdo do corpo do documento para mostrar a mensagem de Game Over
        document.body.innerHTML =
            `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `;
        // Muda a cor de fundo para preto
        document.body.style.backgroundColor = "black";
        return; // Sai da função após mostrar a mensagem de Game Over
    }

    // Verifica se o chute é inválido
    if (chuteForInvalido(numero)) {
        // Adiciona uma mensagem de valor inválido ao elemento chute
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
        return; // Sai da função caso o chute seja inválido
    }

    // Verifica se o número está fora do intervalo permitido
    if (numeroForMaiorOuMenorPermitido(numero)) {
        // Adiciona uma mensagem indicando o intervalo válido
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return; // Sai da função caso o número esteja fora do intervalo
    }

    // Verifica se o número chutado é igual ao número secreto
    if (numero === numeroSecreto) {
        // Atualiza o corpo do documento para mostrar uma mensagem de sucesso
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        // Se o número chutado for maior que o número secreto, adiciona uma dica
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
    } else {
        // Se o número chutado for menor que o número secreto, adiciona uma dica
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
    }
}

// Função que verifica se o número é inválido (não é um número)
function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

// Função que verifica se o número está fora do intervalo permitido
function numeroForMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

// Adiciona um evento de clique ao corpo do documento
document.body.addEventListener('click', e => {
    // Verifica se o elemento clicado tem o id 'jogar-novamente'
    if (e.target.id === 'jogar-novamente') {
        // Recarrega a página para começar um novo jogo
        window.location.reload();
    }
});