/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';

import _pick from 'lodash/pick';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';


const ErrorBoundary = withStyles(() => ({
  error: {
    margin: 'auto',
    height: '100%'
  }
}))(
  class __ extends React.Component {
    static getDerivedStateFromError() {
      return { error: true };
    }

    constructor(props) {
      super(props);
      this.state = { error: false };
    }

    componentDidMount() {
      const { error } = this.state;
      const { uid, [error ? 'onError' : 'onValid']: onBoundaryHandle } = this.props;

      onBoundaryHandle?.(uid);
    }

    componentDidUpdate(_p, { error: prevErr }) {
      const { error: currErr } = this.state;

      if (prevErr !== currErr) {
        const { uid, [currErr ? 'onError' : 'onValid']: onBoundaryHandle } = this.props;

        onBoundaryHandle?.(uid);
      }
    }

    render() {
      const { classes, children } = this.props;
      const { error } = this.state;

      return !error
        ? (children || null)
        : (
          <Typography className={classes.error} variant="h4" color="secondary" component={ReportProblemOutlinedIcon} />
        );
    }
  }
);


export default function withErrorBoundary(Widget) {
  const ErrorBoundaryHOC = React.memo((props) => (
    <ErrorBoundary>
      {Widget && (
        <Widget {...props} />
      )}
    </ErrorBoundary>
  ));

  ErrorBoundaryHOC.Naked = Widget;
  ErrorBoundaryHOC.displayName = 'ErrorBoundaryHOC';

  return ErrorBoundaryHOC;
}
