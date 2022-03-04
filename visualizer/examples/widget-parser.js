/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const path = require('path');
const { default: PropTypesParser } = require('@appcraft/prop-types-parser');

const _merge = require('lodash/merge');
const _set = require('lodash/set');

const parser = new PropTypesParser(path.join(process.cwd()));
const ButtonBase = parser.getPropsDefinition('@material-ui/core/ButtonBase/index.js', { extra: 'default.Naked' });

const widgets = fs.readdirSync(path.join(process.cwd(), './node_modules/@material-ui/core')).reduce(
  (result, name) => {
    if (!/(\.md|\.json|\.d\.ts|LICENSE|RootRef|NoSsr|ButtonBase|ClickAwayListener|CssBaseline|TextareaAutosize|Unstable_TrapFocus)$/.test(name) && /^[A-Z].+$/.test(name)) {
      // eslint-disable-next-line react/forbid-foreign-prop-types
      const { propTypes, defaultProps } = parser.getPropsDefinition(`@material-ui/core/${name}/index.js`, { extra: 'default.Naked' });
      const description = `Mui${name}`;

      switch (name) {
        case 'AppBar': {
          _set(result, [`@material-ui/core/${name}`], {
            description,
            propTypes,
            defaultProps: _merge(defaultProps, { position: 'static' })
          });
          break;
        }
        case 'Button':
        case 'IconButton': {
          _set(result, [`@material-ui/core/${name}`], {
            description,
            propTypes: _merge({}, ButtonBase.propTypes, propTypes),
            defaultProps: _merge({}, ButtonBase.defaultProps, defaultProps)
          });

          break;
        }
        case 'Backdrop': {
          _set(result, [`@material-ui/core/${name}`], {
            description,
            propTypes,
            defaultProps: _merge(defaultProps, { style: { zIndex: 1199, flexDirection: 'column' } })
          });

          break;
        }
        case 'LinearProgress': {
          _set(result, [`@material-ui/core/${name}`], {
            description,
            propTypes,
            defaultProps: _merge(defaultProps, { style: { width: '100%' } })
          });

          break;
        }
        default: {
          _set(result, [`@material-ui/core/${name}`], { description, propTypes, defaultProps });
        }
      }
    }
    return result;
  },
  {}
);

fs.writeFileSync(path.join(process.cwd(), './src/components/Exports.jsx'), [
  ...Object.keys(widgets).map((name, i) => `import Widget${i} from '${name}';`),
  '',
  'export default {',
  ...Object.keys(widgets).map((name, i) => `  '${name}': Widget${i},`),
  '};\n'
].join('\n'));


module.exports = widgets;
