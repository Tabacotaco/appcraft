/* eslint-disable react/prop-types */
import React, { useContext, useImperativeHandle } from 'react';

import cx from 'clsx';
import { generate as uuid } from 'shortid';

import _isPlainObject from 'lodash/isPlainObject';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import UndoIcon from '@material-ui/icons/Undo';
import WidgetsIcon from '@material-ui/icons/Widgets';

import IconMenuButton, { IconMenuItem } from '../icon-menu-button';
import withPropitem from './with-propitem';
import { ProptypesEditorContext } from '../_customs';
import { useLocales } from '../../utils/locales';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: theme.spacing(5)
  },
  required: {
    color: theme.palette.secondary.main
  }
}));

const NodeBase = React.forwardRef(({ pathname, propName, definition }, ref) => {
  const { getFixedT: dt } = useLocales();
  const { InputStyles, classes: $classes, uid, substratum, onChange, onElementDispatch } = useContext(ProptypesEditorContext);
  const { [pathname]: nodes = [] } = substratum;
  const [node = null] = nodes;
  const classes = useStyles();

  useImperativeHandle(ref, () => ({}), []);

  const handleNodeActived = (_e, target = nodes) => {
    switch (target.length) {
      case 0: {
        const appendUid = uuid();

        onElementDispatch([
          { type: 'WIDGET_APPEND', target: uid, value: pathname, options: { uid: appendUid } },
          { type: 'SET_STATE', target: 'actived', value: appendUid }
        ]);

        return false;
      }
      case 1: {
        onElementDispatch({ type: 'SET_STATE', target: 'actived', value: target[0].uid });

        return false;
      }
      default:
        return true;
    }
  };

  return (
    <TextField
      {...InputStyles}
      fullWidth
      required={definition.required}
      disabled={_isPlainObject(node?.props)}
      label={propName}
      value={(!_isPlainObject(node?.props) && node?.props) || ''}
      onChange={({ target: { value } }) => {
        if (!node) {
          onElementDispatch({ type: 'WIDGET_APPEND', target: uid, value: pathname, options: { uid: uuid(), props: value } });
        } else {
          onChange({ ...node, props: value });
        }
      }}
      InputLabelProps={{
        ...(_isPlainObject(node?.props) && { shrink: false }),
        classes: { asterisk: cx(classes.required, $classes?.required) }
      }}
      InputProps={{
        className: cx(classes.root, $classes?.input),
        endAdornment: (
          <InputAdornment position="end">
            {(!node?.props || _isPlainObject(node?.props)) && (
              <IconMenuButton
                size="small"
                color="primary"
                tooltip={dt(nodes.length === 0 ? 'btn-create-element' : 'btn-view-element', { propName })}
                icon={(<WidgetsIcon />)}
                onClick={handleNodeActived}
              >
                {nodes.map((item) => (
                  <IconMenuItem key={item.uid} text={item.description} onClick={(e) => handleNodeActived(e, [item])} />
                ))}
              </IconMenuButton>
            )}

            {typeof node?.props === 'string' && node.props.trim() && (
              <Tooltip title={dt('btn-reset')}>
                <IconButton size="small" color="secondary" onClick={() => onElementDispatch({ type: 'WIDGET_DESTROY', target: node.uid })}>
                  <UndoIcon />
                </IconButton>
              </Tooltip>
            )}
          </InputAdornment>
        )
      }}
    />
  );
});

NodeBase.displayName = 'NodeBase';

export default withPropitem('node', NodeBase);
