/* eslint-disable react/prop-types */
import React, { useState, useMemo, useContext } from 'react';

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
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

import IconMenuButton, { IconMenuItem } from '../icon-menu-button';
import { ProptypesEditorContext } from '../_customs';
import { getRequestURL } from '../../Visualizer/_customs';
import { useLocales } from '../../_utils/locales';


const METHODS = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT'];

const DEFAULT = {
  header: () => '',
  search: () => ({
    uid: uuid(),
    description: `Variable_${Math.floor(Math.random() * 10000)}`,
    type: 'String'
  })
};

// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  capitalize: {
    textTransform: 'capitalize'
  },
  icon: {
    minWidth: theme.spacing(5.25),
    width: theme.spacing(5.25)
  },
  padding: {
    minWidth: theme.spacing(3.75),
    width: theme.spacing(3.75)
  },
  action: {
    right: '0 !important'
  },
  secondary: {
    paddingRight: `${theme.spacing(4)}px !important`
  },
  variable: {
    padding: theme.spacing(0, 1.5)
  }
}));


// TODO: Components
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
              const name = `${code.charAt(0).toUpperCase()}${code.slice(1)}_${Math.floor(Math.random() * 10000)}`;

              onExpandedChange(new Set(expanded.add(code)));

              onChange({
                name: code,
                value: {
                  ...value,
                  [name]: DEFAULT[code]()
                }
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

export default function RequestTodo({ pathname, refs, todo, onChange, onSetting }) {
  const { getFixedT: dt } = useLocales();
  const { InputStyles, disableHandleRefs } = useContext(ProptypesEditorContext);
  const { url, method, header, search, body } = todo;

  const [expanded, setExpanded] = useState(new Set());
  const [headerDisabled, setHeaderDisabled] = useState(false);
  const [searchDisabled, setSearchDisabled] = useState(false);
  const classes = useStyles();

  const handleOptionChange = useMemo(() => (
    _debounce((type, { target: { name: target, value } }, { setDisabled, category, options }) => {
      setDisabled(false);

      onChange({
        name: category,
        value: Object.entries(options).reduce(
          (result, [optName, optValue]) => ({
            ...result,
            [type === 'name' && optName === target ? value : optName]: type === 'value' && optName === target ? value : optValue
          }),
          {}
        )
      });
    }, 800)
  ), [onChange]);

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
            <ListItem key={name} disableGutters classes={{ secondaryAction: classes.secondary }}>
              <ListItemIcon className={classes.padding} />

              <ListItemText
                primary={(
                  <TextField
                    fullWidth
                    size="small"
                    variant="filled"
                    label={dt('lbl-header-name')}
                    disabled={headerDisabled !== false && (!headerDisabled.startsWith(name) || headerDisabled === `${name}.value`)}
                    name={name}
                    defaultValue={name}
                    onChange={(e) => {
                      setHeaderDisabled(`${name}.key`);
                      handleOptionChange('name', e, { category: 'header', options: header, setDisabled: setHeaderDisabled });
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
                      handleOptionChange('value', e, { category: 'header', options: header, setDisabled: setHeaderDisabled });
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
                    onClick={() => (
                      onChange({
                        name: 'header',
                        value: _omit(header, [name])
                      })
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
            <ListItem key={name} disableGutters classes={{ secondaryAction: classes.secondary }}>
              <ListItemIcon className={classes.padding} />

              <ListItemText disableTypography>
                <ListItemText
                  className={classes.variable}
                  primaryTypographyProps={{ className: classes.capitalize, color: 'primary' }}
                  primary={dt(`opt-variable-${(variable.finalType || variable.type).toLowerCase()}`)}
                  secondary={variable.description}
                />

                <TextField
                  fullWidth
                  size="small"
                  variant="filled"
                  label={dt('lbl-search-name')}
                  disabled={searchDisabled !== false && (!searchDisabled.startsWith(name) || searchDisabled === `${name}.value`)}
                  name={name}
                  defaultValue={name}
                  onChange={(e) => {
                    setSearchDisabled(`${name}.key`);
                    handleOptionChange('name', e, { category: 'search', options: search, setDisabled: setSearchDisabled });
                  }}
                />
              </ListItemText>

              <ListItemSecondaryAction className={classes.action}>
                <IconMenuButton size="small" color="default" icon={(<MoreVertIcon />)}>
                  <IconMenuItem
                    text={dt('btn-edit-search')}
                    icon={(<EditOutlinedIcon color="primary" />)}
                    disabled={!disableHandleRefs && !refs}
                    onClick={() => (
                      onSetting({
                        type: 'variable',
                        refs,
                        name: `${pathname}.search["${name}"]`,
                        todo: todo.uid,
                        value: variable
                      })
                    )}
                  />

                  <IconMenuItem
                    text={dt('btn-remove-search')}
                    icon={(<CloseIcon color="secondary" />)}
                    onClick={() => onChange({ name: 'search', value: _omit(search, [name]) })}
                  />
                </IconMenuButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </Collapse>
      </List>

      {/* TODO: Request Body */}
      <List disablePadding>
        <ListItem disableGutters classes={{ secondaryAction: classes.secondary }}>
          <ListItemText disableTypography>
            <Typography variant="subtitle1" color="textPrimary" className={classes.capitalize}>
              {dt('lbl-request-body')}
            </Typography>

            {body && (
              <ListItemText
                className={classes.variable}
                primaryTypographyProps={{ className: classes.capitalize, color: 'primary' }}
                primary={dt(`opt-variable-${(body.finalType || body.type).toLowerCase()}`)}
                secondary={body?.description}
              />
            )}
          </ListItemText>
        </ListItem>

        <ListItemSecondaryAction className={classes.action}>
          <Tooltip title={dt('btn-edit-request-body')}>
            <IconButton
              size="small"
              disabled={!refs}
              onClick={() => (
                onSetting({
                  type: 'variable',
                  refs,
                  name: `${pathname}.body`,
                  todo: todo.uid,
                  value: body || {
                    uid: uuid(),
                    description: `Body_${Math.floor(Math.random() * 10000)}`,
                    type: 'Object'
                  }
                })
              )}
            >
              <EditOutlinedIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </List>
    </>
  );
}
