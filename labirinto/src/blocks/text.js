/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';


const addText = {
  'type': 'add_text',
  'message0': 'Add BBBBBBBBBBBBBBBBB text %1 with color %2',
  'args0': [
    {
      'type': 'input_value',
      'name': 'TEXT',
      'check': 'String',
    },
    {
      'type': 'input_value',
      'name': 'COLOR',
      'check': 'Colour',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 160,
  'tooltip': '',
  'helpUrl': '',
};

// Create the definition.
const definitions = {
    // The type is like the "class name" for your block. It is used to construct
    // new instances. E.g. in the toolbox.
    'type': 'Logic',
    // The message defines the basic text of your block, and where inputs or
    // fields will be inserted.
    'message0': 'movedsaddsdadjkadndsadjknasjkdnjkdnsadasksdjkasndjanakjdjsandnsakjdnkdsajndsajkdnasdjkasnjdkaskdja forward %1',
    'args0': [
      // Each arg is associated with a %# in the message.
      // This one gets substituted for %1.
      {
        // The type specifies the kind of input or field to be inserted.
        'type': 'field_number',
        // The name allows you to reference the field and get its value.
        'name': 'FIELD_NAME',
      }
    ],
    // Adds an untyped previous connection to the top of the block.
    'previousStatement': null,
    // Adds an untyped next connection to the bottom of the block.
    'nextStatement': null,
  };

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([definitions, addText]);