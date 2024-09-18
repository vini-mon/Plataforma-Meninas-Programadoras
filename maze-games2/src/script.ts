// import * as Blockly from 'blockly';
// import 'blockly/javascript';
// import {javascriptGenerator} from 'blockly/javascript';

// interface Maze {
//     cells: number[][];
// }

// window.onload = () => {

//     const blocklyDiv = document.getElementById('blocklyDiv') as HTMLElement;
//     const output = document.getElementById('output') as HTMLElement;

//     console.log('Blockly:', Blockly);
//     console.log('Blockly.JavaScript:', javascriptGenerator);

//     if (!blocklyDiv) {
//         console.error('Elemento blocklyDiv não encontrado.');
//         return;
//     }

//     const toolbox = `
//     <xml id="toolbox">
//     <category name="Movimento" colour="#5C81A6">
//         <block type="move_up"></block>
//         <block type="move_right"></block>
//         <block type="move_down"></block>
//         <block type="move_left"></block>
//     </category>
//     <category name="Controle" colour="#FFAB19">
//         <block type="controls_whileTrue"></block>
//     </category>
//     </xml>
//     `;

//     // Inicializando o Blockly
//     const workspace = Blockly.inject(blocklyDiv, {
//         toolbox: toolbox
//     });

//     Blockly.Blocks['move_up'] = {
//         init: function () {
//             this.appendDummyInput().appendField('Mover para cima');
//             this.setPreviousStatement(true, null);
//             this.setNextStatement(true, null);
//             this.setColour(160);
//             this.setTooltip('');
//             this.setHelpUrl('');
//         }
//     };


//     Blockly.Blocks['move_right'] = {
//         init: function () {
//             this.appendDummyInput().appendField('Mover para a direita');
//             this.setPreviousStatement(true, null);
//             this.setNextStatement(true, null);
//             this.setColour(160);
//             this.setTooltip('');
//             this.setHelpUrl('');
//         }
//     };

//     Blockly.Blocks['move_down'] = {
//         init: function () {
//             this.appendDummyInput().appendField('Mover para baixo');
//             this.setPreviousStatement(true, null);
//             this.setNextStatement(true, null);
//             this.setColour(160);
//             this.setTooltip('');
//             this.setHelpUrl('');
//         }
//     };

//     Blockly.Blocks['move_left'] = {
//         init: function () {
//             this.appendDummyInput().appendField('Mover para a esquerda');
//             this.setPreviousStatement(true, null);
//             this.setNextStatement(true, null);
//             this.setColour(160);
//             this.setTooltip('');
//             this.setHelpUrl('');
//         }
//     };

//     Blockly.Blocks['controls_whileTrue'] = {
//         init: function () {
//             this.appendDummyInput().appendField('Enquanto verdadeiro');
//             this.appendStatementInput('DO').setCheck(null);
//             this.setColour(230);
//             this.setPreviousStatement(true, null);
//             this.setNextStatement(true, null);
//             this.setTooltip('');
//             this.setHelpUrl('');
//         }
//     };

//     function moveUp() {
//         if (maze.cells[playerPosition.y - 1][playerPosition.x] !== 1) {
//             playerPosition.y -= 1;
//             drawMaze(maze, context!);
//         }
//     }

//     function moveRight() {
//         if (maze.cells[playerPosition.y][playerPosition.x + 1] !== 1) {
//             playerPosition.x += 1;
//             drawMaze(maze, context!);
//         }
//     }

//     function moveDown() {
//         if (maze.cells[playerPosition.y + 1][playerPosition.x] !== 1) {
//             playerPosition.y += 1;
//             drawMaze(maze, context!);
//         }
//     }

//     function moveLeft() {
//         if (maze.cells[playerPosition.y][playerPosition.x - 1] !== 1) {
//             playerPosition.x -= 1;
//             drawMaze(maze, context!);
//         }
//     }

//     const teste = javascriptGenerator ;

//     // Adicionando o gerador de código JavaScript para os blocos
//     teste['move_up'] = function (block: Blockly.Block) {
//         return 'moveUp();\n';
//     };
    
//     (Blockly.JavaScript as any)['move_right'] = function (block: Blockly.Block) {
//         return 'moveRight();\n';
//     };

//     (Blockly.JavaScript as any)['move_down'] = function (block: Blockly.Block) {
//         return 'moveDown();\n';
//     };

//     (Blockly.JavaScript as any)['move_left'] = function (block: Blockly.Block) {
//         return 'moveLeft();\n';
//     };

//     (Blockly.JavaScript as any)['controls_whileTrue'] = function (block: Blockly.Block) {
//         const branch = javascriptGenerator.statementToCode(block, 'DO');
//         return 'while (true) {\n' + branch + '}\n';
//     };

    

//     // Função que roda o código gerado pelo Blockly
//     function runCode() {
//         const code = javascriptGenerator.workspaceToCode(workspace);
//         console.log('Código gerado:', code);
//         eval(code);  // Executa o código gerado pelo Blockly
//         checkWin();  // Verifica se o jogador chegou à saída
//     }

//     // Função que verifica se o jogador chegou à saída
//     function checkWin() {
//         if (maze.cells[playerPosition.y][playerPosition.x] === 2) {
//             document.getElementById('message')!.innerHTML = 'Parabéns! Você chegou à saída!';
//         }
//     }

//     // Listener do botão de rodar código
//     document.getElementById('runButton')!.addEventListener('click', () => {
//         runCode();
//     });

//     // Funções para mover o personagem no labirinto
//     let playerPosition = { x: 1, y: 1 };  // Posição inicial do personagem

//     const canvas = document.getElementById('mazeCanvas') as HTMLCanvasElement;
//     const context = canvas.getContext('2d');
    
//     let maze: Maze = { cells: [] };  // Inicializa como um labirinto vazio

//     function setMaze(loadedMaze: Maze) {
//         maze = loadedMaze;
//         drawMaze(maze, context!);
//     }

//     if (context) {
//         fetch('labirinto.json')
//             .then(response => response.json())
//             .then((loadedMaze: Maze) => {
//                 setMaze(loadedMaze);
//             })
//             .catch(error => console.error('Erro ao carregar o labirinto:', error));
//     } else {
//         console.error('Erro: contexto 2D não suportado ou canvas não encontrado.');
//     }

//     function drawMaze(maze: Maze, context: CanvasRenderingContext2D) {
//         const cellSize = 50;
//         context.clearRect(0, 0, context.canvas.width, context.canvas.height);
//         maze.cells.forEach((row: number[], rowIndex: number) => {
//             row.forEach((cell: number, colIndex: number) => {
//                 context.fillStyle = cell === 1 ? 'black' : 'white';
//                 context.fillRect(colIndex * cellSize, rowIndex * cellSize, cellSize, cellSize);
//             });
//         });

//         // Desenhando o jogador
//         context.fillStyle = 'blue';
//         context.fillRect(playerPosition.x * cellSize, playerPosition.y * cellSize, cellSize, cellSize);
//     }

// };
