/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext, useEffect } from 'react';

import _get from 'lodash/get';

import AppBar from '@material-ui/core/AppBar';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import IconMenuButton, { IconMenuItem } from './icon-menu-button';
import { useLocales } from '../_utils/locales';
import { useSubstratumWidgets, useWidgetContext } from '../Visualizer/_customs';


// TODO: Custom Hooks
const NodeContext = createContext({
  expanded: new Set(),

  onActived: () => null,
  onAppend: () => null,
  onDestroy: () => null,
  onElementChange: () => null
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden auto !important',
    width: '100%'
  },
  appbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,

    '& > div > *:first-child': {
      marginRight: 'auto'
    }
  },
  item: {
    paddingLeft: ({ level = 0 } = {}) => theme.spacing(level * 1.5),

    '& div[role=icon]': {
      minWidth: theme.spacing(4)
    }
  }
}));


// TODO: Components
function ElementItem({ prefix, level, uid, importBy, description }) {
  const { getFixedT: dt } = useLocales();
  const { definitions } = useWidgetContext();
  const { expanded, onActived, onAppend, onDestroy, onElementChange } = useContext(NodeContext);
  const substratums = useSubstratumWidgets({ superior: uid, stringify: false });

  const classes = useStyles({ level });
  const childrenType = _get(definitions, ['props', importBy, 'propTypes', 'options', 'children', 'type']);
  const subCount = substratums.children?.length || 0;

  return (
    <>
      <ListItem button classes={{ container: classes.item }} onClick={() => onActived(uid)}>
        <ListItemIcon role="icon" onClick={(e) => e.stopPropagation()}>
          {Object.keys(substratums).length > 0 && (
            <IconButton size="small" onClick={() => onElementChange(uid, !expanded.has(uid))}>
              {expanded.has(uid)
                ? (<ExpandMoreIcon />)
                : (<ChevronRightIcon />)}
            </IconButton>
          )}
        </ListItemIcon>

        <ListItemText
          {...(prefix
            ? { primary: prefix, secondary: description }
            : { primary: description }
          )}
        />

        <ListItemSecondaryAction>
          <IconMenuButton size="small" color="primary" icon={(<SettingsOutlinedIcon />)}>
            {importBy && (childrenType === 'node' || (childrenType === 'element' && subCount < 1)) && (
              <>
                <IconMenuItem
                  icon={(<AddIcon color="primary" />)}
                  text={dt('btn-create-element')}
                  onClick={() => {
                    onElementChange(uid, true);
                    onAppend({ target: uid, value: 'children' });
                  }}
                />

                <Divider />
              </>
            )}

            <IconMenuItem icon={(<CloseIcon color="secondary" />)} text={dt('btn-remove-element')} onClick={() => onDestroy(uid)} />
          </IconMenuButton>
        </ListItemSecondaryAction>
      </ListItem>

      <Collapse in={expanded.has(uid)} timeout="auto" unmountOnExit>
        {Object.entries(substratums).map(([propName, substratum]) => (
          <ElementList key={propName} level={level + 1} prefix={propName !== 'children' && propName} substratum={substratum} />
        ))}
      </Collapse>
    </>
  );
}

function ElementList({ prefix, substratum, level = 0 }) {
  const classes = useStyles();

  return (
    <List role="element" className={classes.root}>
      {substratum?.map((child) => (
        <ElementItem key={child.uid} prefix={prefix} level={level} {...child} />
      ))}
    </List>
  );
}

export default function ElementStructure({ open, onActived, onAppend, onDestroy, onReadyEdit }) {
  const { getFixedT: dt } = useLocales();
  const { onListenersActived } = useWidgetContext();
  const [expanded, setExpanded] = useState(new Set());
  const { children: substratum } = useSubstratumWidgets({ stringify: false });
  const classes = useStyles();

  useEffect(() => {
    if (open) {
      onListenersActived(false);
    }
  }, [open]);

  return (
    <NodeContext.Provider
      value={{
        expanded,

        onActived,
        onAppend,
        onDestroy,

        onElementChange: (uid, isExpanded) => {
          expanded[isExpanded ? 'add' : 'delete'](uid);
          setExpanded(new Set(expanded));
        }
      }}
    >
      <AppBar position="static" color="inherit" className={classes.appbar} elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="subtitle1" color="primary">
            {dt('ttl-elements')}
          </Typography>

          <Tooltip title={dt('btn-edit-ready-handle')}>
            <IconButton size="small" color="primary" onClick={onReadyEdit}>
              <QueuePlayNextIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={dt('btn-create-element')}>
            <IconButton size="small" color="primary" onClick={() => onAppend()}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <ElementList substratum={substratum} />
    </NodeContext.Provider>
  );
}

