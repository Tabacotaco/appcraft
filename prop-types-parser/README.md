# @appcraft/prop-types-parser
**@appcraft/prop-types-parser** is a package which is used to parse the **prop-types** of components for **React**, and you could also get the complete props structure by it.  Please note that this package only could be used in **Back-end**.

## Agenda
- [Getting Started](#getting-started)
- [API Docs](#api-docs)
- [Examples](#examples)
- [Guideline of Define HOC](#guideline-of-define-hoc)

## Getting Started
Install Package:
```
npm i @appcraft/prop-types-parser -s
```

Import and create a new parser:
```
const { default: PropTypesParser } = require('@appcraft/prop-types-parser');
const parser = new PropTypesParser(path.join(process.cwd()));
```

## API Docs
- **constructor**(`projectPath`, `options`)
  - **`projectPath`***: `string`
  **Required**.  Define the project path, such as: `path.join(process.cwd())`.
  <br>

  - **`options`**: `{ libs, mock }`
    - **`options.libs`**: `Record<string, string>`
    If there are any **global variabls** in the source code of the target component, you could define them in this option.  The key is the name of global variable, and the value is the real imported path of the global variable.

    - **`options.mock`**: `Record<string, any>`
    This option is like the resolve setting of webpack.  If there are some import by relative path in the target source code, you could override them by this option.
    <br>

- **Methods**
  - **getDecorationDefinition**(`importPath`, `options`): `{ configTypes, propTypes, defaultConfigs, defaultProps }`
  This method could help to parse a HOC Function, and get the configuration content of HOC.  If you wanna parse HOC by this method, please note the [Guideline of Define HOC](#guideline-of-define-hoc).
    - **Inputs**
      - **`importPath`***: `string`
      **Required**.  Specify the import path of the target HOC Function.

      - **`options`**: `{ prefix, extra, mock, sandbox }`
        - **`options.prefix`**: `string`
        The prefix import path of HOC Function, and default as: `"/node_modules"`.

        - **`options.extra`**: `string`
        The extra path of getting HOC Function, and default as: `"default"`.

        - **`options.mock`**: `Record<string, any>`
        Same as the directions of constructor(mock), but this option is just **disposable**.

        - **`options.sandbox`**: `Record<string, string>`
        Same as the directions of constructor(libs), but this option is just **disposable**.
        <br>

    - **Return**:
      - **`configTypes`**: `AppcraftParser.def.PropDefinition`
      The configuration definitions of HOC Function.

      - **`propTypes`**: `AppcraftParser.def.PropDefinition`
      The appended props definitions of HOC Component.

      - **`defaultConfigs`**: `Record<strng, any>`
      The default configurations.

      - **`defaultProps`**: `Record<strng, any>`
      The default props.
      <br>

  - **getDecorationDefinitions**(`importations`): `Record<string, { configTypes, propTypes, defaultConfigs, defaultProps }>`
  Could parse more HOC Function at once.  `importations` is an object, the key is import path, and the value is same as the options of `getDecorationDefinition`.  You could also define the import path in options, the property is `path`.
  <br>

  - **getPropsDefinition**(`importPath`, `options`): `{ propTypes, defaultProps }`
  Use this method to parse a React Component, and it'll return the structure/definition of prop-types.
    - **Inputs**
      - **`importPath`***: `string`
      **Required**.  Specify the import path of the target React Component.

      - **`options`**: `{ prefix, extra, mock, sandbox }`
        - **`options.prefix`**: `string`
        The prefix import path of React Component, and default as: `"/node_modules"`.

        - **`options.extra`**: `string`
        The extra path of getting React Component, and default as: `"default"`.

        - **`options.mock`**: `Record<string, any>`
        Same as the directions of constructor(mock), but this option is just **disposable**.

        - **`options.sandbox`**: `Record<string, string>`
        Same as the directions of constructor(libs), but this option is just **disposable**.
        <br>

    - **Return**:
      - **`propTypes`**: `AppcraftParser.def.PropDefinition`
      The appended props definitions of React Component.

      - **`defaultProps`**: `Record<strng, any>`
      The default props.
      <br>

## Examples
- Parse `@material-ui/core/Button`:
  ```
  const path = require('path');
  const { default: PropTypesParser } = require('@appcraft/prop-types-parser');
  const parser = new PropTypesParser(path.join(process.cwd()));

  const { propTypes, defaultProps } = parser.getPropsDefinition(`@material-ui/core/Button/index.js`, { extra: 'default.Naked' });

  module.exports = {
    propTypes,
    defaultProps
  };
  ```

- With libs/mock:
  ```
  const path = require('path');
  const { default: PropTypesParser } = require('@appcraft/prop-types-parser');

  const parser = new PropTypesParser(path.join(process.cwd()), {
    libs: {
      L: 'leaflet/dist/leaflet-src.js'
    },
    mock: {
      'leaflet/dist/images/marker-icon-2x.png': 'leaflet/dist/images/marker-icon-2x.png',
      'leaflet/dist/images/marker-icon.png': 'leaflet/dist/images/marker-icon.png',
      'leaflet/dist/images/marker-shadow.png': 'leaflet/dist/images/marker-shadow.png'
    }
  });
  ```

## Guideline of Define HOC
There are some restrictions before parsing HOC Function as follows:
```
import React from 'react';
import PropTypes from 'prop-types';

export default function withTitle({ title }) {
  return (OverridedComponent) => {
    // ignore
  };
}

withDecoration.configTypes = { // configTypes is required.
  title: PropTypes.string.isRequired
};

withDecoration.propTypes = { // define the prop-types of HOC Component
  TitleProps: propTypes.exact({
    // ignore
  })
};
```
