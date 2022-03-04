const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const MuiIcons = require('@material-ui/icons');

const temps = ['package.json', 'package-lock.json', '.npmignore', '.npmrc', 'tsconfig.json', 'CHANGELOG.md', 'README.md'];

const { root, dist, icon } = {
  root: __dirname,
  dist: path.resolve(__dirname, './dist'),
  icon: path.resolve(__dirname, './src/_assets/json/icons.json')
};


// TODO: Step 1. Generate Mui Icons Definition JSON File
spawnSync('rm -rf src/_assets/json/icons.json');

fs.writeFileSync(
  icon,
  JSON.stringify(
    Object.keys(MuiIcons).reduce(
      (result, name) => (
        /(Outlined|Rounded|TwoTone|Sharp)$/.test(name)
          ? result
          : result.concat(
            name.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1_$2$3').toLowerCase()
          )
      ),
      []
    ),
    null,
    2
  )
);


// TODO: Step 2. Babel Build
spawnSync('rm -rf dist');
spawnSync('npm run build', { stdio: 'inherit', shell: true });


// TODO: Step 3. Git & Publish
spawnSync('git add dist && npm run commit', { stdio: 'inherit', shell: true });
spawnSync('git push', { stdio: 'inherit', shell: true });
spawnSync('npm run release && git push --follow-tags origin master', { stdio: 'inherit', shell: true });

temps.forEach((file) => fs.copyFileSync(`${root}/${file}`, `${dist}/${file}`));

spawnSync('cd dist && npm ci && rm -rf node_modules && npm publish', { stdio: 'inherit', shell: true });
spawnSync('rm -rf node_modules');
spawnSync('git clean -fd', { stdio: 'inherit', shell: true });
