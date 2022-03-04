export default function withErrorBoundary(Widget: any): {
    (props: any): JSX.Element;
    Naked: any;
    displayName: string;
};
