/* eslint-disable object-curly-newline */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo, useCallback, useContext, useImperativeHandle } from 'react';
import { useSnackbar } from 'notistack';

import cx from 'clsx';

import _cloneDeep from 'lodash/cloneDeep';
import _delay from 'lodash/delay';
import _get from 'lodash/get';
import _merge from 'lodash/merge';
import _set from 'lodash/set';
import _sortBy from 'lodash/sortBy';
import _toPath from 'lodash/toPath';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import DecorationDialog from '../decoration-editor';
import DisplayProp from './display';
import MixedProp from './mixed';
import NodeProp from './node';
import PureProp from './pure';
import TodoProp from '../todo-editor';
import withStructure from '../with-structure';
import { ProptypesEditorContext, getPropPathname, getPureObject, useBindingState } from '../_customs';
import { useSubstratumWidgets, useWidgetContext } from '../../Visualizer/_customs';
import { useLocales } from '../../_utils/locales';


const PROP_CONTROLS = [
  { component: DisplayProp, reg: { type: /^(((array|object)(Of)?)|exact|shape)$/ } },
  { component: PureProp, reg: { type: /^(bool|elementType|instanceOf|number|oneOf|string|symbol)$/ } },
  { component: MixedProp, reg: { type: /^(any|oneOfType)$/ } },
  { component: NodeProp, reg: { type: /^(element|node)$/ } },
  { component: DisplayProp, reg: { type: /^func$/ } }
];

function isActived(actived, paths) {
  const target = JSON.stringify(paths);

  return actived?.some((_path, i) => (
    JSON.stringify(actived.slice(0, i + 1)) === target
  )) || false;
}

// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden auto !important',
    width: '100%',
    paddingBottom: '0 !important'
  },
  subheader: {
    backdropFilter: `blur(${theme.spacing(2)}px)`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    zIndex: theme.zIndex.appBar,

    '& > *[role="subheader-bar"]': {
      paddingRight: ({ dynamic = false } = {}) => theme.spacing(dynamic ? 6 : 2),

      '&.main': {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
        paddingLeft: theme.spacing(2),

        '& > * + *': {
          marginTop: theme.spacing(2)
        }
      }
    }
  },
  group: {
    backdropFilter: `blur(${theme.spacing(2)}px)`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1.5, 1),

    '& > *[role=expand]': {
      minWidth: theme.spacing(5.25),
      width: theme.spacing(5.25)
    }
  },
  breadcrumbs: {
    justifyContent: 'flex-start',

    '& > span:first-child': {
      textTransform: 'none'
    }
  },
  drawerPaper: {
    position: 'absolute !important'
  },
  icon: {
    minWidth: theme.spacing(5.25),
    width: theme.spacing(5.25)
  },
  option: {
    paddingLeft: theme.spacing(5.25),

    '&:not(.shown)': {
      display: 'none !important'
    },
    '&.shown': {
      display: 'flex !important'
    }
  },
  appbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}));

const useDefinitionWithDecoration = (definitions, importBy, decoration) => (
  useMemo(() => {
    const { propTypes: definition = { type: 'exact' } } = definitions?.props?.[importBy] || {};

    return _merge({}, definition, ...(decoration || []).map(({ importBy: $importBy }) => {
      const { propTypes: $definition } = definitions?.decorations?.[$importBy] || {};

      return $definition || { type: 'exact' };
    }));
  }, [importBy, decoration])
);

