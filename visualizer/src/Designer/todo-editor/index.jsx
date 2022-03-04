/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo, useContext, useImperativeHandle } from 'react';

import cx from 'clsx';
import { generate as uuid } from 'shortid';

import _get from 'lodash/get';
import _omit from 'lodash/omit';
import _pick from 'lodash/pick';
import _set from 'lodash/set';
import _toPath from 'lodash/toPath';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import CalculatorTodo from './calculator';
import IconMenuButton, { IconMenuItem } from '../icon-menu-button';
import RequestTodo from './request';
import VariableDialog from './variable';
import withStructure from '../with-structure';
import { ProptypesEditorContext, getPropPathname, useRefOptions } from '../_customs';
import { useLocales } from '../../utils/locales';
import { useWidgetWrapper } from '../../Visualizer';


const TODO_CONTROLS = [
  { component: CalculatorTodo, reg: { type: /^calculator$/ } },
  { component: RequestTodo, reg: { type: /^request$/ } }
];

// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    background: theme.palette.background.default,
    display: 'block',
    overflow: 'hidden auto !important',
    width: '100%'
  },
  subheader: {
    background: theme.palette.background.paper,
    backdropFilter: `blur(${theme.spacing(2)}px)`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: ({ subheaderSpacing = 0 } = {}) => theme.spacing(subheaderSpacing, 0),
    zIndex: theme.zIndex.appBar
  },
  breadcrumbs: {
    justifyContent: 'flex-start',

    '& > span:first-child': {
      textTransform: 'none'
    }
  },
  card: {
    display: 'block',
    border: `1px solid ${theme.palette.divider}`,
    padding: '0 !important',
    margin: theme.spacing(1, 1),
    width: `calc(100% - ${theme.spacing(2)}px)`
  },
  header: {
    borderBottom: `1px solid ${theme.palette.divider}`,

    '& .subheader': {
      textTransform: 'capitalize'
    },

    '& + * + *': {
      borderTop: `1px solid ${theme.palette.divider}`
    }
  },
  content: {
    '& > * + *': {
      marginTop: theme.spacing(3)
    }
  }
}));


// TODO: Components
function TodoItem({ index, pathname, todo, onVariableEdit }) {
  const { getFixedT: dt } = useLocales();
  const { handleRefs } = useWidgetWrapper();
  const { InputStyles, uid: widgetUid, state: globalState, handles, onChange } = useContext(ProptypesEditorContext);
  const { [pathname]: todos } = handles;
  const { uid, type, description, state } = todo;

  const TodoElement = useMemo(() => TODO_CONTROLS.find(({ reg }) => reg.type.test(type))?.component, [type]);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const refs = _get(handleRefs, JSON.stringify([widgetUid, pathname, uid]));

  const handleTodoChange = (targets) => (
    onChange({
      handles: _set(handles, pathname, todos.map(($todo) => (
        $todo.uid !== uid
          ? $todo
          : targets.name === 'type'
            ? { ..._pick($todo, ['uid', 'description', 'state']), type: targets.value }
            : {
              ...$todo,
              ...(Array.isArray(targets) ? targets : [targets]).reduce(
                (result, { name, value }) => _set(result, name, value),
                {}
              )
            }
      )))
    })
  );

  return (
    <Card role={`prop-${type}`} className={classes.card} component={ListItem}>
      <CardHeader
        classes={{ root: classes.header, subheader: 'subheader' }}
        title={description}
        subheader={type}
        avatar={(
          <IconButton onClick={() => setOpen(!open)}>
            {open
              ? (<ExpandLessIcon />)
              : (<ExpandMoreIcon />)}
          </IconButton>
        )}
      />

      <Collapse component={CardContent} classes={{ wrapperInner: classes.content }} in={open} timeout="auto" unmountOnExit>
        <TextField
          {...InputStyles}
          fullWidth
          select
          label={dt('lbl-todo-type')}
          name="type"
          value={type}
          onChange={({ target }) => handleTodoChange(target)}
        >
          <MenuItem value="calculator">
            {dt('opt-calculator-todo')}
          </MenuItem>

          <MenuItem value="request">
            {dt('opt-request-todo')}
          </MenuItem>
        </TextField>

        <TextField {...InputStyles} fullWidth label={dt('lbl-description')} name="description" value={description} onChange={({ target }) => handleTodoChange(target)} />

        {TodoElement && (
          <TodoElement {...{ refs, todo, onVariableEdit }} pathname={getPropPathname('array', pathname, index)} onChange={handleTodoChange} />
        )}
      </Collapse>

      <CardActions>
        <TextField
          {...InputStyles}
          InputProps={{ disableUnderline: true }}
          InputLabelProps={{ shrink: true }}
          SelectProps={{ displayEmpty: true }}
          disabled={globalState.length === 0}
          fullWidth
          select
          variant="filled"
          label={dt('lbl-set-to-state')}
          name="state"
          value={globalState.some(({ widgetUid: $uid, path }) => `${$uid}['${path}']` === state) ? state : ''}
          onChange={({ target }) => handleTodoChange(target)}
        >
          <MenuItem value="">
            None
          </MenuItem>

          {globalState.map(({ widgetUid: $uid, widgetDesc, path }) => (
            <MenuItem key={`${$uid}['${path}']`} value={`${$uid}['${path}']`}>
              <ListItemText primary={widgetDesc} secondary={path} />
            </MenuItem>
          ))}
        </TextField>
      </CardActions>
    </Card>
  );
}

