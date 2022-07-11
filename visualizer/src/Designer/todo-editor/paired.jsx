/* eslint-disable react/prop-types */
import React, { useImperativeHandle, useState } from 'react';

import cx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import CalculatorTodo from './calculator';

import VariableBase, { useReference } from './variable';
import { useLocales } from '../../_utils/locales';


//* Custom Hooks
const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(-1, 0)} !important`,
    padding: `${theme.spacing(1, 0)} !important`,

    '& > *[role=source]': {
      padding: theme.spacing(2, 2, 2, 3),
      maxHeight: '100%',
      height: 'fit-content',
      width: theme.spacing(42),
      overflowY: 'auto',

      '& > * + *': {
        marginTop: theme.spacing(3)
      },

      '& + *': {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2, 3, 2, 2),
        width: `calc(100% - ${theme.spacing(42)}px) !important`,
        borderLeft: `1px solid ${theme.palette.divider}`,

        '& > *[role=unactived]': {
          margin: 'auto'
        },

        '& > .variable': {
          height: 'fit-content'
        }
      }
    }
  }
}));


//* Component
const PairedBase = React.forwardRef(({ className, component, prefix = '', value: defaultPaired, onChange }, ref) => {
  const { getFixedT: dt } = useLocales();
  const { refs } = useReference();
  const [actived, setActived] = useState(null);
  const [expandeds, setExpandeds] = useState(new Set());
  const classes = useStyles();

  useImperativeHandle(ref, () => null, []);

  return (
    <Grid className={cx(classes.root, className)} container component={component}>
      <Grid role="source" item>
        <CalculatorTodo
          defaultType="source"
          expandeds={expandeds}
          pathname={prefix}
          refs={refs}
          todo={defaultPaired}
          onChange={onChange}
          onSetting={({ name }, index) => setActived({ name, index })}
          onPropertyExpand={(code) => {
            expandeds[expandeds.has(code) ? 'delete' : 'add'](code);
            setExpandeds(new Set(expandeds));
          }}
        />
      </Grid>

      <Grid item>
        {!actived
          ? (
            <Typography role="unactived" align="center" variant="h5" color="textSecondary">
              {dt('ttl-no-source-actived')}
            </Typography>
          )
          : (
            <VariableBase
              allowedTypes={['source']}
              className="variable"
              prefix={actived.name}
              value={defaultPaired.params[actived.index]}
              onChange={onChange}
            />
          )}
      </Grid>
    </Grid>
  );
});

PairedBase.displayName = 'PairedBase';

export default PairedBase;