const useWidgetOptionsWithGroup = (dt, definitions, value) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(null);

  const sorted = useMemo(() => (
    Object.entries(definitions).sort(([n1, { group: g1 = '~ungroup' }], [n2, { group: g2 = '~ungroup' }]) => (
      g1 < g2 ? -1 : g1 > g2 ? 1 : n1 < n2 ? -1 : n1 > n2 ? 1 : 0
    ))
  ), [definitions]);

  useEffect(() => {
    const [, matched] = sorted.find(([name]) => name === value) || sorted[0];

    setExpanded(matched.group || '~ungroup');
  }, [value]);

  return useMemo(() => (
    sorted.reduce(
      ([options, groups], [name, { description: desc, group = '~ungroup' }]) => {
        if (!groups.has(group)) {
          groups.add(group);

          options.push(
            <ListSubheader key={group} className={classes.group} data-group={group} component={MenuItem} onClick={() => setExpanded(group)}>
              <ListItemIcon role="expand">
                {expanded === group
                  ? (<ExpandMoreIcon color="primary" />)
                  : (<ChevronRightIcon color="primary" />)}
              </ListItemIcon>

              <ListItemText primaryTypographyProps={{ color: 'primary' }} primary={group === '~ungroup' ? dt('ttl-none-group') : group} />
            </ListSubheader>
          );
        }

        options.push(
          <MenuItem key={name} className={cx(classes.option, { shown: expanded === group })} value={name} data-description={desc}>
            {desc}
          </MenuItem>
        );

        return [options, groups];
      },
      [[], new Set()]
    )
  ), [sorted, expanded]);
};


