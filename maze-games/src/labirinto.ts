const canvas = document.getElementById('labirintoCanvas') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;

// Labirinto simples sem colecionáveis (0 = caminho, 1 = parede)
const labirinto = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1]
];

const blockSize = 50; // Tamanho de cada bloco do labirinto

// Função para desenhar o labirinto
function desenharLabirinto() {
  for (let row = 0; row < labirinto.length; row++) {
    for (let col = 0; col < labirinto[row].length; col++) {
      if (labirinto[row][col] === 1) {
        context.fillStyle = 'black'; // Parede
      } else {
        context.fillStyle = 'white'; // Caminho
      }
      context.fillRect(col * blockSize, row * blockSize, blockSize, blockSize);
      context.strokeStyle = 'gray';
      context.strokeRect(col * blockSize, row * blockSize, blockSize, blockSize);
    }
  }
}


desenharLabirinto();
