import * as Blockly from 'blockly';


// Inicialize o Blockly no elemento com id 'blocklyDiv'
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
    <xml>
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="math_number"></block>
        <block type="math_arithmetic"></block>
        <block type="text"></block>
        <block type="text_print"></block>
        <block type="text_print"></block>
        <block type="text_print"></block>
    </xml>
    `
});


// Função para salvar o tamanho do contêiner no localStorage
function saveContainerSize() {
    const resizeContainer = document.getElementById('resizeContainer') as HTMLElement;
    if (resizeContainer) {
        localStorage.setItem('blocklyWidth', resizeContainer.offsetWidth.toString());
        localStorage.setItem('blocklyHeight', resizeContainer.offsetHeight.toString());
    }else{
        console.log('resizeContainer não encontrado');
    }
}

// Função para salvar o estado do workspace no localStorage
function saveWorkspaceToLocalStorage() {
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const xmlText = Blockly.Xml.domToText(xml);
    localStorage.setItem('workspace', xmlText);
}

// Função para restaurar o estado do workspace a partir do localStorage
function restoreWorkspaceFromLocalStorage() {
    const xmlText = localStorage.getItem('workspace');
    if (xmlText) {
        const xml = Blockly.utils.xml.textToDom(xmlText);
        Blockly.Xml.domToWorkspace(xml, workspace);
    }
}

// Função para restaurar o tamanho do contêiner a partir do localStorage
function restoreContainerSize() {
    const resizeContainer = document.getElementById('resizeContainer') as HTMLElement;
    if (resizeContainer) {
        const width = localStorage.getItem('blocklyWidth');
        const height = localStorage.getItem('blocklyHeight');

        if (width && height) {
            resizeContainer.style.width = `${width}px`;
            resizeContainer.style.height = `${height}px`;
            console.log('Tamanho do contêiner restaurado');
        }else{
            console.log('Tamanho do contêiner não encontrado');
        }
    }
}

// Restaure o tamanho do contêiner e o workspace quando a página for carregada
window.addEventListener('load', () => {
    restoreContainerSize();
    restoreWorkspaceFromLocalStorage();
    Blockly.svgResize(workspace); // Redimensiona o workspace para refletir o tamanho restaurado
});

// Função para redimensionar o Blockly quando o contêiner for redimensionado
function resizeBlockly() {
    Blockly.svgResize(workspace);
    saveContainerSize();
}

// Detecta quando o contêiner é redimensionado
const resizeObserver = new ResizeObserver(resizeBlockly);
resizeObserver.observe(document.getElementById('resizeContainer')!);


// Adiciona um ouvinte para salvar o workspace quando houver uma mudança
workspace.addChangeListener(saveWorkspaceToLocalStorage);

// Adicionando event listeners aos botões
document.getElementById('runCode')!.addEventListener('click', () => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
        eval(code);
    } catch (e) {
        if (e instanceof Error) {
            console.error(e);
            document.getElementById('output')!.textContent = 'Erro: ' + e.message;
        } else {
            console.error('Erro desconhecido', e);
            document.getElementById('output')!.textContent = 'Erro desconhecido';
        }
    }
});

document.getElementById('saveWorkspace')!.addEventListener('click', () => {
    saveWorkspaceToLocalStorage(); // Atualiza para salvar diretamente no localStorage
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const xmlText = Blockly.Xml.domToText(xml);
    const blob = new Blob([xmlText], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'workspace.xml';
    a.click();

    URL.revokeObjectURL(url);
});

document.getElementById('loadWorkspace')!.addEventListener('click', () => {
    (document.getElementById('fileInput') as HTMLInputElement).click();
});

document.getElementById('fileInput')!.addEventListener('change', (event) => {
    const file = (event.target as HTMLInputElement).files![0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const xmlText = event.target!.result as string;
            const xml = Blockly.utils.xml.textToDom(xmlText);
            Blockly.Xml.domToWorkspace(xml, workspace);
            saveWorkspaceToLocalStorage(); // Atualiza o localStorage após carregar o workspace
        };
        reader.readAsText(file);
    }
});

document.getElementById('clearWorkspace')!.addEventListener('click', () => {
    const confirmed = confirm("Você realmente deseja limpar o workspace?");
    if (confirmed) {
        workspace.clear();
        saveWorkspaceToLocalStorage(); // Atualiza o localStorage após limpar o workspace
    }
});
