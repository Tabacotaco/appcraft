// @ts-nocheck
import ReactDomServer from 'react-dom/server.browser';
import Window from 'window';
import navigator from 'navigator';

import { NodeVM } from 'vm2';

import _get from 'lodash/get';
import _toPath from 'lodash/toPath';

import FakePropTypes, { _getPropDefinition } from './fake-prop-types';


// TODO: TS Namespace
export namespace AppcraftParser {
  export namespace def {
    enum PropTypeName {
      any,
      array,
      arrayOf,
      bool,
      element,
      elementType,
      exact,
      func,
      instanceOf,
      node,
      number,
      object,
      objectOf,
      oneOf,
      oneOfType,
      shape,
      string,
      symbol
    }

    export type PropType = keyof typeof PropTypeName;

    export interface PropDefinition<T extends PropType = 'exact'> {
      type: T;
      uid: string;
      required: boolean;
      options: T extends 'exact' | 'shape'
        ? Record<string, PropDefinition<PropType>>
        : T extends 'arrayOf' | 'objectOf'
        ? PropDefinition<PropType>
        : T extends 'oneOfType'
        ? PropDefinition<PropType>[]
        : T extends 'oneOf'
        ? (string | boolean | number)[]
        : T extends 'instanceOf'
        ? { new(): any }
        : null;
    };

    export type Library = Record<string, string>;
    export type ModuleRef<T = any> = Record<string, T>;

    export interface ElementDefinition {
      propTypes: PropDefinition;
      defaultProps?: Record<string, any>;
    };

    export interface DecorationDefinition extends ElementDefinition {
      configTypes: PropDefinition;
      defaultConfigs?: Record<string, any>;
    }

    export interface Options {
      extra?: string | string[];
      mock?: ModuleRef;
      prefix?: string;
      sandbox?: ModuleRef<string>;
    }
  }
}

function createVirtualMachine(
  root: string,
  { sandbox, mock }: { sandbox?: AppcraftParser.def.ModuleRef; mock?: AppcraftParser.def.ModuleRef } = {}
) {
  const window = new Window();

  return new NodeVM({
    sandbox: {
      ...sandbox,

      Event: window.Event,

      document: window.document,
      navigator,
      require,
      window
    },
    require: {
      external: true,
      builtin: ['*'],
      context: 'sandbox',
      mock,
      root
    }
  });
}

export default class PropTypesParser {
  private baseVm: NodeVM = null;

  public readonly globalLibs: AppcraftParser.def.Library = null;
  public readonly defaultMock: AppcraftParser.def.ModuleRef = null;

  constructor(
    public readonly projectPath: string,
    { libs, mock }: { libs?: AppcraftParser.def.Library; mock?: AppcraftParser.def.ModuleRef; } = {}
  ) {
    this.globalLibs = libs;
    this.defaultMock = mock;
    this.baseVm = createVirtualMachine(projectPath);
  }

  private getImportModule<T extends AppcraftParser.def.ElementDefinition>(
    importPath: string,
    { mock, sandbox, extra, prefix = '/node_modules' }: AppcraftParser.def.Options = {}
  ): T {
    const importModule = createVirtualMachine(this.projectPath, {
      mock: {
        ...Object.entries({ ...this.defaultMock, ...mock }).reduce(
          (result, [name, mockModule]) => ({
            ...result,
            [name]: typeof mockModule === 'string'
              ? `${this.projectPath}/node_modules/${mockModule}`
              : mockModule
          }),
          {}
        ),
        'prop-types': FakePropTypes, // REMARK: 將所有 Component 的 PropTypes 替換為 Overrided 版本，才能順利產生 Structures
        'react-dom/server': ReactDomServer, // REMARK: 強制使用 browser 版本（因為 NodeVM 已經模擬前端環境）
      },
      sandbox: {
        ...sandbox,
        ...Object.entries(this.globalLibs || {}).reduce(
          (result, [name, globalOptions]) => {
            const { prefix: globalPrefix = '/node_modules', path } = typeof globalOptions === 'string' ? { path: globalOptions } : globalOptions;

            return {
              ...result,
              [name]: this.baseVm.runFile(`${this.projectPath}${globalPrefix}/${path}`)
            };
          },
          {}
        )
      }
    }).runFile(`${this.projectPath}${prefix}/${importPath}`);

    return (extra && _get(importModule, extra)) || _get(importModule, 'default');
  }

  getDecorationDefinition(importPath: string, options: AppcraftParser.def.Options = {}) : AppcraftParser.def.DecorationDefinition {
    const { configTypes, propTypes, defaultConfigs, defaultProps } = this.getImportModule(importPath, options);

    return {
      configTypes: _getPropDefinition(configTypes || {}),
      propTypes: _getPropDefinition(propTypes || {}),
      defaultConfigs,
      defaultProps
    };
  }

  getDecorationDefinitions(
    importations: Record<string, string | (AppcraftParser.def.Options & { path: string; })>
  ): Record<string, AppcraftParser.def.DecorationDefinition> {
    return Object.entries(importations).reduce(
      (result, [moduleName, moduleOptions]) => {
        const { path, ...options } = typeof moduleOptions === 'string' ? { path: moduleOptions } : moduleOptions;

        return {
          ...result,
          [moduleName]: this.getDecorationDefinition(path, options)
        };
      },
      {}
    );
  }

  getPropsDefinition(importPath: string, options: AppcraftParser.def.Options = {}): AppcraftParser.def.ElementDefinition {
    const { propTypes, defaultProps } = this.getImportModule(importPath, options);

    return {
      propTypes: _getPropDefinition(propTypes),
      defaultProps
    };
  }

  getPropsDefinitions(
    importations: Record<string, string | (AppcraftParser.def.Options & { path: string; })>
  ): Record<string, AppcraftParser.def.ElementDefinition> {
    return Object.entries(importations).reduce(
      (result, [moduleName, moduleOptions]) => {
        const { path, ...options } = typeof moduleOptions === 'string' ? { path: moduleOptions } : moduleOptions;

        return {
          ...result,
          [moduleName]: this.getPropsDefinition(path, options)
        };
      },
      {}
    );
  }
}
