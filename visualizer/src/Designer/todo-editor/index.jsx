/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo, useCallback, useReducer, useContext, useImperativeHandle } from 'react';

import cx from 'clsx';
import { generate as uuid } from 'shortid';

import _cloneDeep from 'lodash/cloneDeep';
import _debounce from 'lodash/debounce';
import _get from 'lodash/get';
import _omit from 'lodash/omit';
import _pick from 'lodash/pick';
import _set from 'lodash/set';
import _toPath from 'lodash/toPath';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import Collapse from '@material-ui/core/Collapse';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import CalculatorTodo from './calculator';
import ConditionContent from './condition';
import IconMenuButton, { IconMenuItem } from '../icon-menu-button';
import MapTodo from './map';
import PairedBase from './paired';
import RequestTodo from './request';
import VariableContent, { ReferenceProvider } from './variable';
import withStructure from '../with-structure';
import { ProptypesEditorContext, getPropPathname, getPureObject, useRefOptions, useTodoWithRefs } from '../_customs';
import { useLocales } from '../../_utils/locales';
import { useWidgetContext } from '../../Visualizer/_customs';


const SETTING_CONTROLS = [
  { component: ConditionContent, reg: { type: /^condition$/ } },
  { component: PairedBase, reg: { type: /^pairing$/ } },
  { component: VariableContent, reg: { type: /^variable$/ } }
];

const TODO_CONTROLS = [
  { component: CalculatorTodo, reg: { type: /^calculator$/ } },
  { component: MapTodo, reg: { type: /^map$/ } },
  { component: RequestTodo, reg: { type: /^request$/ } }
];

