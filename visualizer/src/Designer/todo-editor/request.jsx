/* eslint-disable react/prop-types */
import React, { useState, useMemo, useContext } from 'react';

import cx from 'clsx';
import { generate as uuid } from 'shortid';

import _debounce from 'lodash/debounce';
import _omit from 'lodash/omit';
import _pick from 'lodash/pick';

import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

import { ProptypesEditorContext } from '../_customs';
import { getRequestURL } from '../../Visualizer';
import { useLocales } from '../../utils/locales';


const METHODS = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT'];

const DEFAULT = {
  header: () => '',
  search: () => ({
    uid: uuid(),
    description: `Variable_${Math.floor(Math.random() * 10000)}`,
    type: 'input'
  })
};

const useStyles = makeStyles((theme) => ({
  capitalize: {
    textTransform: 'capitalize'
  },
  icon: {
    minWidth: theme.spacing(5.25),
    width: theme.spacing(5.25)
  },
  action: {
    right: '0 !important'
  },
  body: {
    '& > span.label': {
      '& > *:first-child + *': {
        textAlign: 'left',
        textTransform: 'capitalize'
      }
    }
  },
  secondary: {
    '&.icon-1': {
      paddingRight: `${theme.spacing(4.5)}px !important`
    },

    '&.icon-2': {
      paddingRight: `${theme.spacing(8)}px !important`
    }
  },
  seq: {
    background: theme.palette.success.main
  },
  variable: {
    padding: theme.spacing(0, 1.5)
  }
}));


