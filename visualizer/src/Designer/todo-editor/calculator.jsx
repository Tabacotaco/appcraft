/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';

import { generate as uuid } from 'shortid';

import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FunctionsIcon from '@material-ui/icons/Functions';

import IconMenuButton, { IconMenuItem } from '../icon-menu-button';
import { ProptypesEditorContext, getPropPathname } from '../_customs';
import { useLocales } from '../../_utils/locales';


const useStyles = makeStyles((theme) => ({
  icon: {
    minWidth: theme.spacing(5.25),
    width: theme.spacing(5.25),

    '& > *[role=seq]': {
      width: theme.spacing(4),
      height: theme.spacing(4),
      background: theme.palette.success.main
    }
  },
  action: {
    right: '0 !important'
  },
  secondary: {
    paddingRight: `${theme.spacing(4)}px !important`
  }
}));

export default function CalculatorTodo({ disableCollapse = false, defaultType = 'String', pathname, refs, todo, onChange, onSetting }) {
  const { getFixedT: dt } = useLocales();
  const { InputStyles } = useContext(ProptypesEditorContext);
  const { params = [], template } = todo;
  const [expanded, setExpanded] = useState(disableCollapse);
  const classes = useStyles();

  return (
    <>
      <List
        disablePadding
        subheader={(
          <ListItem
            disableGutters
            {...(!disableCollapse && {
              button: true,
              disabled: params.length === 0,
              onClick: () => setExpanded(!expanded)
            })}
          >
            {!disableCollapse && (
              <ListItemIcon className={classes.icon}>
                <IconButton size="small">
                  {expanded && params.length > 0
                    ? (<ExpandMoreIcon />)
                    : (<ChevronRightIcon />)}
                </IconButton>
              </ListItemIcon>
            )}

            <ListItemText primary={dt('ttl-variables')} />

            <ListItemSecondaryAction className={classes.action}>
              <Tooltip title={dt('btn-add-variable')}>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => {
                    const newParam = { uid: uuid(), type: defaultType, description: `Variable_${Math.floor(Math.random() * 10000)}` };

                    setExpanded(true);

                    onChange(
                      params.length > 0
                        ? { name: 'params', value: [...params, newParam] }
                        : [
                          { name: 'params', value: [...params, newParam] },
                          { name: 'template', value: '$0' }
                        ]
                    );
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
          {params.map((variable, i) => (
            <ListItem
              key={variable.uid}
              button
              disableGutters
              classes={{ secondaryAction: classes.secondary }}
              onClick={() => (
                onSetting({
                  type: 'variable',
                  refs,
                  name: getPropPathname('array', getPropPathname('object', pathname, 'params'), i),
                  todo: todo.uid,
                  value: variable
                }, i)
              )}
            >
              <ListItemAvatar className={classes.icon}>
                <Avatar role="seq">
                  {i}
                </Avatar>
              </ListItemAvatar>

              <ListItemText primary={dt(`opt-variable-${(variable.finalType || variable.type).toLowerCase()}`)} secondary={variable.description} />

              <ListItemSecondaryAction className={classes.action}>
                <Tooltip title={dt('btn-remove-variable')}>
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => (
                      onChange([
                        { name: 'template', value: null },
                        { name: 'params', value: params.filter(({ uid }) => uid !== variable.uid) }
                      ])
                    )}
                  >
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </Collapse>
      </List>

      <TextField
        {...InputStyles}
        fullWidth
        required
        label={dt('lbl-calculator')}
        name="template"
        error={!template?.trim()}
        value={template || ''}
        onChange={({ target }) => onChange(target)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconMenuButton size="small" color="primary" disabled={params.length === 0} tooltip={dt('btn-append-variable')} icon={(<FunctionsIcon />)}>
                {params.map(({ uid, type, description }, i) => (
                  <IconMenuItem
                    key={uid}
                    text={(<ListItemText primary={type} secondary={description} />)}
                    onClick={() => onChange({ name: 'template', value: `${template || ''} $${i}` })}
                  />
                ))}
              </IconMenuButton>
            </InputAdornment>
          )
        }}
      />
    </>
  );
}
