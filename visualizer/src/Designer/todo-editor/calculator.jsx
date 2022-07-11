/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import { generate as uuid } from 'shortid';

import _pick from 'lodash/pick';

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
import MoreVertIcon from '@material-ui/icons/MoreVert';

import IconMenuButton, { IconMenuItem } from '../icon-menu-button';
import { ProptypesEditorContext, getPropPathname } from '../_customs';
import { useLocales } from '../../_utils/locales';


//* Custom Hooks
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


//* Components
export function PropertySubheader({ actions, classes, category, disableAdd, disableExpand, expanded, onPropertyAdd, onSubheaderClick }) {
  const { getFixedT: dt } = useLocales();

  return (
    <ListItem disableGutters button disabled={Boolean(disableExpand)} onClick={onSubheaderClick}>
      <ListItemIcon className={classes?.icon}>
        <IconButton size="small">
          {expanded && !disableExpand
            ? (<ExpandMoreIcon />)
            : (<ChevronRightIcon />)}
        </IconButton>
      </ListItemIcon>

      <ListItemText primary={dt(`ttl-${category}`)} />

      <ListItemSecondaryAction className={classes?.action}>
        {!actions?.length
          ? (
            <Tooltip title={dt(`btn-add-${category}`)}>
              <IconButton size="small" color="primary" disabled={Boolean(disableAdd)} onClick={onPropertyAdd}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          )
          : (
            <IconMenuButton size="small" color="default" icon={(<MoreVertIcon />)}>
              <IconMenuItem text={dt(`btn-add-${category}`)} icon={(<AddIcon color="primary" />)} disabled={Boolean(disableAdd)} onClick={onPropertyAdd} />

              {actions.map(({ text, icon, disabled, onClick }) => (
                <IconMenuItem key={text} {...{ text, icon, disabled, onClick }} />
              ))}
            </IconMenuButton>
          )}
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default function CalculatorTodo({ defaultType = 'String', expandeds, pathname, refs, todo, onChange, onPropertyExpand, onSetting }) {
  const { getFixedT: dt } = useLocales();
  const { InputStyles } = useContext(ProptypesEditorContext);
  const { params = [], template } = todo;
  const classes = useStyles();

  return (
    <>
      <List
        disablePadding
        subheader={(
          <PropertySubheader
            category="variables"
            classes={_pick(classes, ['icon', 'action'])}
            disableExpand={params.length === 0}
            expanded={expandeds.has('params')}
            onSubheaderClick={() => onPropertyExpand('params')}
            onPropertyAdd={() => {
              const newParam = { uid: uuid(), type: defaultType, description: `Variable_${Math.floor(Math.random() * 10000)}` };

              if (!expandeds.has('params')) {
                onPropertyExpand('params');
              }

              onChange(
                params.length > 0
                  ? { name: 'params', value: [...params, newParam] }
                  : [
                    { name: 'params', value: [...params, newParam] },
                    { name: 'template', value: '$0' }
                  ]
              );
            }}
          />
        )}
      >
        <Collapse in={expandeds.has('params')} timeout="auto" unmountOnExit>
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