const TodoBase = React.forwardRef(({ superiorPathname, pathname }, ref) => {
  const { getFixedT: dt } = useLocales();
  const { onHandleSlotChange } = useWidgetWrapper();
  const { classes: $classes, uid, handles, onActive, onChange } = useContext(ProptypesEditorContext);
  const [variable, onVariableEdit] = useState(null);
  const { [pathname]: todos = [] } = handles;
  const classes = useStyles();
  const refOptions = useRefOptions(todos, variable || {});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onHandleSlotChange({ uid, pathname }), []);
  useImperativeHandle(ref, () => ({}), []);

  return (
    <>
      <VariableDialog
        refs={variable?.refs}
        options={refOptions}
        value={variable?.value}
        onClose={() => onVariableEdit(null)}
        onConfirm={(newVariable) => {
          onVariableEdit(null);
          onChange({ handles: _set(handles, variable.name, newVariable) });
        }}
      />

      <List
        role="structure"
        className={cx(classes.root, $classes?.structure)}
        subheader={(
          <ListSubheader disableGutters className={cx(classes.subheader, $classes?.subheader)} component={AppBar} color="inherit" elevation={0}>
            <Toolbar
              className={classes.breadcrumbs}
              variant="dense"
              component={Button}
              startIcon={(<ArrowBackIcon />)}
              onClick={() => onActive(_toPath(superiorPathname).join('/'))}
            >
              {pathname}
            </Toolbar>

            <ListItemSecondaryAction>
              <IconMenuButton size="small" color="primary" icon={(<SettingsOutlinedIcon />)}>
                <IconMenuItem
                  icon={(<PlaylistAddIcon />)}
                  text={dt('btn-add-todo')}
                  onClick={() => onChange({
                    handles: _set(handles, pathname, [...todos, {
                      uid: uuid(),
                      description: `Todo_${Math.floor(Math.random() * 10000)}`,
                      type: 'calculator',
                      params: []
                    }])
                  })}
                />

                <IconMenuItem
                  icon={(<DeleteOutlineIcon color="secondary" />)}
                  text={dt('btn-reset-todo')}
                  onClick={() => onChange({
                    handles: { ..._omit(handles, [pathname]) }
                  })}
                />
              </IconMenuButton>
            </ListItemSecondaryAction>
          </ListSubheader>
        )}
      >
        {todos.map((todo, index) => (
          <TodoItem key={todo.uid} {...{ index, pathname, todo, onVariableEdit }} />
        ))}
      </List>
    </>
  );
});

TodoBase.displayName = 'TodoBase';

export default withStructure('todo', TodoBase);
