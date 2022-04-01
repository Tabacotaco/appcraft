import withStyles from '@material-ui/core/styles/withStyles';

const makeMuiStyles = (options) => {
  const withStyleClasses = withStyles(options);

  return (ImplementElement) => {
    const StyledElement = withStyleClasses(ImplementElement);

    StyledElement.Naked = ImplementElement;
    StyledElement.displayName = 'StyledElement';
    StyledElement.overrideds = ['classes'];

    return StyledElement;
  };
};

export default makeMuiStyles;