// TODO: Components
const StructureBase = React.forwardRef(({ superiorPathname, pathname, definition, disabled, value, subheader }, ref) => {
  const { getFixedT: dt } = useLocales();
  const { enqueueSnackbar } = useSnackbar();
  const { state: globalState, onListenersActived } = useWidgetContext();
  const { actived, classes: $classes, refs, uid, description, typePairs, props, onActive, onChange, onPropSelect, onRefsChange } = useContext(ProptypesEditorContext);
  const [binding] = useBindingState(pathname);
  const classes = useStyles({ dynamic: /^((array|object)(Of)?|func)$/.test(definition.type) });

  // 根據 definition.type 決定子項目是從 prop value/definition.options 轉出
  const items = useMemo(() => {
    const result = /^(array|object)(Of)?$/.test(definition.type)
      ? Object.keys(value || {}).map((itemName) => [itemName, definition.options || { type: 'any' }])
      : Object.entries(definition.options || {});

    return _sortBy(result, [([, { type }]) => PROP_CONTROLS.findIndex(({ reg }) => reg.type.test(type)), 0]);
  }, [definition, JSON.stringify(value)]);

  // 判斷是否有子項目正在展開狀態
  const [open, detailName, detail] = useMemo(() => {
    const paths = _toPath(pathname);
    const [itemName, itemOpts] = items.find(([$itemName]) => isActived(actived, [...paths, $itemName])) || [];
    const itemPathname = getPropPathname(definition.type, pathname, itemName);
    const { type: itemType } = typePairs[itemPathname] || itemOpts || {};

    return [
      !pathname || (itemOpts && isActived(actived, paths)),
      itemName,
      !itemOpts ? null : { ...itemOpts, type: itemType }
    ];
  }, [JSON.stringify(actived), typePairs, JSON.stringify(items)]);

  useImperativeHandle(ref, () => ({}), []);

  /** TODO: 事件類 props 編輯處理
   *  透過 onListenersActived 幫 Visualizer 加入事件觸發的提示訊息
   *  點擊提示訊息按鈕時，將會自動進入事件編輯畫面
   */
  useEffect(() => {
    if (!detail) {
      onListenersActived([
        uid,
        items.reduce(
          (result, [itemName, itemOpts]) => {
            const itemPathname = getPropPathname(definition.type, pathname, itemName);
            const { type: itemType } = typePairs[itemPathname] || itemOpts;

            return {
              ...result,
              ...(/^func$/.test(itemType) && /^on[A-Z].+$/.test(itemName) && {
                [itemPathname]: (...e) => {
                  const defaultRefs = { state: globalState, input: getPureObject(e), todo: {} };

                  enqueueSnackbar(`${description} Event: ${itemPathname}`, {
                    variant: 'success',

                    action: (
                      <Button
                        variant="text"
                        size="small"
                        color="inherit"
                        onClick={() => {
                          const el = document.getElementById(itemPathname);

                          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          onPropSelect(itemPathname);

                          _delay(() => {
                            onListenersActived(false);
                            onRefsChange(itemPathname, defaultRefs);
                          }, 1000);
                        }}
                      >
                        {dt('btn-setting')}
                      </Button>
                    )
                  });
                }
              })
            };
          },
          {}
        )
      ]);
    }
  }, [detail, description, JSON.stringify(items)]);

  return (
    <List
      role="structure"
      className={cx(classes.root, $classes?.structure)}
      subheader={(
        <ListSubheader disableGutters className={cx(classes.subheader, $classes?.subheader)} component={AppBar} color="inherit" elevation={0}>
          {subheader}

          {pathname && (
            <Toolbar
              role="subheader-bar"
              className={classes.breadcrumbs}
              variant="dense"
              {...(pathname && {
                component: Button,
                startIcon: (<ArrowBackIcon />),
                onClick: () => onActive(_toPath(superiorPathname))
              })}
            >
              {pathname}
            </Toolbar>
          )}

          {/^((array|object)(Of)?|func)$/.test(definition.type) && (
            <ListItemSecondaryAction>
              <Tooltip title={dt('btn-add-property')}>
                <IconButton
                  size="small"
                  color="primary"
                  disabled={binding || disabled}
                  onClick={() => {
                    const path = _toPath(pathname);

                    if (definition.type.startsWith('array')) {
                      const newValue = (value || []).concat(null);

                      onChange({
                        props: pathname ? _set(props, path, newValue) : newValue
                      });
                    } else if (definition.type.startsWith('object')) {
                      const newValue = { ...value, [`*${Object.keys(value || {}).length}`]: null };

                      onChange({
                        props: pathname ? _set(props, path, newValue) : newValue
                      });
                    }
                  }}
                >
                  <PlaylistAddIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          )}
        </ListSubheader>
      )}
    >
      {detail && (
        <Drawer anchor="right" variant="permanent" classes={{ paper: cx(classes.drawerPaper, $classes?.drawerPaper, { open }) }} open={open}>
          {detail.type === 'func'
            ? (
              <TodoProp refs={refs} superiorPathname={pathname} superiorType={definition.type} propName={detailName} definition={detail} />
            )
            : (
              <StructureProp
                superiorPathname={pathname}
                superiorType={definition.type}
                propName={detailName}
                definition={typePairs[getPropPathname(definition.type, pathname, detailName)] || detail}
              />
            )}
        </Drawer>
      )}

      {(!detail || !open) && items.map(([itemName, itemOpts]) => {
        const { component: PropControl = null } = PROP_CONTROLS.find(({ reg: { type, name = /^.+$/ } }) => {
          const { type: itemType } = itemOpts;

          return type.test(itemType) && name.test(itemName);
        }) || {};

        return PropControl === null
          ? null
          : (<PropControl key={itemName} superiorPathname={pathname} superiorType={definition.type} propName={itemName} definition={itemOpts} />);
      })}
    </List>
  );
});

StructureBase.displayName = 'StructureBase';

const StructureProp = withStructure('structure', StructureBase);

