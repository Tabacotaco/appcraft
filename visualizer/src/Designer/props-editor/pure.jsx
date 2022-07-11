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
import { DateTimePicker } from '@material-ui/pickers/DateTimePicker';
import { makeStyles } from '@material-ui/core/styles';

import withPropitem from './with-propitem';
import { ProptypesEditorContext, useBindingState } from '../_customs';


//* Custom Hooks
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

//* Components
function BoolField({ inputRef, name, defaultValue, disabled = false, onChange }) {
  const classes = useStyles();

  return (
    <FormControlLabel
      className={classes.bool}
      disabled={disabled}
      labelPlacement="start"
      control={(
        <Switch
          inputRef={inputRef}
          defaultChecked={defaultValue === true}
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
      thousandSeparator
      isNumericString
      getInputRef={inputRef}
      onValueChange={({ value: newValue }) => onChange({ target: { name, value: parseFloat(newValue) } })}
    />
  );
}

const PureBase = React.forwardRef(({ pathname, propName, definition, disabled, value, onFieldLocked }, ref) => {
  const { InputStyles, classes: $classes, props, onChange } = useContext(ProptypesEditorContext);
  const [binding] = useBindingState(pathname);
  const dropdown = definition.type === 'oneOf' && Array.isArray(definition.options);
  const classes = useStyles();

  useImperativeHandle(ref, () => ({}), []);

  const handleChange = useMemo(() => (
    _debounce(({ target: { value: propValue } }) => {
      const path = _toPath(pathname);

      switch (definition.type) {
        case 'bool':
          onChange({ props: _set(props, path, propValue === true) });
          break;
        case 'number':
          onChange({ props: _set(props, path, typeof propValue === 'number' ? propValue : null) });
          break;
        default:
          onChange({ props: _set(props, path, propValue || '') });
      }
      onFieldLocked(false);
    }, 1200)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [definition, pathname, props, onChange]);

  return definition.type === 'instanceOf' && definition.options === 'Date'
    ? (
      <DateTimePicker
        InputLabelProps={{ classes: { asterisk: cx(classes.required, $classes?.required) } }}
        InputProps={{ className: cx(classes.root, $classes?.input) }}
        fullWidth
        color={InputStyles.color}
        inputVariant={InputStyles.variant}
        margin={InputStyles.margin}
        size={InputStyles.size}
        format="yyyy-MM-dd HH:mm"
        disabled={binding || disabled}
        required={definition.required}
        label={propName}
        value={value || ''}
        onChange={(e) => {
          onFieldLocked(true);
          handleChange({ target: { value: e.toISOString() } });
        }}
      />
    )
    : (
      <TextField
        {...InputStyles}
        {...(dropdown && {
          select: true,
          SelectProps: { displayEmpty: !definition.required }
        })
        }
        disabled={binding || disabled}
        fullWidth
        required={definition.required}
        label={propName}
        defaultValue={(
          definition.type === 'bool'
            ? value === true
            : definition.type === 'number'
              ? (typeof value === 'number' ? value : '')
              : (value || '')
        )}
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

        {
          dropdown && definition.options?.map((option) => (
            <MenuItem key={option} value={option}>
              {option === false ? 'false' : option}
            </MenuItem>
          ))
        }
      </TextField>
    );
});

PureBase.displayName = 'PureBase';

export default withPropitem('pure', PureBase);
