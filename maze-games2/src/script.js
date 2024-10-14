import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';  // Importa o gerador JavaScript

window.onload = () => {

    const blocklyDiv = document.getElementById('blocklyDiv');
    const output = document.getElementById('output');

    if (!blocklyDiv) {
        console.log('Elemento blocklyDiv não encontrado.');
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
        <block type="math_number"></block>
        <!-- <block type="controls_whileTrue"></block> -->
        <block type="controls_for"></block>
    </category>
    </xml>
    `;
    
    // Inicializando o Blockly
    const workspace = Blockly.inject(blocklyDiv, {
        toolbox: toolbox
    });

    let modificationCount = 0;

    // Função para atualizar o contador de modificações
    function updateModificationCount() {
        console.log('Modificação detectada');
        modificationCount++;
        document.getElementById('message').innerHTML = `Modificações: ${modificationCount}`;
    }

    // Adiciona os listeners para detectar criação e remoção de blocos
    workspace.addChangeListener((event) => {
        if (event.type === Blockly.Events.BLOCK_CREATE ||
            event.type === Blockly.Events.BLOCK_DELETE ||
            event.type === Blockly.Events.BLOCK_CHANGE) 
        {
            updateModificationCount();
        }
    });

    // Definindo blocos manualmente para evitar conflitos
    Blockly.Blocks['move_up'] = {
        init: function () {
            this.appendDummyInput().appendField('Mover para cima');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
        }
    };

    Blockly.Blocks['move_right'] = {
        init: function () {
            this.appendDummyInput().appendField('Mover para a direita');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
        }
    };

    Blockly.Blocks['move_down'] = {
        init: function () {
            this.appendDummyInput().appendField('Mover para baixo');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
        }
    };

    Blockly.Blocks['move_left'] = {
        init: function () {
            this.appendDummyInput().appendField('Mover para a esquerda');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
        }
    };

    Blockly.Blocks['controls_whileTrue'] = {
        init: function () {
            this.appendDummyInput().appendField('Enquanto verdadeiro');
            this.appendStatementInput('DO').setCheck(null);
            this.setColour(230);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
        }
    };

    // Bloco de i repetições
    Blockly.Blocks['controls_for'] = {
        init: function () {
            this.appendDummyInput().appendField('Repetir');
            this.appendValueInput('IF0').setCheck('Number');
            this.appendDummyInput().appendField('vezes')
            this.appendStatementInput('DO').setCheck(null);
            this.setColour(230);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
        }
    };

    // Agora associamos manualmente os blocos com o gerador JavaScript
    javascriptGenerator.forBlock['move_up'] = function (block) {
        return 'await moveUp();\n';
    };

    javascriptGenerator.forBlock['move_right'] = function (block) {
        return 'await moveRight();\n';
    };

    javascriptGenerator.forBlock['move_down'] = function (block) {
        return 'await moveDown();\n';
    };

    javascriptGenerator.forBlock['move_left'] = function (block) {
        return 'await moveLeft();\n';
    };

    javascriptGenerator.forBlock['controls_whileTrue'] = function (block) {
        const branch = javascriptGenerator.statementToCode(block, 'DO');
        return `while (running) {\n ${branch} if (!running) break; \n}\n`;
    };

    javascriptGenerator.forBlock['controls_for'] = function (block) {
        const repetitions = javascriptGenerator.valueToCode(block, 'IF0', javascriptGenerator.ORDER_NONE) || '0';
        const branch = javascriptGenerator.statementToCode(block, 'DO');
        return `for (let i = 0; i < ${repetitions}; i++) {\n ${branch} if (!running) break; \n}\n`;
    };

    // Estado de controle para parar o loop
    let running = false;

    // Função de sleep
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Função que roda o código gerado pelo Blockly
    async function runCode() {
        const code = javascriptGenerator.workspaceToCode(workspace);
        console.log('Código gerado:', code);
        running = true;
        try {
            await eval(`(async () => {${code}})()`);  // Executa o código gerado pelo Blockly de forma assíncrona
        } catch (error) {
            console.error('Erro na execução do código:', error);
        }
        checkWin();  // Verifica se o jogador chegou à saída
    }

    // Função que verifica se o jogador chegou à saída
    function checkWin() {
        console.log('Verificando vitória...');
        if (maze.cells[playerPosition.y][playerPosition.x] === 2) {
            running = false;  // Para a execução do loop
            document.getElementById('message').innerHTML = 'Parabéns! Você chegou à saída!';
            // throw new Error('Vitória!');  // Lança um erro para parar a execução do código
        }
    }

    // Listener do botão de rodar código
    document.getElementById('runButton').addEventListener('click', () => {
        runCode();
    });

    // Listener do botão de reiniciar
    document.getElementById('resetButton').addEventListener('click', () => {

        resetMaze();

    });

    // Funções para mover o personagem no labirinto
    let playerPosition = { x: 0, y: 0 };  // Posição inicial do personagem

    const canvas = document.getElementById('mazeCanvas');
    const context = canvas.getContext('2d');
    
    let maze = { cells: [], start: { x: 0, y: 0 } };  // Inicializa como um labirinto vazio

    function setMaze(loadedMaze) {
        maze = loadedMaze;
        playerPosition = { x: maze.start.x, y: maze.start.y };
        drawMaze(maze, context);
    }    

    if (context) {
        fetch('labirinto2.json')
            .then(response => response.json())
            .then((loadedMaze) => {
                setMaze(loadedMaze);
            })
            .catch(error => console.error('Erro ao carregar o labirinto:', error));
    } else {
        console.error('Erro: contexto 2D não suportado ou canvas não encontrado.');
    }

    function drawMaze(maze, context) {
        const cellSize = 50;
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        maze.cells.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                context.fillStyle = cell === 1 ? 'black' : 'white';
                context.fillRect(colIndex * cellSize, rowIndex * cellSize, cellSize, cellSize);
            });
        });

        // Desenhando o jogador
        context.fillStyle = 'blue';
        context.fillRect(playerPosition.x * cellSize, playerPosition.y * cellSize, cellSize, cellSize);
    }

    function resetMaze() {

        running = false;  // Para a execução do loop
        
        playerPosition = { x: maze.start.x, y: maze.start.y };  // Reseta a posição do jogador

        drawMaze(maze, context);  // Redesenha o labirinto com o jogador na posição inicial
        document.getElementById('message').innerHTML = '';  // Limpa a mensagem de vitória

    }

    const sleepTime = 500;

    async function moveUp() {
        if (maze.cells[playerPosition.y - 1][playerPosition.x] !== 1) {
            playerPosition.y -= 1;
            drawMaze(maze, context);
            checkWin();
            await sleep(sleepTime);
        }
    }

    async function moveRight() {
        if (maze.cells[playerPosition.y][playerPosition.x + 1] !== 1) {
            playerPosition.x += 1;
            drawMaze(maze, context);
            checkWin();
            await sleep(sleepTime);
        }
    }

    async function moveDown() {
        if (maze.cells[playerPosition.y + 1][playerPosition.x] !== 1) {
            playerPosition.y += 1;
            drawMaze(maze, context);
            checkWin();
            await sleep(sleepTime);
        }
    }

    async function moveLeft() {
        if ( maze.cells[playerPosition.y][playerPosition.x - 1] !== 1) {
            playerPosition.x -= 1;
            drawMaze(maze, context);
            checkWin();
            await sleep(sleepTime);
        }
    }

    document.getElementById('clearWorkspaceButton').addEventListener('click', () => {
        workspace.clear();
    });
    

    // Função para salvar o estado do workspace no localStorage
    function saveWorkspaceToLocal() {
        var xml = Blockly.Xml.workspaceToDom(workspace);
        var xmlText = Blockly.Xml.domToText(xml);
        localStorage.setItem('blocklyWorkspace', xmlText);
        localStorage.setItem('modificationCount', modificationCount);
    }

    // Função para carregar o estado do workspace a partir do localStorage
    function loadWorkspaceFromLocal() {
        var xmlText = localStorage.getItem('blocklyWorkspace');
        if (xmlText) {
            var xml = Blockly.utils.xml.textToDom(xmlText);
            Blockly.Xml.domToWorkspace(xml, workspace);
        }
        modificationCount = parseInt(localStorage.getItem('modificationCount')) || 0;
        modificationCount --;
    }

    loadWorkspaceFromLocal();

    // Salve o estado do workspace sempre que houver mudanças
    workspace.addChangeListener(() => {
        saveWorkspaceToLocal();
    });

};