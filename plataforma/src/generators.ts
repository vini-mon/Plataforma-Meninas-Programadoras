// src/generators.ts
import * as Blockly from 'blockly';

Blockly.JavaScript['draw_line'] = function(block) {
  const x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const code = `
    (function() {
      const canvas = document.getElementById('drawingCanvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(${x1}, ${y1});
        ctx.lineTo(${x2}, ${y2});
        ctx.stroke();
      }
    })();
  `;
  return code;
};
