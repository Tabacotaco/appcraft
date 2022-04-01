/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { generate as uuid } from 'shortid';

import _get from 'lodash/get';

import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
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
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import IconMenuButton, { IconMenuItem } from '../icon-menu-button';
import { useLocales } from '../../_utils/locales';


// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  icon: {
    minWidth: theme.spacing(5.25),
    width: theme.spacing(5.25),

    '& > *[role=seq]': {
      width: theme.spacing(4),
      height: theme.spacing(4),
      background: theme.palette.info.main
    }
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
  }
}));


// TODO: Components
function Subheader({ code, disabled, expanded, value, onChange, onExpandedChange }) {
  const { getFixedT: dt } = useLocales();
  const classes = useStyles();

  return (
    <ListItem
      disableGutters
      button
      disabled={value.length === 0}
      onClick={() => {
        expanded[expanded.has(code) ? 'delete' : 'add'](code);
        onExpandedChange(new Set(expanded));
      }}
    >
      <ListItemIcon className={classes.icon}>
        <IconButton size="small">
          {expanded.has(code) && value.length > 0
            ? (<ExpandMoreIcon />)
            : (<ChevronRightIcon />)}
        </IconButton>
      </ListItemIcon>

      <ListItemText primary={dt(`ttl-map-${code}`)} />

      <ListItemSecondaryAction className={classes.action}>
        <Tooltip title={dt(`btn-add-map-${code}`)}>
          <IconButton
            size="small"
            color="primary"
            disabled={disabled}
            onClick={() => {
              onExpandedChange(new Set(expanded.add(code)));

              onChange({
                name: code,
                value: [...value, {
                  uid: uuid(),
                  description: `${code.charAt(0).toUpperCase()}${code.slice(1)}_${Math.floor(Math.random() * 10000)}`
                }]
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

export default function MapTodo({ pathname, refs, todo, onChange, onSetting }) {
  const { getFixedT: dt } = useLocales();
  const [expanded, setExpanded] = useState(new Set());
  const { source = [], pairs = [] } = todo;

  const classes = useStyles();
  const modifiable = refs && Object.values(refs).some((ref) => Object.entries(ref).length > 0);

  return (
    <>
      <List
        disablePadding
        subheader={(
          <Subheader
            code="source"
            disabled={!modifiable}
            expanded={expanded}
            value={source}
            onChange={onChange}
            onExpandedChange={setExpanded}
          />
        )}
      >
        <Collapse in={expanded.has('source')} timeout="auto" unmountOnExit>
          {source.map((src, i) => (
            <ListItem
              key={src.uid}
              disableGutters
              classes={{ secondaryAction: classes.secondary }}
              {...(modifiable && {
                button: true,
                onClick: () => (
                  onSetting({
                    ContentProps: { allowedTypes: ['input', 'state', 'todo'] },
                    type: 'variable',
                    allowedOptionTypes: ['Array'],
                    name: `${pathname}.source[${i}]`,
                    refs,
                    todo: todo.uid,
                    value: { type: 'todo', ...src }
                  })
                )
              })}
            >
              <ListItemAvatar className={classes.icon}>
                <Avatar role="seq">
                  {i}
                </Avatar>
              </ListItemAvatar>

              <ListItemText primary={src.description} />

              <ListItemSecondaryAction className={classes.action}>
                <IconMenuButton size="small" color="default" icon={(<MoreVertIcon />)}>
                  <IconMenuItem
                    text={dt('btn-condition')}
                    icon={(<HelpOutlineIcon />)}
                    disabled={!modifiable}
                    onClick={() => (
                      onSetting({
                        type: 'condition',
                        name: `${pathname}.source[${i}].condition`,
                        refs,
                        todo: todo.uid,
                        value: src.condition || []
                      })
                    )}
                  />

                  <IconMenuItem
                    text={dt('btn-remove-source')}
                    icon={(<CloseIcon color="secondary" />)}
                    onClick={() => (
                      onChange([
                        { name: 'pairs', value: [] },
                        { name: 'source', value: source.filter(({ uid }) => uid !== src.uid) }
                      ])
                    )}
                  />
                </IconMenuButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </Collapse>
      </List>

      <List
        disablePadding
        subheader={(
          <Subheader
            code="pairs"
            disabled={!modifiable}
            expanded={expanded}
            value={pairs}
            onChange={onChange}
            onExpandedChange={setExpanded}
          />
        )}
      >
        <Collapse in={expanded.has('pairs')} timeout="auto" unmountOnExit>
          {pairs.map((pair, i) => (
            <ListItem key={pair.uid} disableGutters classes={{ secondaryAction: classes.secondary }}>
              <ListItemIcon className={classes.padding} />

              <ListItemText disableTypography>
                <TextField
                  fullWidth
                  size="small"
                  variant="filled"
                  label={pair.description}
                  name={`pairs[${i}].path`}
                  placeholder={dt('ttl-pairpath-placeholder')}
                  defaultValue={pair.path || ''}
                  onChange={({ target }) => onChange(target)}
                />
              </ListItemText>

              <ListItemSecondaryAction className={classes.action}>
                <IconMenuButton size="small" color="default" icon={(<MoreVertIcon />)}>
                  <IconMenuItem
                    text={dt('btn-edit-pairs')}
                    icon={(<EditOutlinedIcon color="primary" />)}
                    disabled={!modifiable}
                    onClick={() => (
                      onSetting({
                        type: 'pairing',
                        name: `${pathname}.pairs[${i}]`,
                        refs: { ...refs, source },
                        todo: todo.uid,
                        value: { type: 'source', ...pair }
                      })
                    )}
                  />

                  <IconMenuItem
                    text={dt('btn-condition')}
                    icon={(<HelpOutlineIcon />)}
                    disabled={!modifiable}
                    onClick={() => (
                      onSetting({
                        type: 'condition',
                        name: `${pathname}.pairs[${i}].condition`,
                        refs: { ...refs, source },
                        todo: todo.uid,
                        value: pair.condition || []
                      })
                    )}
                  />

                  <IconMenuItem
                    text={dt('btn-remove-pairs')}
                    icon={(<CloseIcon color="secondary" />)}
                    onClick={() => (
                      onChange({
                        name: 'pairs',
                        value: pairs.filter(({ uid }) => uid !== pair.uid)
                      })
                    )}
                  />
                </IconMenuButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </Collapse>
      </List>
    </>
  );
}
