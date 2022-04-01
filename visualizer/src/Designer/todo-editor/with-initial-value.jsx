/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';
import ReactNumberFormat from 'react-number-format';

import { generate as uuid } from 'shortid';

import _debounce from 'lodash/debounce';
import _get from 'lodash/get';

import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { DateTimePicker } from '@material-ui/pickers/DateTimePicker';

import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getPropPathname } from '../_customs';
import { useLocales } from '../../_utils/locales';


const NumberField = ({ inputRef, name, required, value, onChange, ...props }) => (
  <ReactNumberFormat
    {...props}
    value={value}
    thousandSeparator
    isNumericString
    getInputRef={inputRef}
    onValueChange={({ value: newValue }) => onChange({ target: { name, value: parseFloat(newValue) } })}
  />
);

export default function withInitialValue(VariableComponent) {
  const InitialValue = ({ classes, title, type, options, name, value, onChange, ...props }) => {
    const { getFixedT: dt } = useLocales();
    const [expanded, setExpanded] = useState(false);

    const handlePropertyRename = useMemo(() => _debounce(
      ({ target: { name: prevName, value: newName } }) => onChange({
        name,
        value: Object.entries(value).reduce(
          (result, [property, variable]) => ({
            ...result,
            [property === prevName ? newName : property]: variable
          }),
          {}
        )
      }),
      800
      // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [value]);

    switch (type) {
      case 'Boolean':
        return (
          <TextField
            fullWidth
            select
            variant="filled"
            size="small"
            label={dt('lbl-initial-value')}
            name={name}
            value={value || 'false'}
            onChange={({ target }) => onChange(target)}
          >
            <MenuItem value="true">
              True
            </MenuItem>

            <MenuItem value="false">
              False
            </MenuItem>
          </TextField>
        );

      case 'Date':
        return (
          <DateTimePicker
            inputVariant="filled"
            size="small"
            fullWidth
            clearable
            autoOk
            ampm={false}
            format="yyyy-MM-dd HH:mm"
            label={dt('lbl-initial-value')}
            name={name}
            value={value}
            onChange={(e) => onChange({ name, value: e?.valueOf() || null })}
          />
        );

      case 'Number':
        return (
          <TextField
            fullWidth
            variant="filled"
            size="small"
            label={dt('lbl-initial-value')}
            name={name}
            value={value}
            onChange={({ target }) => onChange(target)}
            InputProps={{ inputComponent: NumberField }}
          />
        );

      case 'String':
        return (
          <TextField
            fullWidth
            variant="filled"
            size="small"
            label={dt('lbl-initial-value')}
            name={name}
            value={value || ''}
            onChange={({ target }) => onChange(target)}
          />
        );

      default:
        if (/^(input|source|state|todo)$/.test(type)) {
          return (
            <TextField
              fullWidth
              select
              required
              variant="filled"
              size="small"
              disabled={!_get(options, type).length}
              label={dt('lbl-initial-value')}
              name={name}
              value={_get(options, type).some(({ code }) => code === value) ? value : ''}
              onChange={({ target }) => onChange(target)}
            >
              {_get(options, type).map(({ code, description: desc, refValue }) => (
                <MenuItem key={code} value={code}>
                  <Tooltip
                    {...(!refValue && { open: false })}
                    title={(
                      <pre>
                        {JSON.stringify(refValue, null, 2)}
                      </pre>
                    )}
                  >
                    <ListItemText {...desc} />
                  </Tooltip>
                </MenuItem>
              ))}
            </TextField>
          );
        }

        if (/^(Array|Object)$/.test(type) && value) {
          return (
            <List
              disablePadding
              subheader={(
                <ListItem disableGutters button disabled={Object.keys(value).length === 0} onClick={() => setExpanded(!expanded)}>
                  <ListItemIcon className={classes.icon}>
                    <IconButton size="small">
                      {expanded && Object.keys(value).length > 0
                        ? (<ExpandMoreIcon />)
                        : (<ChevronRightIcon />)}
                    </IconButton>
                  </ListItemIcon>

                  <ListItemText primary={title || dt(`ttl-initial-${type.toLowerCase()}`)} />

                  <ListItemSecondaryAction>
                    <Tooltip title={dt('btn-add-property')}>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => {
                          const property = { uid: uuid(), type: 'String', description: `Variable_${Math.floor(Math.random() * 10000)}` };

                          setExpanded(true);

                          onChange({
                            name,
                            value: type === 'Array'
                              ? [...value, property]
                              : { ...value, [property.description]: property }
                          });
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            >
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                {Object.entries(value).map(([property, variable]) => (
                  <ListItem key={variable.uid} divider disableGutters className={classes.item}>
                    <ListItemIcon className={classes.icon}>
                      <Tooltip title={dt('btn-remove-property')}>
                        <IconButton
                          size="small"
                          color="secondary"
                          onClick={() => (
                            onChange({
                              name,
                              value: Object.entries(value).reduce(
                                (result, [$property, $variable]) => (
                                  $variable.uid === variable.uid
                                    ? result
                                    : type === 'Array'
                                      ? result.concat($variable)
                                      : { ...result, [$property]: $variable }
                                ),
                                type === 'Array' ? [] : {}
                              )
                            })
                          )}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItemIcon>

                    <ListItemText disableTypography className="content">
                      {type === 'Object' && (
                        <TextField
                          fullWidth
                          required
                          variant="filled"
                          size="small"
                          label={dt('lbl-property-name', { propName: '' })}
                          name={property}
                          defaultValue={property}
                          onChange={handlePropertyRename}
                        />
                      )}

                      <VariableComponent
                        {...props}
                        prefix={getPropPathname(type.toLowerCase(), name, property)}
                        value={variable}
                        onChange={onChange}
                      />
                    </ListItemText>
                  </ListItem>
                ))}
              </Collapse>
            </List>
          );
        }

        return null;
    }
  };

  InitialValue.displayName = 'InitialValue';

  return InitialValue;
}
