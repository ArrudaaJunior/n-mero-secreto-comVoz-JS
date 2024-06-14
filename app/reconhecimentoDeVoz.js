// Obtém o elemento HTML onde o chute será exibido
const elementoChute = document.getElementById('chute');

// Define a variável para o reconhecimento de fala, compatível com diferentes navegadores
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Cria uma nova instância do reconhecimento de fala
const recognition = new SpeechRecognition();

// Define o idioma do reconhecimento de fala para Português do Brasil
recognition.lang = 'pt-Br';

// Inicia o reconhecimento de fala
recognition.start();

// Adiciona um evento para lidar com os resultados do reconhecimento de fala
recognition.addEventListener('result', onSpeak);

// Função chamada quando há um resultado do reconhecimento de fala
function onSpeak(e) {
    // Obtém o texto transcrito da fala do usuário
    chute = e.results[0][0].transcript;
    // Exibe o chute na tela
    exibeChuteNaTela(chute);
    // Verifica se o chute é válido
    verificaSeOChuteValido(chute);
}

// Função para exibir o chute na tela
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `;
}

// Adiciona um evento para reiniciar o reconhecimento de fala quando ele termina
recognition.addEventListener('end', () => {
    recognition.start();
});