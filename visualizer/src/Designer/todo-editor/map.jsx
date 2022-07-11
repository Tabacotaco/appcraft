/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';

import { generate as uuid } from 'shortid';

import _get from 'lodash/get';
import _pick from 'lodash/pick';

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
import { makeStyles } from '@material-ui/core/styles';

import CloseIcon from '@material-ui/icons/Close';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import IconMenuButton, { IconMenuItem } from '../icon-menu-button';
import { PropertySubheader } from './calculator';
import { useLocales } from '../../_utils/locales';


//* Custom Hooks
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


//* Component
export default function MapTodo({ expandeds, pathname, refs, todo, onChange, onPropertyExpand, onSetting }) {
  const { getFixedT: dt } = useLocales();
  const { mappable, source = [], pairs = [] } = todo;

  const classes = useStyles();
  const modifiable = refs && Object.values(refs).some((ref) => Object.entries(ref).length > 0);

  const handlePropertyAdd = useCallback((code, value) => {
    if (!expandeds.has(code)) {
      onPropertyExpand(code);
    }

    onChange({
      name: code,
      value: [...value, {
        uid: uuid(),
        description: `${code.charAt(0).toUpperCase()}${code.slice(1)}_${Math.floor(Math.random() * 10000)}`
      }]
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandeds, onChange]);

  return (
    <>
      <List
        disablePadding
        subheader={(
          <PropertySubheader
            category="map-source"
            classes={_pick(classes, ['icon', 'action'])}
            disableAdd={!modifiable}
            disableExpand={source.length === 0}
            expanded={expandeds.has('source')}
            onSubheaderClick={() => onPropertyExpand('source')}
            onPropertyAdd={() => handlePropertyAdd('source', source)}
            actions={[{
              text: dt('btn-condition'),
              icon: (<HelpOutlineIcon />),
              disabled: !modifiable,
              onClick: () => (
                onSetting({
                  type: 'condition',
                  name: `${pathname}.mappable`,
                  refs: { ...refs, source },
                  todo: todo.uid,
                  value: mappable || []
                })
              )
            }]}
          />
        )}
      >
        <Collapse in={expandeds.has('source')} timeout="auto" unmountOnExit>
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
                    allowedOptionTypes: ['SourceMap'],
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
                <IconButton
                  size="small"
                  color="secondary"
                  onClick={() => (
                    onChange([
                      { name: 'pairs', value: [] },
                      { name: 'source', value: source.filter(({ uid }) => uid !== src.uid) }
                    ])
                  )}
                >
                  <CloseIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </Collapse>
      </List>

      <List
        disablePadding
        subheader={(
          <PropertySubheader
            category="map-pairs"
            classes={_pick(classes, ['icon', 'action'])}
            disableAdd={!modifiable}
            disableExpand={pairs.length === 0}
            expanded={expandeds.has('pairs')}
            onSubheaderClick={() => onPropertyExpand('pairs')}
            onPropertyAdd={() => handlePropertyAdd('pairs', pairs)}
          />
        )}
      >
        <Collapse in={expandeds.has('pairs')} timeout="auto" unmountOnExit>
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
