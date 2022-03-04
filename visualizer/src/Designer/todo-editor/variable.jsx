/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState, useContext } from 'react';

import _cloneDeep from 'lodash/cloneDeep';
import _pick from 'lodash/pick';
import _set from 'lodash/set';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import InitialValue from './initial-value';
import Treatments from './treatments';
import { VARIABLE_TYPE, getPropPathname, useVariableTreatments } from '../_customs';
import { useLocales } from '../../utils/locales';


// TODO: Custom Hooks
const ReferenceContext = createContext({
  refs: null,
  options: []
});

const useStyles = makeStyles((theme) => ({
  icon: {
    minWidth: theme.spacing(5.25),
    width: theme.spacing(5.25)
  },
  title: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  select: {
    width: theme.spacing(24)
  },
  variable: {
    '& > *': {
      padding: '0 !important'
    }
  },
  item: {
    paddingTop: 0,
    paddingBottom: 0,

    '& > .content': {
      borderLeft: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 0, 0, 1),
      margin: '0 !important'
    }
  },
  action: {
    padding: '0 !important',

    '& > *': {
      borderRadius: '0',
      margin: '0 !important',

      '&:first-child': {
        borderBottomLeftRadius: `${theme.shape.borderRadius} !important`
      },
      '&:last-child': {
        borderBottomRightRadius: `${theme.shape.borderRadius} !important`
      }
    }
  }
}));


// TODO: Components
function Variable({ component, prefix = '', disableTreatments = false, variable: defaultVariable, onChange }) {
  const { description, type, initValue } = defaultVariable;

  const { getFixedT: dt } = useLocales();
  const { options, refs } = useContext(ReferenceContext);
  const treatments = useVariableTreatments(getPropPathname('object', prefix, 'finalType'), refs, defaultVariable, onChange);
  const classes = useStyles();

  const initValueName = getPropPathname('object', prefix, 'initValue');
  const treatmentName = getPropPathname('object', prefix, 'treatments');

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
    <List component={component} className={classes.variable}>
      {/* TODO: Type & Description */}
      <ListItem disableGutters>
        <ListItemText
          primary={(
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
                      name={getPropPathname('object', prefix, 'type')}
                      value={type}
                      onChange={({ target }) => onChange([target, { name: initValueName, value: null }])}
                    >
                      {Object.keys(VARIABLE_TYPE).map(($type) => (
                        <MenuItem key={$type} disabled={$type in options && options[$type].length === 0} value={$type}>
                          <span className={classes.capitalize}>
                            {dt(`opt-variable-${$type.toLowerCase()}`)}
                          </span>
                        </MenuItem>
                      ))}
                    </TextField>
                  </InputAdornment>
                )
              }}
            />
          )}
        />
      </ListItem>

      {/* TODO: Initial Value */}
      <ListItem disableGutters>
        <ListItemText
          primary={(
            <InitialValue
              {...{ type, options }}
              VariableComponent={Variable}
              classes={_pick(classes, ['icon', 'item'])}
              name={initValueName}
              value={initValue}
              onChange={onChange}
            />
          )}
        />
      </ListItem>

      {/* TODO: Treatments */}
      {/^(Date|Number|String)$/.test(type) && !disableTreatments && (
        <ListItem disableGutters>
          <ListItemText
            primary={(
              <Treatments
                VariableComponent={Variable}
                classes={_pick(classes, ['capitalize', 'icon', 'item', 'select'])}
                name={treatmentName}
                value={treatments}
                onChange={onChange}
              />
            )}
          />
        </ListItem>
      )}
    </List>
  );
}

Variable.displayName = 'Variable';

export default function VariableDialog({ refs, options, value: defaultValue, onClose, onConfirm, ...props }) {
  const { getFixedT: dt } = useLocales();
  const [variable, setVariable] = useState(null);
  const open = Boolean(options && variable);
  const classes = useStyles();

  useEffect(() => {
    if (defaultValue) {
      setVariable(defaultValue);

      return () => setVariable(null);
    }

    return null;
  }, [defaultValue]);

  return (
    <Dialog {...props} fullWidth maxWidth="sm" scroll="body" open={open}>
      <DialogTitle className={classes.title}>
        {dt('ttl-variable-setting')}
      </DialogTitle>

      <ReferenceContext.Provider value={{ refs, options }}>
        {open && (
          <Variable
            component={DialogContent}
            variable={variable}
            onChange={(targets) => setVariable(
              (Array.isArray(targets) ? targets : [targets]).reduce(
                (result, { name, value }) => _set(result, name, value),
                _cloneDeep(variable)
              )
            )}
          />
        )}
      </ReferenceContext.Provider>

      <ButtonGroup className={classes.action} fullWidth variant="contained" size="large" component={DialogActions}>
        <Button color="default" startIcon={(<CloseIcon />)} onClick={onClose}>
          {dt('btn-cancel')}
        </Button>

        <Button color="primary" startIcon={(<CheckIcon />)} onClick={() => onConfirm(variable)}>
          {dt('btn-confirm')}
        </Button>
      </ButtonGroup>
    </Dialog>
  );
}
