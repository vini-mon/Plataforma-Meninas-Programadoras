import * as Blockly from 'blockly';
import 'blockly/javascript'; // Importa o gerador JavaScript
import './blocks'; // Importa os blocos personalizados
// import './generators'; // Importa os geradores personalizados

// ... (resto do código)


const blocklyDiv = document.getElementById('blocklyDiv') as HTMLElement;
const output = document.getElementById('output') as HTMLElement;

const toolbox = `
<xml id="toolbox" style="display: none">

  <category name="Lógica" colour="#5C81A6">
    <block type="controls_if"></block>
    <block type="controls_if">
      <mutation else="1"></mutation>
    </block>
    <block type="controls_if">
      <mutation elseif="1"></mutation>
    </block>
    <block type="logic_compare"></block>
    <block type="logic_operation"></block>
    <block type="logic_negate"></block>
    <block type="logic_boolean"></block>
    <block type="logic_null"></block>
    <block type="logic_ternary"></block>

  </category>

  <category name="Controle" colour="#FFAB19">
    <block type="controls_repeat_ext"></block>
    <block type="controls_whileUntil"></block>
    <block type="controls_for"></block>
    <block type="controls_forEach"></block>
    <block type="controls_flow_statements"></block>
  </category>
  <category name="Matemática" colour="#5CA65C">
    <block type="math_number"></block>
    <block type="math_arithmetic"></block>
    <block type="math_single"></block>
    <block type="math_trig"></block>
    <block type="math_constant"></block>
    <block type="math_number_property"></block>
    <block type="math_round"></block>
    <block type="math_on_list"></block>
    <block type="math_modulo"></block>
    <block type="math_constrain"></block>
    <block type="math_random_int"></block>
    <block type="math_random_float"></block>
  </category>
  <category name="Texto" colour="#5CA68D">
    <block type="text"></block>
    <block type="text_join"></block>
    <block type="text_append"></block>
    <block type="text_length"></block>
    <block type="text_isEmpty"></block>
    <block type="text_indexOf"></block>
    <block type="text_charAt"></block>
    <block type="text_getSubstring"></block>
    <block type="text_changeCase"></block>
    <block type="text_trim"></block>
    <block type="text_print"></block>
  </category>
  <category name="Cores" colour="#5CA68D">
    <block type="colour_picker"></block>
    <block type="colour_random"></block>
    <block type="colour_rgb"></block>
    <block type="colour_blend"></block>
  </category>
  <category name="Variáveis" custom="VARIABLE" colour="#A65C81"></category>
  <category name="Funções" custom="PROCEDURE" colour="#9A65A6"></category>
  <category name="Entrada/Saída" colour="#5C8A5C">
    <block type="input_value"></block>
    <block type="output_value"></block>
  </category>
  <category name="Listas" colour="#745CA6">
    <block type="lists_create_empty"></block>
    <block type="lists_create_with"></block>
    <block type="lists_repeat"></block>
    <block type="lists_length"></block>
    <block type="lists_isEmpty"></block>
    <block type="lists_indexOf"></block>
    <block type="lists_getIndex"></block>
    <block type="lists_setIndex"></block>
    <block type="lists_getSublist"></block>
    <block type="lists_split"></block>
    <block type="lists_sort"></block>
  </category>
  <category name="Desenho" colour="%{BKY_PROCEDURES_HUE}">
      <block type="draw_line"></block>
    </category>
</xml>
`;

const workspace = Blockly.inject(blocklyDiv, { toolbox });


const runCodeButton = document.getElementById('runCode') as HTMLElement;
runCodeButton.addEventListener('click', () => {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  try {
    eval(code);
  } catch (e) {
    output.innerText = `Erro ao executar código: ${e}`;
  }
});

// Adicionar funcionalidades para salvar e carregar workspace
const saveWorkspaceButton = document.getElementById('saveWorkspace') as HTMLElement;
const loadWorkspaceButton = document.getElementById('loadWorkspace') as HTMLElement;
const clearWorkspaceButton = document.getElementById('clearWorkspace') as HTMLElement;
const fileInput = document.getElementById('fileInput') as HTMLInputElement;

saveWorkspaceButton.addEventListener('click', () => {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const xmlText = Blockly.Xml.domToPrettyText(xml);
  const blob = new Blob([xmlText], { type: 'text/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'workspace.xml';
  a.click();
  URL.revokeObjectURL(url);
});

loadWorkspaceButton.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', (event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const xmlText = e.target?.result as string;
      const xml = Blockly.utils.xml.textToDom(xmlText);
      Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
    };
    reader.readAsText(file);
  }
});

clearWorkspaceButton.addEventListener('click', () => {
  if (confirm("Tem certeza de que deseja limpar o workspace?")) {
    workspace.clear();
    localStorage.removeItem('workspace');
  }
});

// Salvar no LocalStorage quando há mudanças no workspace
workspace.addChangeListener(() => {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const xmlText = Blockly.Xml.domToText(xml);
  localStorage.setItem('workspace', xmlText);
});

// Recarregar o workspace salvo do LocalStorage
window.addEventListener('load', () => {
  const xmlText = localStorage.getItem('workspace');
  if (xmlText) {
    const xml = Blockly.utils.xml.textToDom(xmlText);
    Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
  }
});


const canvas = document.getElementById('drawingCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx) {
  // Inicializar o canvas, por exemplo, preenchendo com branco
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
