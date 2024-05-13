function calcularTempoDecorrido() {
    // Obter o tempo atual
    var tempoAtual = new Date().getTime();

    // Verificar se há um tempo inicial armazenado no armazenamento local
    var tempoInicial = localStorage.getItem('tempoInicial');

    // Se não houver tempo inicial, definir um novo
    if (!tempoInicial) {
        localStorage.setItem('tempoInicial', tempoAtual);
        tempoInicial = tempoAtual;
    }

    // Calcular o tempo decorrido em milissegundos
    var tempoDecorrido = tempoAtual - tempoInicial;

    // Converter o tempo decorrido para segundos
    var segundosDecorridos = Math.floor(tempoDecorrido / 1000);

    // Exibir o tempo decorrido a cada 10 segundos em um prompt
    if (segundosDecorridos % 10 === 0) {
        console.log("Tempo decorrido nesta página: " + segundosDecorridos + " segundos");
    }

    // Chamar a função novamente após 1 segundo
    setTimeout(calcularTempoDecorrido, 1000);
}

// Chamar a função quando a página for carregada
window.onload = calcularTempoDecorrido;