export default function withInitialValue(VariableComponent: any): {
    ({ classes, title, type, options, name, value, onChange, ...props }: {
        [x: string]: any;
        classes: any;
        title: any;
        type: any;
        options: any;
        name: any;
        value: any;
        onChange: any;
    }): JSX.Element;
    displayName: string;
};
