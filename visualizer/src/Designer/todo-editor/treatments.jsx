/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';

import { generate as uuid } from 'shortid';

import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FunctionsIcon from '@material-ui/icons/Functions';

import { getPropPathname, getTreatmentOptions } from '../_customs';
import { useLocales } from '../../_utils/locales';


function Treatment({
  InitialValue,
  classes,
  superiorName,
  options,
  reference,
  list,
  index,
  value,
  onChange
}) {
  const { uid, description, name, args } = value;
  const pathname = getPropPathname('array', superiorName, index);

  const { getFixedT: dt } = useLocales();
  const { isFunc = false } = useMemo(() => options.find(({ property }) => property === name), [options, name]) || {};

  return (
    <ListItem key={uid} divider disableGutters className={classes.item}>
      <ListItemText
        primary={(
          <TextField
            fullWidth
            required
            variant="filled"
            size="small"
            label={dt('lbl-description')}
            name={getPropPathname('object', pathname, 'description')}
            value={description}
            onChange={({ target }) => onChange(target)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title={dt('lbl-preview-treatment', { value: reference ? JSON.stringify(reference) : 'Null' })}>
                    <IconButton size="small" color="primary">
                      <FunctionsIcon />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <TextField
                    InputProps={{ className: classes.select, disableUnderline: true }}
                    SelectProps={{ displayEmpty: true }}
                    fullWidth
                    required
                    select
                    variant="standard"
                    size="small"
                    name={getPropPathname('object', pathname, 'name')}
                    value={name}
                    onChange={({ target: { value: propertyName } }) => (
                      onChange({
                        name: superiorName,
                        value: list.reduce(
                          (result, $treatment, i) => (
                            i > index
                              ? result
                              : result.concat({
                                ...$treatment,
                                ...($treatment.uid === uid && { name: propertyName })
                              })
                          ),
                          []
                        )
                      })
                    )}
                  >
                    {options.map(({ property }) => (
                      <MenuItem key={property} value={property}>
                        <span className={classes.capitalize}>
                          {property}
                        </span>
                      </MenuItem>
                    ))}
                  </TextField>
                </InputAdornment>
              )
            }}
          />
        )}
        secondary={isFunc && (
          <InitialValue
            {...{ classes, options, onChange }}
            disableTreatments
            title={dt('ttl-arguments')}
            type="Array"
            name={getPropPathname('object', pathname, 'args')}
            value={args || []}
          />
        )}
      />
    </ListItem>
  );
}

export default function Treatments({ InitialValue, classes, name, value, onChange }) {
  const { getFixedT: dt } = useLocales();
  const [expanded, setExpanded] = useState(false);

  return (
    <List
      disablePadding
      subheader={(
        <ListItem disableGutters button disabled={value.length === 0} onClick={() => setExpanded(!expanded)}>
          <ListItemIcon className={classes.icon}>
            <IconButton size="small">
              {expanded && value.length > 0
                ? (<ExpandMoreIcon />)
                : (<ChevronRightIcon />)}
            </IconButton>
          </ListItemIcon>

          <ListItemText primaryTypographyProps={{ color: 'textSecondary' }} primary={dt('ttl-treatments')} />

          <ListItemSecondaryAction>
            {(value.length === 0 || getTreatmentOptions(value[value.length - 1].after).length > 0) && (
              <Tooltip title={dt('btn-add-treatment')}>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => {
                    setExpanded(true);
                    onChange({ name, value: [...value, { uid: uuid(), description: `Treatment_${Math.floor(Math.random() * 10000)}` }] });
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
            )}

            {value.length > 0 && (
              <Tooltip title={dt('btn-reset-treatment')}>
                <IconButton size="small" color="secondary" onClick={() => onChange({ name, value: [] })}>
                  <DeleteOutlineIcon />
                </IconButton>
              </Tooltip>
            )}
          </ListItemSecondaryAction>
        </ListItem>
      )}
    >
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {value.map(({ after: reference, options, ...treatment }, index) => (
          <Treatment
            {...{ InitialValue, classes, reference, options, index, onChange }}
            key={treatment.uid}
            superiorName={name}
            list={value}
            value={treatment}
          />
        ))}
      </Collapse>
    </List>
  );
}
