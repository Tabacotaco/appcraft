/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo, useContext, useImperativeHandle } from 'react';

import cx from 'clsx';

import _cloneDeep from 'lodash/cloneDeep';
import _set from 'lodash/set';
import _sortBy from 'lodash/sortBy';
import _toPath from 'lodash/toPath';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import DisplayProp from './display';
import MixedProp from './mixed';
import NodeProp from './node';
import PureProp from './pure';
import TodoProp from '../todo-editor';
import withStructure from '../with-structure';
import { ProptypesEditorContext, getPropPathname, useBindingState } from '../_customs';
import { useLocales } from '../../utils/locales';
import { useWidgetWrapper, useSubstratumWidgets } from '../../Visualizer';


const PROP_CONTROLS = [
  { component: DisplayProp, reg: { type: /^(((array|object)(Of)?)|exact|shape)$/ } },
  { component: PureProp, reg: { type: /^(bool|elementType|instanceOf|number|oneOf|string|symbol)$/ } },
  { component: MixedProp, reg: { type: /^(any|oneOfType)$/ } },
  { component: NodeProp, reg: { type: /^(element|node)$/ } },
  { component: DisplayProp, reg: { type: /^func$/ } }
];

// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden auto !important',
    width: '100%'
  },
  subheader: {
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
  drawerPaper: {
    position: 'absolute !important'
  },
  appbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  info: {
    display: 'flex',
    flexDirection: 'column',

    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));


// TODO: Components
const StructureBase = React.forwardRef(({ superiorPathname, pathname, definition, value, subheader }, ref) => {
  const { getFixedT: dt } = useLocales();
  const { onListenersActived } = useWidgetWrapper();
  const { actived, classes: $classes, uid, typePairs, props, onActive, onChange } = useContext(ProptypesEditorContext);
  const binding = useBindingState(pathname);
  const classes = useStyles();

  // 根據 definition.type 決定子項目是從 prop value/definition.options 轉出
  const items = useMemo(() => {
    const result = /^(array|object)(Of)?$/.test(definition.type)
      ? Object.keys(value || {}).map((itemName) => [itemName, definition.options || { type: 'any' }])
      : Object.entries(definition.options || {});

    return _sortBy(result, [([, { type }]) => PROP_CONTROLS.findIndex(({ reg }) => reg.type.test(type)), 0]);
  }, [definition, value]);

  // 判斷是否有子項目正在展開狀態
  const [open, detailName, detail] = useMemo(() => {
    const paths = _toPath(pathname);

    return [
      !pathname || actived?.startsWith(paths.join('/')) === true,
      ...(items.find(([itemName]) => actived?.startsWith([...paths, itemName].join('/'))) || [])
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actived, pathname, JSON.stringify(items)]);

  useImperativeHandle(ref, () => ({}), []);

  useEffect(() => {
    if (!detail || !open) {
      onListenersActived({
        uid,
        listeners: items.reduce(
          (result, [itemName, itemOpts]) => (
            /^func$/.test(itemOpts.type)
              ? result.concat(getPropPathname(definition.type, pathname, itemName))
              : result
          ),
          []
        )
      });

      return () => onListenersActived(false);
    }

    return null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail, open, JSON.stringify(items)]);

  return (
    <List
      role="structure"
      className={cx(classes.root, $classes?.structure)}
      subheader={subheader || (
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
            {/^((array|object)(Of)?|func)$/.test(definition.type) && (
              <Tooltip title={dt('btn-add-property')}>
                <IconButton
                  size="small"
                  color="primary"
                  disabled={binding}
                  onClick={() => {
                    const path = _toPath(pathname);

                    if (definition.type.startsWith('array')) {
                      onChange({ props: _set(props, path, (value || []).concat(null)) });
                    } else if (definition.type.startsWith('object')) {
                      onChange({ props: _set(props, path, { ...value, [`*${Object.keys(value || {}).length}`]: null }) });
                    }
                  }}
                >
                  <PlaylistAddIcon />
                </IconButton>
              </Tooltip>
            )}
          </ListItemSecondaryAction>
        </ListSubheader>
      )}
    >
      {detail && (
        <Drawer anchor="right" variant="permanent" classes={{ paper: cx(classes.drawerPaper, $classes?.drawerPaper, { open }) }} open={open}>
          {detail.type === 'func'
            ? (
              <TodoProp superiorPathname={pathname} superiorType={definition.type} propName={detailName} definition={detail} />
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
        const { component: PropControl = null } = PROP_CONTROLS.find(({ reg: { type, name = /^.+$/ } }) => (
          type.test(itemOpts.type) && name.test(itemName)
        )) || {};

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
  selected,
  state,
  overrideMixedOptions,
  overridePropControl,
  value: defaultValue,
  onChange: handleChange,
  onElementDispatch,
  onStateBinding
}) {
  const { getFixedT: dt } = useLocales();
  const { definitions, widgets } = useWidgetWrapper();
  const widget = widgets.find(({ uid }) => uid === defaultValue) || {};
  const { importBy, description, typePairs, props, handles } = widget;
  const { propTypes: definition = null } = definitions?.[importBy] || {};
  const [actived, setActived] = useState(null);
  const substratum = useSubstratumWidgets(widgets, defaultValue);
  const classes = useStyles({ subheaderSpacing: 1.5 });

  return (
    <ProptypesEditorContext.Provider
      value={{
        InputStyles,

        actived,
        classes: $classes,
        override: { control: overridePropControl, mixed: overrideMixedOptions },
        selected,

        handles: handles || {},
        props: props || {},
        state,
        substratum,
        typePairs: typePairs || {},
        uid: defaultValue,

        onActive: setActived,
        onChange: (newValue) => handleChange({ ...widget, ...newValue }),
        onElementDispatch,
        onStateBinding
      }}
    >
      <AppBar position="static" color="inherit" className={cx(classes.appbar, $classes.appbar)} elevation={0}>
        <Toolbar
          variant="dense"
          color="primary"
          component={Button}
          startIcon={(<ChevronRightOutlinedIcon color="primary" />)}
          style={{ justifyContent: 'flex-start', textTransform: 'none' }}
          onClick={() => onElementDispatch({ type: 'SET_STATE', target: 'actived', value: null })}
        >
          {dt('ttl-properties')}
        </Toolbar>
      </AppBar>

      <StructureProp
        definition={{ type: 'exact', options: definition }}
        subheader={(
          <ListSubheader disableGutters className={cx(classes.subheader, $classes?.subheader)} component={AppBar} color="inherit" elevation={0}>
            <Toolbar variant="dense" className={classes.info}>
              <TextField
                {...InputStyles}
                fullWidth
                select
                label={dt('lbl-import-by')}
                value={importBy || ''}
                onChange={({ target: { value }, currentTarget }) => handleChange({
                  ...widget,
                  description: `${currentTarget.dataset.description}_${Math.floor(Math.random() * 10000)}`,
                  importBy: value,
                  props: _cloneDeep(definitions?.[value].defaultProps) || {}
                })}
              >
                {Object.entries(definitions).map(([name, { description: desc }]) => (
                  <MenuItem key={name} value={name} data-description={desc}>
                    {desc}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                {...InputStyles}
                fullWidth
                label={dt('lbl-description')}
                value={description || ''}
                onChange={({ target: { value } }) => handleChange({ ...widget, description: value })}
              />
            </Toolbar>
          </ListSubheader>
        )}
      />
    </ProptypesEditorContext.Provider>
  );
}