export default function PropsEditor({
  InputStyles,
  classes: $classes,
  state,
  overrideMixedOptions,
  overridePropControl,
  value: defaultValue,
  onChange: handleChange,
  onElementDispatch,
  onStateBinding
}) {
  const { getFixedT: dt } = useLocales();
  const { closeSnackbar } = useSnackbar();
  const { definitions, widgets } = useWidgetContext();

  const [actived, setActived] = useState(null);
  const [decorating, setDecorating] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [refs, setRefs] = useState(null);
  const [selected, setSelected] = useState(null);

  const widget = widgets.find(({ uid }) => uid === defaultValue) || {};
  const { importBy, description, typePairs, props, handles, decoration } = widget;

  const definition = useDefinitionWithDecoration(definitions, importBy, decoration);
  const substratum = useSubstratumWidgets({ superior: defaultValue });
  const widgetOptions = useWidgetOptionsWithGroup(dt, definitions?.props, importBy);
  const classes = useStyles();

  useEffect(() => {
    closeSnackbar();
  }, [actived]);

  return (
    <ProptypesEditorContext.Provider
      value={{
        InputStyles,

        actived,
        classes: $classes,
        disableHandleRefs: false,
        override: { control: overridePropControl, mixed: overrideMixedOptions },
        refs,
        selected,

        description,
        handles: handles || {},
        props: props || {},
        state,
        substratum,
        typePairs: typePairs || {},
        uid: defaultValue,

        onActive: setActived,
        onChange: (newValue) => handleChange({ ...widget, ...newValue }),
        onElementDispatch,
        onPropSelect: setSelected,
        onStateBinding,

        onRefsChange: (pathname, newRefs) => {
          setSelected(null);
          setActived(_toPath(pathname));
          setRefs(newRefs);
        }
      }}
    >
      <AppBar position="static" color="inherit" className={cx(classes.appbar, $classes.appbar)} elevation={0}>
        <Toolbar
          variant="dense"
          color="primary"
          component={Button}
          startIcon={(<ChevronRightIcon color="primary" />)}
          style={{ justifyContent: 'flex-start', textTransform: 'none' }}
          onClick={() => onElementDispatch({ type: 'SET_STATE', target: 'actived', value: null })}
        >
          {dt('ttl-properties')}
        </Toolbar>
      </AppBar>

      <StructureProp
        definition={definition}
        subheader={(
          <Toolbar role="subheader-bar" className="main" variant="dense">
            {/* TODO: Widget Type Selection */}
            <TextField
              {...InputStyles}
              SelectProps={{
                open: expanded,
                onOpen: () => setExpanded(true),
                onClose: ({ currentTarget }) => setExpanded(Boolean(currentTarget.dataset.group))
              }}
              fullWidth
              select
              label={dt('lbl-import-by')}
              value={importBy || ''}
              onChange={({ target: { value }, currentTarget }) => {
                if (value && currentTarget.dataset.description) {
                  setExpanded(false);

                  handleChange({
                    uid: defaultValue,
                    superior: widget.superior,
                    description: `${currentTarget.dataset.description}_${Math.floor(Math.random() * 10000)}`,
                    importBy: value,
                    decoration: [],
                    props: _cloneDeep(definitions?.props?.[value].defaultProps) || {},
                    handles: {}
                  });
                }
              }}
              InputProps={{
                // TODO: HOC Decoration
                startAdornment: importBy && definitions?.decorations && (
                  <InputAdornment position="start">
                    <Tooltip title={dt('btn-decoration')}>
                      <IconButton size="small" color="primary" onClick={() => setDecorating(true)}>
                        <BookmarksOutlinedIcon />
                      </IconButton>
                    </Tooltip>

                    <DecorationDialog
                      StructureComponent={StructureProp}
                      classes={{ subheader: classes.subheader }}
                      open={decorating}
                      value={decoration}
                      onClose={() => setDecorating(false)}
                      onConfirm={(newDecoration) => {
                        handleChange({ ...widget, decoration: newDecoration });
                        setDecorating(false);
                      }}
                    />
                  </InputAdornment>
                )
              }}
            >
              {widgetOptions}
            </TextField>

            {/* TODO: Widget Description */}
            <TextField
              {...InputStyles}
              fullWidth
              disabled={!importBy}
              label={dt('lbl-description')}
              value={description || ''}
              onChange={({ target: { value } }) => handleChange({ ...widget, description: value })}
            />
          </Toolbar>
        )}
      />
    </ProptypesEditorContext.Provider>
  );
}
