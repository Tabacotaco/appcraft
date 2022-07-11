/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { createContext, useImperativeHandle, useEffect, useMemo, useContext } from 'react';

import cx from 'clsx';

import _cloneDeep from 'lodash/cloneDeep';
import _pick from 'lodash/pick';
import _set from 'lodash/set';

import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Treatments from './treatments';
import withInitialValue from './with-initial-value';
import { VARIABLE_TYPE, ProptypesEditorContext, getPropPathname, useVariableTreatments } from '../_customs';
import { useLocales } from '../../_utils/locales';


const REF_TYPES = new Set('input', 'state', 'todo');

//* Custom Hooks
const ReferenceContext = createContext({
  refs: null,
  options: []
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      padding: '0 !important'
    }
  },
  icon: {
    minWidth: theme.spacing(5.25),
    width: theme.spacing(5.25)
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  select: {
    width: theme.spacing(24)
  },
  item: {
    paddingTop: 0,
    paddingBottom: 0,

    '& > .content': {
      borderLeft: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 0, 0, 1),
      margin: '0 !important'
    }
  }
}));


//* Components
export const ReferenceProvider = ReferenceContext.Provider;
export const useReference = () => useContext(ReferenceContext);

const VariableBase = React.forwardRef(({
  allowedTypes = Object.keys(VARIABLE_TYPE).filter((code) => code !== 'source'),
  className,
  component,
  disableTreatments = false,
  prefix = '',
  value,
  onChange
}, ref) => {
  const { description, type, initValue } = value || {};

  const { getFixedT: dt } = useLocales();
  const { options, refs } = useReference();
  const { disableHandleRefs } = useContext(ProptypesEditorContext);
  const treatments = useVariableTreatments(getPropPathname('object', prefix, 'finalType'), refs, value, onChange);
  const classes = useStyles();

  const initValueName = getPropPathname('object', prefix, 'initValue');
  const treatmentName = getPropPathname('object', prefix, 'treatments');

  const InitialValue = useMemo(() => withInitialValue(VariableBase), []);

  useImperativeHandle(ref, () => null, []);

  useEffect(() => {
    const init = Object.entries(VARIABLE_TYPE).find(([$type]) => $type === type)?.[1].init || null;

    if (!initValue && init !== initValue) {
      onChange([
        { name: initValueName, value: init },
        { name: treatmentName, value: [] }
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <List component={component} className={cx(classes.root, className)}>
      {/* TODO: Type & Description */}
      <ListItem disableGutters>
        <ListItemText disableTypography>
          <TextField
            fullWidth
            required
            variant="filled"
            size="small"
            label={dt('lbl-variable')}
            name={getPropPathname('object', prefix, 'description')}
            value={description}
            onChange={({ target }) => onChange(target)}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TextField
                    InputProps={{ className: classes.select, disableUnderline: true }}
                    variant="standard"
                    size="small"
                    fullWidth
                    select
                    disabled={allowedTypes.length <= 1 && type}
                    name={getPropPathname('object', prefix, 'type')}
                    value={type}
                    onChange={({ target }) => onChange([target, { name: initValueName, value: null }])}
                  >
                    {allowedTypes.map(($type) => {
                      const disabled = $type in options && options[$type].length === 0;

                      return disableHandleRefs && REF_TYPES.has($type) && disabled
                        ? null
                        : (
                          <MenuItem key={$type} disabled={disabled} value={$type}>
                            <span className={classes.capitalize}>
                              {dt(`opt-variable-${$type.toLowerCase()}`)}
                            </span>
                          </MenuItem>
                        );
                    })}
                  </TextField>
                </InputAdornment>
              )
            }}
          />
        </ListItemText>
      </ListItem>

      {/* TODO: Initial Value */}
      <ListItem disableGutters>
        <ListItemText disableTypography>
          <InitialValue
            {...{ type, options }}
            classes={_pick(classes, ['icon', 'item'])}
            name={initValueName}
            value={initValue}
            onChange={onChange}
          />
        </ListItemText>
      </ListItem>

      {/* TODO: Treatments */}
      {/^(Date|Number|Object|String)$/.test(type) && !disableTreatments && (
        <ListItem disableGutters>
          <ListItemText disableTypography>
            <Treatments
              InitialValue={InitialValue}
              classes={_pick(classes, ['capitalize', 'icon', 'item', 'select'])}
              name={treatmentName}
              value={treatments}
              onChange={onChange}
            />
          </ListItemText>
        </ListItem>
      )}
    </List>
  );
});

VariableBase.displayName = 'VariableBase';

export default VariableBase;
