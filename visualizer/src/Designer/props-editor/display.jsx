/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useContext, useImperativeHandle } from 'react';

import _toPath from 'lodash/toPath';

import { makeStyles } from '@material-ui/core/styles';

import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import Typography from '@material-ui/core/Typography';

import withPropitem from './with-propitem';
import { ProptypesEditorContext } from '../_customs';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',

    '& > *:first-child': {
      marginRight: theme.spacing(1.5)
    }
  }
}));

const DisplayBase = React.forwardRef(({ pathname, propName, definition }, ref) => {
  const { onActive } = useContext(ProptypesEditorContext);
  const classes = useStyles();

  useImperativeHandle(ref, () => ({
    button: true,
    onClick: () => onActive(_toPath(pathname).join('/'))
  }), []);

  return (
    <Typography className={classes.root} variant="subtitle1" color="textPrimary">
      {definition.type === 'func'
        ? (<DeviceHubIcon />)
        : (<AccountTreeIcon />)}

      {propName}
    </Typography>
  );
});

DisplayBase.displayName = 'DisplayBase';

export default withPropitem('display', DisplayBase);