//* Custom Hooks
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
  tootip: {
    background: theme.palette.action.disabledBackground
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
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(1, 3),
    borderBottom: `1px solid ${theme.palette.divider}`,

    '& > *[role=title]': {
      marginRight: 'auto'
    }
  },
  setting: {
    padding: theme.spacing(1.5)
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

const useExpandedItem = (() => {
  function reducerFn(state, { type, value }) {
    switch (type) {
      case 'todo': {
        const { target } = state;

        return {
          target: value === target ? null : value,
          expandeds: new Set()
        };
      }
      case 'property': {
        const { expandeds } = state;

        if (value !== false) {
          expandeds[expandeds.has(value) ? 'delete' : 'add'](value);
        }

        return {
          ...state,
          expandeds: new Set(value === false ? [] : expandeds)
        };
      }
      default:
        return state;
    }
  }

  return (defaultId) => (
    useReducer(reducerFn, {
      target: defaultId || null,
      expandeds: new Set()
    })
  );
})();


//* Components
function SettingDialog({
  ContentProps,
  allowedOptionTypes = null,
  descriptions,
  todo: uid,
  type,
  refs,
  value: defaultValue,
  onClose,
  onConfirm,

  ...props
}) {
  const { getFixedT: dt } = useLocales();
  const [action, setAction] = useState(null);
  const [config, setConfig] = useState(null);

  const ContentElement = useMemo(() => SETTING_CONTROLS.find(({ reg }) => reg.type.test(type))?.component, [type]);
  const classes = useStyles();
  const options = useRefOptions(descriptions, refs, uid, allowedOptionTypes, defaultValue);
  const open = Boolean(type && options && config);

  useEffect(() => {
    if (defaultValue) {
      setConfig(defaultValue);

      return () => setConfig(null);
    }

    return null;
  }, [defaultValue]);

  return (
    <Dialog {...props} fullWidth scroll="body" maxWidth={type === 'pairing' ? 'md' : 'sm'} open={open}>
      {type && (
        <DialogTitle disableTypography className={classes.title}>
          <Typography role="title" variant="h6" color="textPrimary">
            {dt(`ttl-${type}-setting`)}
          </Typography>

          {action}
        </DialogTitle>
      )}

      {ContentElement && open && (
        <ReferenceProvider value={{ options, refs }}>
          <ContentElement
            {...ContentProps}
            ref={setAction}
            className={classes.setting}
            component={DialogContent}
            value={config}
            onChange={(targets) => (
              setConfig(
                (Array.isArray(targets) ? targets : [targets]).reduce(
                  (result, { name, value }) => (name ? _set(result, name, value) : value),
                  _cloneDeep(config)
                )
              )
            )}
          />
        </ReferenceProvider>
      )}

      <ButtonGroup className={classes.action} fullWidth variant="contained" size="large" component={DialogActions}>
        <Button color="default" startIcon={(<CloseIcon />)} onClick={onClose}>
          {dt('btn-cancel')}
        </Button>

        <Button color="primary" startIcon={(<CheckIcon />)} onClick={() => onConfirm(config)}>
          {dt('btn-confirm')}
        </Button>
      </ButtonGroup>
    </Dialog>
  );
}

function TodoItem({ refs, expanded, expandeds, index, pathname: superiorPathname, todo, onTodoExpand, onPropertyExpand, onSetting }) {
  const { getFixedT: dt } = useLocales();
  const { InputStyles, state: globalState, handles, onChange } = useContext(ProptypesEditorContext);
  const { [superiorPathname]: todos } = handles;
  const { uid, type, description, condition, state } = todo;

  const TodoElement = useMemo(() => TODO_CONTROLS.find(({ reg }) => reg.type.test(type))?.component, [type]);
  const classes = useStyles();
  const pathname = `[${index}]`;

  const refsCount = useMemo(() => (
    Object.values(refs || {}).reduce(
      (result, ref) => result + Object.entries(ref).length,
      0
    )
  ), [refs]);

  const [handleTodoChange, handleTodoDebounceChange] = useMemo(() => {
    const handleChange = (targets) => (
      onChange({
        handles: {
          ...handles,
          [superiorPathname]: todos.map(($todo) => (
            $todo.uid !== uid
              ? $todo
              : targets.name === 'type'
                ? { ..._pick($todo, ['uid', 'description', 'state']), type: targets.value }
                : (Array.isArray(targets) ? targets : [targets]).reduce(
                  (result, { name, value }) => _set(result, name, value),
                  $todo
                )
          ))
        }
      })
    );

    return [handleChange, _debounce(handleChange, 1200)];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handles, todos, uid]);

  return (
    <Card role={`prop-${type}`} className={classes.card} component={ListItem}>
      <CardHeader
        classes={{ root: classes.header, subheader: 'subheader' }}
        title={description}
        subheader={type}
        avatar={(
          <IconButton onClick={() => onTodoExpand(uid)}>
            {expanded
              ? (<ExpandLessIcon />)
              : (<ExpandMoreIcon />)}
          </IconButton>
        )}
      />

      <Collapse component={CardContent} classes={{ wrapperInner: classes.content }} in={expanded} timeout="auto" unmountOnExit>
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

          <MenuItem value="map">
            {dt('opt-map-todo')}
          </MenuItem>

          <MenuItem value="request">
            {dt('opt-request-todo')}
          </MenuItem>
        </TextField>

        <TextField
          {...InputStyles}
          fullWidth
          label={dt('lbl-description')}
          name="description"
          defaultValue={description}
          onChange={({ target }) => handleTodoDebounceChange(target)}
          InputProps={{
            endAdornment: refsCount > 0 && (
              <InputAdornment position="end">
                <Tooltip title={dt('btn-condition')}>
                  <IconButton
                    size="small"
                    color={condition ? 'primary' : 'default'}
                    onClick={() => (
                      onSetting({
                        type: 'condition',
                        refs,
                        name: getPropPathname('object', pathname, 'condition'),
                        todo: uid,
                        value: condition || []
                      })
                    )}
                  >
                    <HelpOutlineIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            )
          }}
        />

        {TodoElement && (
          <TodoElement
            {...{ expandeds, refs, todo, pathname, onPropertyExpand, onSetting }}
            onChange={handleTodoChange}
          />
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
          defaultValue={globalState.some(({ widgetUid: $uid, path }) => `${$uid}['${path}']` === state) ? state : ''}
          onChange={({ target }) => handleTodoDebounceChange(target)}
        >
          <MenuItem value="">
            {dt('opt-none')}
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

const TodoBase = React.forwardRef(({ refs, superiorPathname, pathname, value: todos }, ref) => {
  const { getFixedT: dt } = useLocales();
  const { listeners: [listenId], state: globalState, onListenersActived } = useWidgetContext();
  const { classes: $classes, uid, handles, onActive, onChange, onRefsChange } = useContext(ProptypesEditorContext);

  const [{ target, expandeds }, onExpandedDispatch] = useExpandedItem(_get(todos, [todos.length - 1, 'uid']));
  const [setting, onSetting] = useState(null);
  const classes = useStyles();

  const [descriptions, items] = useTodoWithRefs(
    refs,
    todos,

    useCallback(({ refs: todoRefs }) => {
      const ImplementEl = (props) => (<TodoItem {...props} refs={todoRefs} />);

      ImplementEl.displayName = 'TodoItemWithRefs';

      return ImplementEl;
    }, [])
  );

  useImperativeHandle(ref, () => ({}), []);

  useEffect(() => {
    onListenersActived(false);

    return () => (onRefsChange instanceof Function && onRefsChange(null)); // 離開事件編輯時移除 refs 參數
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (items.length === 0 && !listenId) {
      onListenersActived([uid, {
        [pathname]: (...e) => {
          onListenersActived(false);
          onRefsChange(pathname, { state: globalState, input: getPureObject(e), todo: {} });
        }
      }]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length, listenId]);

  return (
    <>
      <SettingDialog
        {..._pick(setting, ['ContentProps', 'todo', 'allowedOptionTypes', 'type', 'refs', 'value'])}
        descriptions={descriptions}
        onClose={() => onSetting(null)}
        onConfirm={(newSetting) => {
          onSetting(null);

          onChange({
            handles: {
              ...handles,
              [pathname]: _set(todos, setting.name, newSetting)
            }
          });
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
              onClick={() => onActive(_toPath(superiorPathname))}
            >
              {pathname}
            </Toolbar>

            <ListItemSecondaryAction>
              <IconMenuButton size="small" color="primary" disabled={Boolean(!refs)} icon={(<SettingsOutlinedIcon />)}>
                <IconMenuItem
                  icon={(<PlaylistAddIcon color="primary" />)}
                  text={dt('btn-add-todo')}
                  onClick={() => {
                    const newUid = uuid();

                    onExpandedDispatch({ type: 'todo', value: newUid });

                    onChange({
                      handles: {
                        ...handles,
                        [pathname]: [...todos, {
                          uid: newUid,
                          description: `Todo_${Math.floor(Math.random() * 10000)}`,
                          type: 'calculator',
                          params: []
                        }]
                      }
                    });
                  }}
                />

                <IconMenuItem
                  icon={(<DeleteOutlineIcon color="secondary" />)}
                  text={dt('btn-reset')}
                  disabled={!_get(handles, pathname)?.length}
                  onClick={() => (
                    onChange({
                      handles: { ..._omit(handles, [pathname]) }
                    })
                  )}
                />
              </IconMenuButton>
            </ListItemSecondaryAction>
          </ListSubheader>
        )}
      >
        {items.length === 0 && !refs && (
          <ListItem className={classes.tootip}>
            <ListItemIcon>
              <CircularProgress />
            </ListItemIcon>

            <ListItemText
              primaryTypographyProps={{ color: 'textSecondary', variant: 'h6' }}
              primary={dt('ttl-trigger-first')}
            />
          </ListItem>
        )}

        {items.length > 0 && (
          <React.Suspense fallback={(<LinearProgress />)}>
            {items.map(({ el: TodoEl, todo }, index) => (
              <TodoEl
                key={TodoEl.displayName}
                todo={todo}
                expanded={target === TodoEl.displayName}
                onTodoExpand={(value) => onExpandedDispatch({ type: 'todo', value })}
                onPropertyExpand={(value) => onExpandedDispatch({ type: 'property', value })}
                {...{ expandeds, index, pathname, onSetting }}
              />
            ))}
          </React.Suspense>
        )}
      </List>
    </>
  );
});

TodoBase.displayName = 'TodoBase';

export default withStructure('todo', TodoBase);
