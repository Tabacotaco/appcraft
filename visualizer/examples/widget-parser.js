/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const path = require('path');
const _template = require('lodash/template');

const { core: MATERIAL_UI_CORE, pickers: MATERIAL_UI_PICKERS, decorations: DECORATION_BASE } = require('@appcraft/visualizer/definitions');

const APPCRAFT_WIDGETS = { ...MATERIAL_UI_CORE, ...MATERIAL_UI_PICKERS };
const APPCRAFT_DECORATIONS = { ...DECORATION_BASE };

fs.writeFileSync(path.join(process.cwd(), './src/components/widget-proxy.js'), [
  ...Object.entries(APPCRAFT_WIDGETS).map(
    ([name, { importTemplate: template = '{{ widget }}' }], i) => (
      `import ${_template(template, { interpolate: /{{([\s\S]+?)}}/g })({ widget: `Widget${i}` })} from '${name}';`
    )
  ),
  ...Object.entries(APPCRAFT_DECORATIONS).map(
    ([name, { importTemplate: template = '{{ widget }}' }], i) => (
      `import ${_template(template, { interpolate: /{{([\s\S]+?)}}/g })({ widget: `withDecoration${i}` })} from '${name}';`
    )
  ),

  '',

  'export default {',
  ...Object.keys(APPCRAFT_WIDGETS).map((name, i) => `  '${name}': Widget${i},`),
  ...Object.keys(APPCRAFT_DECORATIONS).map((name, i) => `  '${name}': withDecoration${i},`),
  '};\n'
].join('\n'));

module.exports = {
  '__WEBPACK_DEFINE__.APPCRAFT_WIDGET_DEFINITION': JSON.stringify(APPCRAFT_WIDGETS),
  '__WEBPACK_DEFINE__.APPCRAFT_DECORATION_DEFINITION': JSON.stringify(APPCRAFT_DECORATIONS)
};
