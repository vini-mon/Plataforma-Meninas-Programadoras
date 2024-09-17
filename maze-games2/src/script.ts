import * as Blockly from 'blockly';
import JsGenerator from 'blockly/javascript'
// import 'blockly/javascript';    // Importa o gerador JavaScript
// import 'blockly/core';          // Importa o núcleo do Blockly

interface Maze {
    cells: number[][];
}

window.onload = () => {

    const blocklyDiv = document.getElementById('blocklyDiv') as HTMLElement;
    const output = document.getElementById('output') as HTMLElement;

    console.log('Blockly:', Blockly);
    console.log('Blockly.JavaScript:', Blockly.JavaScript);


    if (!blocklyDiv) {
        console.error('Elemento blocklyDiv não encontrado.');
        return;
    }

    const toolbox = `
    <xml id="toolbox">
    <category name="Movimento" colour="#5C81A6">
        <block type="move_up"></block>
        <block type="move_right"></block>
        <block type="move_down"></block>
        <block type="move_left"></block>
    </category>
    <category name="Controle" colour="#FFAB19">
        <block type="controls_whileTrue"></block>
    </category>
    </xml>
    `;

    // Inicializando o Blockly
    const workspace = Blockly.inject(blocklyDiv, {
        toolbox: toolbox
    });

    // Blocos personalizados para o jogo
    Blockly.Blocks['move_up'] = {
        init: function () {
            this.appendDummyInput().appendField('Mover para cima');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
    
    Blockly.Blocks['move_right'] = {
        init: function () {
            this.appendDummyInput().appendField('Mover para a direita');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
    
    Blockly.Blocks['move_down'] = {
        init: function () {
            this.appendDummyInput().appendField('Mover para baixo');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
    
    Blockly.Blocks['move_left'] = {
        init: function () {
            this.appendDummyInput().appendField('Mover para a esquerda');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
  
    Blockly.Blocks['controls_whileTrue'] = {
        init: function () {
            this.appendDummyInput().appendField('Enquanto verdadeiro');
            this.appendStatementInput('DO').setCheck(null);
            this.setColour(230);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };
/*
    // Verificar se Blockly.JavaScript está definido
    if (typeof Blockly.JavaScript === 'undefined') {
        console.error('Que merda, Blockly.JavaScript is undefined');
        return;
    }
*/

    // Carregando o labirinto de um arquivo JSON
    const canvas = document.getElementById('mazeCanvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    let maze: Maze = { cells: [] };  // Inicializa como um labirinto vazio

    function setMaze(loadedMaze: Maze) {
        maze = loadedMaze;
        drawMaze(maze, context!);
    }

    if (context) {
        fetch('labirinto.json')
            .then(response => response.json())
            .then((loadedMaze: Maze) => {
                setMaze(loadedMaze);
            })
            .catch(error => console.error('Erro ao carregar o labirinto:', error));
    } else {
        console.error('Erro: contexto 2D não suportado ou canvas não encontrado.');
    }

    // Funções para mover o personagem no labirinto
    let playerPosition = { x: 1, y: 1 };  // Posição inicial do personagem

    function drawMaze(maze: Maze, context: CanvasRenderingContext2D) {
        const cellSize = 50;
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        maze.cells.forEach((row: number[], rowIndex: number) => {
            row.forEach((cell: number, colIndex: number) => {
                context.fillStyle = cell === 1 ? 'black' : 'white';
                context.fillRect(colIndex * cellSize, rowIndex * cellSize, cellSize, cellSize);
            });
        });

        // Desenhando o jogador
        context.fillStyle = 'blue';
        context.fillRect(playerPosition.x * cellSize, playerPosition.y * cellSize, cellSize, cellSize);
    }

    function moveUp() {
        if (maze.cells[playerPosition.y - 1][playerPosition.x] !== 1) {
            playerPosition.y -= 1;
            drawMaze(maze, context!);
        }
    }

    function moveRight() {
        if (maze.cells[playerPosition.y][playerPosition.x + 1] !== 1) {
            playerPosition.x += 1;
            drawMaze(maze, context!);
        }
    }

    function moveDown() {
        if (maze.cells[playerPosition.y + 1][playerPosition.x] !== 1) {
            playerPosition.y += 1;
            drawMaze(maze, context!);
        }
    }

    function moveLeft() {
        if (maze.cells[playerPosition.y][playerPosition.x - 1] !== 1) {
            playerPosition.x -= 1;
            drawMaze(maze, context!);
        }
    }

    // Gerador de código JavaScript para os blocos
    Blockly.JavaScript['move_up'] = function (block: Blockly.Block) {
        return 'moveUp();\n';
    };

    Blockly.JavaScript['move_right'] = function (block: Blockly.Block) {
        return 'moveRight();\n';
    };

    Blockly.JavaScript['move_down'] = function (block: Blockly.Block) {
        return 'moveDown();\n';
    };

    Blockly.JavaScript['move_left'] = function (block: Blockly.Block) {
        return 'moveLeft();\n';
    };

    Blockly.JavaScript['controls_whileTrue'] = function (block: Blockly.Block) {
        const branch = Blockly.JavaScript.statementToCode(block, 'DO');
        return `setInterval(function() {\n${branch}}, 1000);\n`;
    };

    Blockly.JavaScript['controls_whileTrue'] = function (block: Blockly.Block) {
        const branch = Blockly.JavaScript.statementToCode(block, 'DO');
        return `setInterval(function() {\n${branch}}, 1000);\n`;
    };

    // Função que roda o código gerado pelo Blockly
    function runCode() {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        eval(code);  // Executa o código gerado pelo Blockly
        checkWin();  // Verifica se o jogador chegou à saída
    }

    // Função que verifica se o jogador chegou à saída
    function checkWin() {
        if (maze.cells[playerPosition.y][playerPosition.x] === 2) {
            document.getElementById('message')!.innerHTML = 'Parabéns! Você chegou à saída!';
        }
    }

    // Listener do botão de rodar código
    document.getElementById('runButton')!.addEventListener('click', () => {
        runCode();
    });


};

