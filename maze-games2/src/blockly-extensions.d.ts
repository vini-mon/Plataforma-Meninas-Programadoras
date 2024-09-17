import * as Blockly from 'blockly';
import * as JsGenerator from 'blockly/javascript';

declare module 'blockly/javascript' {
    export interface BlocklyJavaScript {
        [key: string]: any; // Permite acesso a propriedades arbitrárias
    }
}

// Exemplo de como estender a interface BlocklyJavaScript
declare module 'blockly/javascript' {
    const JsGenerator: BlocklyJavaScript;
    export default JsGenerator;
}
