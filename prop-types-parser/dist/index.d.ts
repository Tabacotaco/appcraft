export declare namespace AppcraftParser {
    namespace def {
        enum PropTypeName {
            any = 0,
            array = 1,
            arrayOf = 2,
            bool = 3,
            element = 4,
            elementType = 5,
            exact = 6,
            func = 7,
            instanceOf = 8,
            node = 9,
            number = 10,
            object = 11,
            objectOf = 12,
            oneOf = 13,
            oneOfType = 14,
            shape = 15,
            string = 16,
            symbol = 17
        }
        export type PropType = keyof typeof PropTypeName;
        export interface PropDefinition<T extends PropType = 'exact'> {
            type: T;
            uid: string;
            required: boolean;
            options: T extends 'exact' | 'shape' ? Record<string, PropDefinition<PropType>> : T extends 'arrayOf' | 'objectOf' ? PropDefinition<PropType> : T extends 'oneOfType' ? PropDefinition<PropType>[] : T extends 'oneOf' ? (string | boolean | number)[] : T extends 'instanceOf' ? {
                new (): any;
            } : null;
        }
        export type Definition = {
            propTypes: PropDefinition;
            defaultProps?: Record<string, any>;
        };
        export type Library = Record<string, string>;
        export type ModuleRef<T = any> = Record<string, T>;
        export interface Options {
            extra?: string | string[];
            mock?: ModuleRef;
            prefix?: string;
            sandbox?: ModuleRef<string>;
        }
        export {};
    }
}
export default class PropTypesParser {
    readonly projectPath: string;
    private baseVm;
    readonly globalLibs: AppcraftParser.def.Library;
    readonly defaultMock: AppcraftParser.def.ModuleRef;
    constructor(projectPath: string, { libs, mock }?: {
        libs?: AppcraftParser.def.Library;
        mock?: AppcraftParser.def.ModuleRef;
    });
    private getImportModule;
    getPropsDefinition(importPath: string, options?: AppcraftParser.def.Options): AppcraftParser.def.Definition;
    getPropsDefinitions(importations: Record<string, string | (AppcraftParser.def.Options & {
        path: string;
    })>): Record<string, AppcraftParser.def.Definition>;
}
