// Define o menor valor possível para o número secreto
const menorValor = 1;

// Define o maior valor possível para o número secreto
const maiorValor = 1000;

// Gera um número secreto aleatório dentro do intervalo definido
const numeroSecreto = gerarNumeroAleatorio();

// Obtém o elemento HTML que exibirá o menor valor
const elementoMenorValor = document.getElementById('menor-valor');

// Obtém o elemento HTML que exibirá o maior valor
const elementoMaiorValor = document.getElementById('maior-valor');

// Função que gera um número aleatório entre 1 e o maior valor (inclusive)
function gerarNumeroAleatorio() {
    // Math.random() gera um número decimal entre 0 (inclusive) e 1 (exclusive)
    // Multiplicamos por maiorValor para escalar esse número para o intervalo desejado
    // parseInt arredonda o número para baixo para obter um inteiro
    // Adicionamos 1 para garantir que o valor mínimo seja 1 e o máximo seja maiorValor
    return parseInt(Math.random() * maiorValor + 1);
}

// Define o conteúdo do elemento HTML para mostrar o menor valor
elementoMenorValor.innerHTML = menorValor;

// Define o conteúdo do elemento HTML para mostrar o maior valor
elementoMaiorValor.innerHTML = maiorValor;

// Exibe o número secreto no console para fins de depuração
console.log('Número secreto:', numeroSecreto);