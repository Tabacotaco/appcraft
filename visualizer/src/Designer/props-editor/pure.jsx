/* eslint-disable react/prop-types */
import React, { useMemo, useContext, useImperativeHandle } from 'react';
import ReactNumberFormat from 'react-number-format';

import cx from 'clsx';

import _debounce from 'lodash/debounce';
import _set from 'lodash/set';
import _toPath from 'lodash/toPath';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import withPropitem from './with-propitem';
import { ProptypesEditorContext, useBindingState } from '../_customs';


// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: theme.spacing(5)
  },
  bool: {
    width: '100%',
    margin: theme.spacing(0, 2)
  },
  required: {
    color: theme.palette.secondary.main
  }
}));

// TODO: Components
function BoolField({ inputRef, name, value, disabled = false, onChange }) {
  const classes = useStyles();

  return (
    <FormControlLabel
      className={classes.bool}
      disabled={disabled}
      labelPlacement="start"
      control={(
        <Switch
          inputRef={inputRef}
          defaultChecked={value === true}
          size="small"
          onChange={({ target: { checked } }) => onChange({ target: { name, value: checked } })}
        />
      )}
    />
  );
}

function NumberField({ inputRef, name, required, value, onChange, ...props }) {
  return (
    <ReactNumberFormat
      {...props}
      value={value || (required ? 0 : null)}
      thousandSeparator
      isNumericString
      getInputRef={inputRef}
      onValueChange={({ value: newValue }) => onChange({ target: { name, value: parseFloat(newValue) } })}
    />
  );
}

const PureBase = React.forwardRef(({ pathname, propName, definition, value, onFieldLocked }, ref) => {
  const { InputStyles, classes: $classes, props, onChange } = useContext(ProptypesEditorContext);
  const binding = useBindingState(pathname);
  const dropdown = definition.type === 'oneOf' && Array.isArray(definition.options);
  const classes = useStyles();

  useImperativeHandle(ref, () => ({}), []);

  const handleChange = useMemo(() => _debounce(({ target: { value: propValue } }) => {
    const path = _toPath(pathname);

    switch (definition.type) {
      case 'bool':
        onChange({ props: _set(props, path, propValue === true) });
        break;
      case 'number':
        onChange({ props: _set(props, path, propValue || (definition.required ? 0 : null)) });
        break;
      default:
        onChange({ props: _set(props, path, propValue || '') });
    }
    onFieldLocked(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, 1200), [definition, pathname, props, onChange]);

  return (
    <TextField
      {...InputStyles}
      {...(dropdown && {
        select: true,
        SelectProps: { displayEmpty: !definition.required }
      })}
      disabled={binding}
      fullWidth
      required={definition.required}
      label={propName}
      defaultValue={value || ''}
      onChange={(e) => {
        onFieldLocked(true);
        handleChange(e);
      }}
      InputLabelProps={{
        ...(definition.type === 'bool' && { shrink: false }),
        classes: { asterisk: cx(classes.required, $classes?.required) }
      }}
      InputProps={{
        ...(/^(bool|number)$/.test(definition.type) && {
          inputComponent: definition.type === 'bool' ? BoolField : NumberField
        }),
        className: cx(classes.root, $classes?.input)
      }}
    >
      {!definition.required && (
        <MenuItem value="">
          &nbsp;
        </MenuItem>
      )}

      {dropdown && definition.options?.map((option) => (
        <MenuItem key={option} value={option}>
          {option === false ? 'false' : option}
        </MenuItem>
      ))}
    </TextField>
  );
});

PureBase.displayName = 'PureBase';

export default withPropitem('pure', PureBase);
