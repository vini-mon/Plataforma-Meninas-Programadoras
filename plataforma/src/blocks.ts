// src/blocks.ts
import * as Blockly from 'blockly';

Blockly.Blocks['draw_line'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("Desenhar linha de");
    this.appendValueInput("X1")
        .setCheck("Number")
        .appendField("x1");
    this.appendValueInput("Y1")
        .setCheck("Number")
        .appendField("y1");
    this.appendValueInput("X2")
        .setCheck("Number")
        .appendField("x2");
    this.appendValueInput("Y2")
        .setCheck("Number")
        .appendField("y2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Desenha uma linha no canvas.");
    this.setHelpUrl("");
  }
};
