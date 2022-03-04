const fs = require('fs');
const path = require('path');

const MuiIcons = require('@material-ui/icons');

fs.writeFileSync(
  path.resolve(__dirname, './icons.json'),
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
