/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const path = require('path');
const { default: PropTypesParser } = require('@appcraft/prop-types-parser');
const { spawnSync } = require('child_process');

const _clone = require('lodash/cloneDeep');
const _merge = require('lodash/merge');
const _pick = require('lodash/pick');
const _omit = require('lodash/omit');
const _set = require('lodash/set');

spawnSync('npm run build', { stdio: 'inherit', shell: true });

// TODO: Step 1. Generate the definition config of @material-ui/core & @material-ui/pickers
const parser = new PropTypesParser(path.join(process.cwd()));
const { propTypes: BtnBasePropTypes } = parser.getPropsDefinition('@material-ui/core/ButtonBase/index.js', { extra: 'default.Naked' });

fs.writeFileSync(
  path.join(process.cwd(), './src/_assets/definitions/@material-ui.pickers.json'),
  JSON.stringify(
    ['DatePicker', 'DateTimePicker', 'TimePicker'].reduce(
      (result, name) => {
        const { propTypes, defaultProps } = parser.getPropsDefinition(`@material-ui.pickers/${name}.js`, { prefix: '/publish' });

        return {
          ...result,
          [`@material-ui/pickers/${name}`]: {
            group: '@material-ui/pickers',
            importTemplate: `{ ${name} as {{ widget }} }`,
            description: `Mui${name}`,
            propTypes,
            defaultProps
          }
        };
      },
      {}
    ),
    null,
    2
  )
);

fs.writeFileSync(
  path.join(process.cwd(), './src/_assets/definitions/@material-ui.core.json'),
  JSON.stringify(
    fs.readdirSync(path.join(process.cwd(), './node_modules/@material-ui/core')).reduce(
      (result, name) => {
        if (!/(\.md|\.json|\.d\.ts|LICENSE|RootRef|NoSsr|ButtonBase|ClickAwayListener|CssBaseline|TextareaAutosize|Unstable_TrapFocus)$/.test(name) && /^[A-Z].+$/.test(name)) {
          const { propTypes, defaultProps } = parser.getPropsDefinition(`@material-ui/core/${name}/index.js`, { extra: 'default.Naked' });
          const description = `Mui${name}`;

          switch (name) {
            case 'AppBar': {
              _set(result, [`@material-ui/core/${name}`], {
                group: '@material-ui/core',
                description,
                propTypes,
                defaultProps: _merge(defaultProps, { position: 'static' })
              });
              break;
            }
            case 'Button':
            case 'IconButton': {
              _set(result, [`@material-ui/core/${name}`], {
                group: '@material-ui/core',
                description,
                propTypes: _merge(_clone(_pick(BtnBasePropTypes, ['options.onClick'])), propTypes),
                defaultProps
              });

              break;
            }
            case 'Backdrop': {
              _set(result, [`@material-ui/core/${name}`], {
                group: '@material-ui/core',
                description,
                propTypes,
                defaultProps: _merge(defaultProps, { style: { zIndex: 1199, flexDirection: 'column' } })
              });

              break;
            }
            case 'LinearProgress': {
              _set(result, [`@material-ui/core/${name}`], {
                group: '@material-ui/core',
                description,
                propTypes,
                defaultProps: _merge(defaultProps, { style: { width: '100%' } })
              });

              break;
            }
            case 'MenuItem': {
              _set(result, [`@material-ui/core/${name}`], {
                group: '@material-ui/core',
                description,
                defaultProps,
                propTypes: _merge(propTypes, {
                  options: {
                    value: { type: 'any' }
                  }
                })
              });

              break;
            }
            case 'Slider': {
              _set(result, [`@material-ui/core/${name}`], {
                group: '@material-ui/core',
                description,
                propTypes: _omit(propTypes, ['options.getAriaLabel', 'options.getAriaValueText', 'options.scale']),
                defaultProps: _omit(defaultProps, ['getAriaLabel', 'getAriaValueText', 'scale'])
              });

              break;
            }
            case 'Modal':
            case 'Popover':
            case 'Popper':
            case 'Portal': {
              _set(result, [`@material-ui/core/${name}`], {
                group: '@material-ui/core',
                description,
                propTypes: _omit(propTypes, ['options.container']),
                defaultProps
              });

              break;
            }
            default: {
              _set(result, [`@material-ui/core/${name}`], {
                group: '@material-ui/core',
                description,
                propTypes,
                defaultProps
              });
            }
          }
        }
        return result;
      },
      {}
    ),
    null,
    2
  )
);

fs.writeFileSync(
  path.join(process.cwd(), './src/_assets/definitions/decoration.base.json'),
  JSON.stringify({
    '@appcraft/visualizer/decorations/with-mui-styles': {
      description: 'withMuiStyles',
      propTypes: null,
      configTypes: {
        type: 'object'
      }
    },
    '@appcraft/visualizer/decorations/with-element-map': {
      description: 'withElementMap',
      ...parser.getDecorationDefinition('decorations/with-element-map.js', { prefix: '/dist' })
    }
  }, null, 2)
);

// TODO: Step 2. Babel Build
spawnSync('rm -rf dist');
spawnSync('npm run build', { stdio: 'inherit', shell: true });

// TODO: Step 3. Git & Publish
const temps = ['package.json', 'package-lock.json', '.npmignore', '.npmrc', 'tsconfig.json', 'CHANGELOG.md', 'README.md'];

const { root, dist } = {
  root: path.resolve(process.cwd()),
  dist: path.resolve(process.cwd(), './dist')
};

spawnSync('git add dist -f && npm run commit', { stdio: 'inherit', shell: true });
spawnSync('git push', { stdio: 'inherit', shell: true });
spawnSync('npm run release && git push --follow-tags origin master', { stdio: 'inherit', shell: true });

temps.forEach((file) => fs.copyFileSync(`${root}/${file}`, `${dist}/${file}`));

spawnSync('cd dist && npm ci && npm publish && rm -rf node_modules', { stdio: 'inherit', shell: true });
spawnSync('git clean -fd', { stdio: 'inherit', shell: true });
