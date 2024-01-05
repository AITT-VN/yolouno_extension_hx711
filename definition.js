const HX711ColorBlock = "#33aaaa";

var digitalPins = [
  [
    "D3",
    "D3"
  ],
  [
    "D4",
    "D4"
  ],
  [
    "D5",
    "D5"
  ],
  [
    "D6",
    "D6"
  ],
  [
    "D7",
    "D7"
  ],
  [
    "D8",
    "D8"
  ],
  [
    "D9",
    "D9"
  ],
  [
    "D10",
    "D10"
  ],
  [
    "D11",
    "D11"
  ],
  [
    "D12",
    "D12"
  ],
  [
    "D13",
    "D13"
  ],
  [
    "D0",
    "D0"
  ],
  [
    "D1",
    "D1"
  ],
  [
    "D2",
    "D2"
  ]
];

Blockly.Blocks['uno_hx711_loadcell_create'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit(
      {
        "type": "uno_hx711_loadcell_create",
        "message0": 'khởi tạo cảm biến hx117 chân SCK %1 chân DATA %2',
        "args0": [
          {
            "type": "field_dropdown",
            "name": "SCK",
            "options": digitalPins
          },
          {
            "type": "field_dropdown",
            "name": "DATA",
            "options": digitalPins
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": HX711ColorBlock,
        "tooltip": '',
        "helpUrl": ''
      }
    );
  },
  getDeveloperVars: function () {
    return ['hx711_loadcell'];
  }
};

Blockly.Python['uno_hx711_loadcell_create'] = function (block) {
  var dropdown_sck = block.getFieldValue('SCK');
  var dropdown_data = block.getFieldValue('DATA');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_hx711_loadcell'] = 'from hx711 import *';
  Blockly.Python.definitions_['init_hx711_loadcell'] = 'hx711_loadcell = HX711(pd_sck=' + dropdown_sck + '_PIN, d_out=' + dropdown_data + '_PIN)';
  var code = '';
  return code;
};

Blockly.Blocks['uno_hx711_loadcell_tare'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit(
      {
        "type": "hx711_loadcell_tare",
        "message0": 'đặt giá trị về 0',
        "args0": '',
        "previousStatement": null,
        "nextStatement": null,
        "colour": HX711ColorBlock,
        "tooltip": '',
        "helpUrl": ''
      }
    );
  },
  getDeveloperVars: function () {
    return ['hx711_loadcell'];
  }
};

Blockly.Python['uno_hx711_loadcell_tare'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'hx711_loadcell.tare()\n';
  return code;
};

Blockly.Blocks['uno_hx711_loadcell_read_value'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit(
      {
        "type": "hx711_loadcell_read_value",
        "message0": 'đọc giá trị cảm biến',
        "args0": '',
        "colour": HX711ColorBlock,
        "output": null,
        "tooltip": '',
        "helpUrl": ''
      }
    );
  },
  getDeveloperVars: function () {
    return [hx711_loadcel];
  }
};

Blockly.Python['uno_hx711_loadcell_read_value'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'hx711_loadcell.get_grams()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['uno_hx711_loadcell_power'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit(
      {
        "type": "hx711_loadcell_power",
        "message0": '%1 cảm biến hx711',
        "args0": [
          {
            "type": "field_dropdown",
            "name": "action",
            "options": [
              ["bật", "on"],
              ["tắt", "off"],
            ],
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": HX711ColorBlock,
        "tooltip": '',
        "helpUrl": ''
      }
    );
  },
  getDeveloperVars: function () {
    return ['hx711_loadcell'];
  }
};

Blockly.Python['uno_hx711_loadcell_power'] = function (block) {
  var action = block.getFieldValue("action");
  // TODO: Assemble Python into code variable.
  var code = 'hx711_loadcell.power_' + action + '()\n';
  return code;
};

Blockly.Blocks['uno_hx711_loadcell_calibration_scale_weight'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit(
      {
        "type": "hx711_loadcell_calibration_scale_weight",
        "message0": 'cài đặt tỉ lệ cân chỉnh %1',
        "args0": [
          {
            type: "input_value",
            name: "SCALE",
            check: "Number",
            min: '',
            max: ''

          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "inputsInline": true,
        "colour": HX711ColorBlock,
        "tooltip": '',
        "helpUrl": ''
      }
    );
  },
  getDeveloperVars: function () {
    return ['hx711_loadcell'];
  }
};

Blockly.Python['uno_hx711_loadcell_calibration_scale_weight'] = function (block) {
  // TODO: Assemble Python into code variable.
  var scale = Blockly.Python.valueToCode(block, 'SCALE', Blockly.Python.ORDER_ATOMIC);
  var code = 'hx711_loadcell.set_scale(' + scale + ')\n';
  return code;
};
