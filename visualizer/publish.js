const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const temps = ['package.json', 'package-lock.json', '.npmignore', '.npmrc', 'tsconfig.json', 'CHANGELOG.md', 'README.md'];

const { root, dist } = {
  root: __dirname,
  dist: path.resolve(__dirname, './dist')
};


// TODO: Step 1. Babel Build
spawnSync('rm -rf dist');
spawnSync('npm run build', { stdio: 'inherit', shell: true });


// TODO: Step 2. Git & Publish
spawnSync('git add dist && npm run commit', { stdio: 'inherit', shell: true });
spawnSync('git push', { stdio: 'inherit', shell: true });
spawnSync('npm run release && git push --follow-tags origin master', { stdio: 'inherit', shell: true });

temps.forEach((file) => fs.copyFileSync(`${root}/${file}`, `${dist}/${file}`));

spawnSync('cd dist && npm ci && npm publish', { stdio: 'inherit', shell: true });
spawnSync('rm -rf node_modules');
spawnSync('git clean -fd', { stdio: 'inherit', shell: true });
