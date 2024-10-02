// Função para salvar o tamanho do contêiner no localStorage
function saveContainerSize() {
    var resizeContainer = document.getElementById('resizeContainer');
    localStorage.setItem('blocklyWidth', resizeContainer.offsetWidth);
    localStorage.setItem('blocklyHeight', resizeContainer.offsetHeight);
}

// Função para restaurar o tamanho do contêiner a partir do localStorage
function restoreContainerSize() {
    var resizeContainer = document.getElementById('resizeContainer');
    var width = localStorage.getItem('blocklyWidth');
    var height = localStorage.getItem('blocklyHeight');

    if (width && height) {
        resizeContainer.style.width = width + 'px';
        resizeContainer.style.height = height + 'px';
    }
}

// Restaura o tamanho do contêiner antes de inicializar o Blockly
restoreContainerSize();



// Inicialize o Blockly no elemento com id 'blocklyDiv'
var workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
    <xml>
        <!-- Blocos de Controle de Fluxo -->
        <category name="Controle">
            <block type="controls_if"></block>
            <block type="controls_ifelse"></block>
            <block type="controls_repeat_ext"></block>
            <block type="controls_whileUntil"></block>

        </category>
        
        <!-- Blocos de Lógica -->
        <category name="Lógica">
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
        </category>
        
        <!-- Blocos de Matemática -->
        <category name="Matemática">
            <block type="math_number"></block>
            <block type="math_arithmetic"></block>
            <block type="math_random_int"></block>
        </category>
        
        <!-- Blocos de Texto -->
        <category name="Texto">
            <block type="text"></block>
            <block type="text_print"></block>
        </category>
        
        <!-- Bloco de cores -->
        <category name="Cores">
            <block type="colour_picker"></block>
        </category>

        <!-- Blocos de Variáveis -->
        <category name="Variáveis" custom="VARIABLE"></category>
        
        <!-- Blocos de Funções -->
        <category name="Funções" custom="PROCEDURE"></category>
        
        <!-- Blocos de Entrada/Saída -->
        <category name="Entrada/Saída">
            <block type="text_prompt">
                <field name="TYPE">TEXT</field>

            </block>
        </category>
        
        <!-- Blocos de Listas (Opcional) -->
        <category name="Listas">
            <block type="lists_create_with"></block>
            <block type="lists_indexOf"></block>
            <block type="lists_getIndex"></block>
            <block type="lists_setIndex"></block>
        </category>
    </xml>
    `
});

// Função para redimensionar o Blockly quando o contêiner for redimensionado
function resizeBlockly() {
    saveContainerSize();
    Blockly.svgResize(workspace);
}

// Detecta quando o contêiner é redimensionado
var resizeObserver = new ResizeObserver(resizeBlockly);
resizeObserver.observe(document.getElementById('resizeContainer'));



// Função para gerar e executar o código JavaScript do Blockly
function runCode() {
    // Gere o código JavaScript dos blocos
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    
    try {
        // Execute o código gerado
        eval(code);
    } catch (e) {
        console.error(e);
        document.getElementById('output').textContent = 'Erro: ' + e.message;
    }
}

// Função para salvar o estado do workspace no localStorage
function saveWorkspaceToLocal() {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xmlText = Blockly.Xml.domToText(xml);
    localStorage.setItem('blocklyWorkspace', xmlText);
}

// Função para carregar o estado do workspace a partir do localStorage
function loadWorkspaceFromLocal() {
    var xmlText = localStorage.getItem('blocklyWorkspace');
    if (xmlText) {
        var xml = Blockly.utils.xml.textToDom(xmlText);
        Blockly.Xml.domToWorkspace(xml, workspace);
    }
}

function saveWorkspace() {
    // Salve o estado do Blockly
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xmlText = Blockly.Xml.domToText(xml);
    var blob = new Blob([xmlText], {type: 'text/xml'});
    var url = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = 'workspace.xml';
    a.click();

    URL.revokeObjectURL(url);
}

function loadWorkspace() {
    // var file = event.target.files[0];
    var file = document.getElementById('fileInput').files[0];
    
    if(file){

        var reader = new FileReader();
        reader.onload = function(event){
            var xmlText = event.target.result;
            var xml = Blockly.utils.xml.textToDom(xmlText);
            Blockly.Xml.domToWorkspace(xml, workspace);
        };
        reader.readAsText(file);

    }
}

// Função para limpar todo o workspace
function clearWorkspace() {
    var confirmation = confirm("Tem certeza de que deseja limpar todo o workspace? Essa ação não pode ser desfeita.");
    if (confirmation) {
        workspace.clear();
        localStorage.removeItem('blocklyWorkspace'); // Remover do localStorage
    }
}

// Salve o estado do workspace sempre que houver mudanças
workspace.addChangeListener(() => {
    saveWorkspaceToLocal();
});

// Carregue o estado do workspace do localStorage quando a página for carregada
window.addEventListener('load', () => {
    loadWorkspaceFromLocal();
});

// Vincule a função runCode ao botão de execução
document.getElementById('runCode').addEventListener('click', runCode);

// Vincule a função saveWorkspace ao botão de salvar
document.getElementById('saveWorkspace').addEventListener('click', saveWorkspace);

// Vincule a função loadWorkspace ao botão de carregar
document.getElementById('loadWorkspace').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

// Vincule a função loadWorkspace ao botão de carregar
document.getElementById('fileInput').addEventListener('change', loadWorkspace);

// Vincule a função clearWorkspace ao botão de limpar
document.getElementById('clearWorkspace').addEventListener('click', clearWorkspace);
