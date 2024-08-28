// Inicialize o Blockly no elemento com id 'blocklyDiv'
var workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
    <xml>
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="math_number"></block>
        <block type="math_arithmetic"></block>
        <block type="text"></block>
        <block type="text_print"></block>
    </xml>
    `
});

// Função para redimensionar o Blockly quando o contêiner for redimensionado
function resizeBlockly() {
    var blocklyDiv = document.getElementById('blocklyDiv');
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
    var file = event.target.files[0];
    if(file){

        var reader = new FileReader();
        reader.onload = function(event){
            var xmlText = event.target.result;
            var xml = Blockly.Xml.textToDom(xmlText);
            Blockly.Xml.domToWorkspace(xml, workspace);
        };
        reader.readAsText(file);

    }
}

// Vincule a função runCode ao botão de execução
document.getElementById('runCode').addEventListener('click', runCode);

// Vincule a função saveWorkspace ao botão de salvar
document.getElementById('saveWorkspace').addEventListener('click', saveWorkspace);

// Vincule a função loadWorkspace ao botão de carregar
document.getElementById('loadWorkspace').addEventListener('change', () => {
    document.getElementById('fileInput').click();
});

// Vincule a função loadWorkspace ao botão de carregar
document.getElementById('fileInput').addEventListener('change', loadWorkspace);