function Subheader({ disabled, code, expanded, value, onChange, onExpandedChange }) {
  const { getFixedT: dt } = useLocales();
  const classes = useStyles();

  return (
    <ListItem
      disableGutters
      button
      disabled={Object.keys(value).length === 0}
      onClick={() => {
        expanded[expanded.has(code) ? 'delete' : 'add'](code);
        onExpandedChange(new Set(expanded));
      }}
    >
      <ListItemIcon className={classes.icon}>
        <IconButton size="small">
          {expanded.has(code) && Object.keys(value).length > 0
            ? (<ExpandMoreIcon />)
            : (<ChevronRightIcon />)}
        </IconButton>
      </ListItemIcon>

      <ListItemText primary={dt(`ttl-request-${code}`)} />

      <ListItemSecondaryAction className={classes.action}>
        <Tooltip title={dt(`btn-add-request-${code}`)}>
          <IconButton
            size="small"
            color="primary"
            disabled={Boolean(disabled)}
            onClick={() => {
              onExpandedChange(new Set(expanded.add(code)));

              onChange({
                name: code,
                value: { ...value, [`${code.charAt(0).toUpperCase()}${code.slice(1)}_${Math.floor(Math.random() * 10000)}`]: DEFAULT[code]() }
              });
            }}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default function RequestTodo({ pathname, refs, todo, onChange, onVariableEdit }) {
  const { getFixedT: dt } = useLocales();
  const { InputStyles } = useContext(ProptypesEditorContext);
  const { url, method, header, search, body } = todo;

  const [expanded, setExpanded] = useState(new Set());
  const [headerDisabled, setHeaderDisabled] = useState(false);
  const [searchDisabled, setSearchDisabled] = useState(false);
  const classes = useStyles();

  const handleHeaderChange = useMemo(() => (
    _debounce((type, { target: { name: target, value } }) => {
      setHeaderDisabled(false);

      onChange({
        name: 'header',
        value: Object.entries(header).reduce(
          (result, [headerName, headerValue]) => ({
            ...result,
            [type === 'name' && headerName === target ? value : headerName]: type === 'value' && headerName === target ? value : headerValue
          }),
          {}
        )
      });
    }, 800)
  ), [header, onChange]);

  return (
    <>
      <TextField
        {...InputStyles}
        fullWidth
        required
        label={dt('lbl-url')}
        name="url"
        error={!url?.trim()}
        value={url || ''}
        onChange={({ target }) => onChange(target)}
        InputProps={{
          endAdornment: refs && url && Object.keys(search || {}).length > 0 && (
            <InputAdornment position="end">
              <Tooltip title={dt('lbl-preview-url', { url: getRequestURL(refs, url, search) })}>
                <VisibilityOutlinedIcon size="small" />
              </Tooltip>
            </InputAdornment>
          )
        }}
      />

      <TextField
        {...InputStyles}
        SelectProps={{ displayEmpty: true }}
        fullWidth
        select
        label={dt('lbl-method')}
        name="method"
        value={method || 'GET'}
        onChange={({ target }) => onChange(target)}
      >
        {METHODS.map(($method) => (
          <MenuItem key={$method} value={$method}>
            {$method}
          </MenuItem>
        ))}
      </TextField>

      {/* TODO: Header Settings */}
      <List
        disablePadding
        subheader={(
          <Subheader
            code="header"
            disabled={headerDisabled}
            expanded={expanded}
            value={header || {}}
            onChange={onChange}
            onExpandedChange={setExpanded}
          />
        )}
      >
        <Collapse in={expanded.has('header')} timeout="auto" unmountOnExit>
          {Object.entries(header || {}).map(([name, value]) => (
            <ListItem key={name} disableGutters classes={{ secondaryAction: cx(classes.secondary, 'icon-1') }}>
              <ListItemText
                primary={(
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    fullWidth
                    size="small"
                    variant="filled"
                    label={dt('lbl-header-name')}
                    disabled={headerDisabled !== false && (!headerDisabled.startsWith(name) || headerDisabled === `${name}.value`)}
                    name={name}
                    defaultValue={name}
                    onChange={(e) => {
                      setHeaderDisabled(`${name}.key`);
                      handleHeaderChange('name', e);
                    }}
                  />
                )}
                secondary={(
                  <TextField
                    fullWidth
                    size="small"
                    variant="filled"
                    label={dt('lbl-header-content')}
                    disabled={headerDisabled !== false && (!headerDisabled.startsWith(name) || headerDisabled === `${name}.key`)}
                    name={name}
                    defaultValue={value}
                    onChange={(e) => {
                      setHeaderDisabled(`${name}.value`);
                      handleHeaderChange('value', e);
                    }}
                  />
                )}
              />

              <ListItemSecondaryAction className={classes.action}>
                <Tooltip title={dt('btn-remove-request-header')}>
                  <IconButton
                    size="small"
                    color="secondary"
                    disabled={Boolean(headerDisabled)}
                    onClick={() => onChange({ name: 'header', value: _omit(header, [name]) })}
                  >
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </Collapse>
      </List>

      {/* TODO: URL Search Parameters */}
      <List
        disablePadding
        subheader={(
          <Subheader
            code="search"
            disabled={searchDisabled}
            expanded={expanded}
            value={search || {}}
            onChange={onChange}
            onExpandedChange={setExpanded}
          />
        )}
      >
        <Collapse in={expanded.has('search')} timeout="auto" unmountOnExit>
          {Object.entries(search || {}).map(([name, variable]) => (
            <ListItem key={name} disableGutters classes={{ secondaryAction: cx(classes.secondary, 'icon-2') }}>
              <ListItemText
                primary={(
                  <ListItemText
                    className={classes.variable}
                    primaryTypographyProps={{ className: classes.capitalize, color: 'textPrimary' }}
                    primary={dt(`opt-variable-${(variable.finalType || variable.type).toLowerCase()}`)}
                    secondary={variable.description}
                  />
                )}
                secondary={(
                  <TextField
                    fullWidth
                    size="small"
                    variant="filled"
                    label={dt('lbl-search-name')}
                    disabled={searchDisabled !== false && (!searchDisabled.startsWith(name) || searchDisabled === `${name}.value`)}
                    name={name}
                    defaultValue={name}
                    onChange={() => setSearchDisabled(`${name}.key`)}
                  />
                )}
              />

              <ListItemSecondaryAction className={classes.action}>
                <Tooltip title={dt('btn-edit-search')}>
                  <IconButton size="small" disabled={!refs} onClick={() => onVariableEdit({ refs, name: `${pathname}.search["${name}"]`, todo: todo.uid, value: variable })}>
                    <EditOutlinedIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title={dt('btn-remove-search')}>
                  <IconButton
                    size="small"
                    color="secondary"
                    disabled={Boolean(searchDisabled)}
                    onClick={() => onChange({ name: 'search', value: _omit(search, [name]) })}
                  >
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </Collapse>
      </List>

      {/* TODO: Request Body */}
      <List disablePadding>
        <ListItem disableGutters classes={{ secondaryAction: cx(classes.secondary, 'icon-1') }}>
          <ListItemText
            primaryTypographyProps={{ className: classes.capitalize }}
            primary={dt(body ? `opt-variable-${(body.finalType || body.type).toLowerCase()}` : 'lbl-request-body')}
            secondary={body?.description}
          />
        </ListItem>

        <ListItemSecondaryAction className={classes.action}>
          <Tooltip title={dt('btn-edit-request-body')}>
            <IconButton
              size="small"
              disabled={!refs}
              onClick={() => onVariableEdit({
                refs,
                name: `${pathname}.body`,
                todo: todo.uid,
                value: body || {
                  uid: uuid(),
                  description: `Body_${Math.floor(Math.random() * 10000)}`,
                  type: 'input'
                }
              })}
            >
              <EditOutlinedIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </List>
    </>
  );
}
