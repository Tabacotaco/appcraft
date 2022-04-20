import React, { useRef, useEffect, useState, useContext } from 'react';

import _cloneDeep from 'lodash/cloneDeep';
import _get from 'lodash/get';
import _set from 'lodash/set';
import _toPath from 'lodash/toPath';

import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import UndoIcon from '@material-ui/icons/Undo';

import IconMenuButton, { IconMenuItem } from '../icon-menu-button';
import { ProptypesEditorContext, getPropPathname, useBindingState, useTypePairs } from '../_customs';
import { useLocales } from '../../_utils/locales';
import { useOverrided } from '../with-structure';


// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  icon: {
    minWidth: theme.spacing(5.25),
    width: theme.spacing(5.25)
  }
}));


// TODO: Components
export default function withPropitem(category, PropElement) {
  const HOCElement = React.memo((controlProps) => {
    const { superiorType, superiorPathname, definition, propName } = controlProps;

    const { getFixedT: dt } = useLocales();
    const { InputStyles, selected, uid, typePairs, props, onChange, onStateBinding } = useContext(ProptypesEditorContext);
    const [implement, contentProps, locked, pathname, disabled, value] = useOverrided(PropElement, category, controlProps);
    const [binding, mainState] = useBindingState(pathname);

    const [naming, setNaming] = useState(false);
    const [namingEl, setNamingEl] = useState(null);
    const [newName, setNewName] = useState(propName);
    const [pseudoDef, types] = useTypePairs(pathname, definition);

    const menuRef = useRef();
    const classes = useStyles();
    const { type } = typePairs[pathname] || definition;

    const modifiable = naming
      || (/^(any|oneOfType)$/.test(definition.type) && types.length > 1)
      || /^(array|object)(Of)?$/.test(superiorType);

    const handleNaming = () => {
      const superior = superiorPathname ? _get(props, _toPath(superiorPathname)) : props;

      delete typePairs[pathname];
      delete superior[propName];

      if (propName !== newName) {
        _set(typePairs, [getPropPathname(superiorType, superiorPathname, newName)], typePairs[pathname]);
        _set(props, [..._toPath(superiorPathname), newName], value);
      }
      onChange(_cloneDeep({ typePairs, props }));
      setNaming(false);
    };

    useEffect(() => {
      namingEl?.focus();
    }, [namingEl]);

    return (
      <ListItem {...contentProps} role={`prop-${category}`} id={pathname} selected={pathname === selected}>
        {onStateBinding instanceof Function && (
          <ListItemIcon className={classes.icon} onClick={(e) => e.stopPropagation()}>
            {!/^(func|node|element|elementType)$/.test(type) && (!modifiable || pseudoDef) && (
              <Tooltip title={dt('btn-state-binding')}>
                <Checkbox
                  color="secondary"
                  disabled={locked || disabled || (binding && !mainState)}
                  checked={binding}
                  onChange={({ target: { checked } }) => (
                    onStateBinding({
                      uid,
                      path: pathname,
                      typeId: pseudoDef?.uid || definition.uid,
                      defaultValue: value
                    }, checked)
                  )}
                />
              </Tooltip>
            )}
          </ListItemIcon>
        )}

        <ListItemText
          primary={!naming ? implement : (
            <TextField
              {...InputStyles}
              fullWidth
              inputRef={setNamingEl}
              label={dt('lbl-property-name', { propName })}
              defaultValue={propName}
              onChange={({ target: { value: name } }) => setNewName(name)}
              onKeyDown={(e) => ((e.key === 'Enter' && handleNaming()) || (e.key === 'Escape' && menuRef.current?.close()))}
            />
          )}
        />

        {modifiable && (
          <ListItemSecondaryAction>
            <IconMenuButton size="small" color="primary" tooltip={dt('btn-property-setting')} disabled={binding || disabled} icon={(<SettingsOutlinedIcon />)}>
              {naming
                ? (
                  <>
                    <IconMenuItem icon={(<UndoIcon />)} text={dt('btn-cancel')} onClick={() => setNaming(false)} />
                    <IconMenuItem icon={(<DoneIcon color="primary" />)} text={dt('btn-confirm')} onClick={() => handleNaming()} />
                  </>
                )
                : (
                  <>
                    {/* TODO: Mxied Types Selector */}
                    {!disabled && /^(any|oneOfType)$/.test(definition.type) && types.length > 1 && !/^\*\d+$/.test(propName) && (
                      <>
                        {types.map((mixed) => (
                          <IconMenuItem
                            key={mixed.uid}
                            selected={mixed.uid === pseudoDef?.uid}
                            icon={mixed.uid === pseudoDef?.uid
                              ? (<CheckBoxIcon color="primary" />)
                              : (<CheckBoxOutlineBlankIcon />)}
                            text={mixed.description || mixed.type}
                            onClick={() => {
                              onChange({
                                typePairs: { ...typePairs, [pathname]: mixed },
                                props: _set(props, pathname, null)
                              });
                            }}
                          />
                        ))}
                        <Divider />
                      </>
                    )}

                    {/* TODO: Naming Button */}
                    {/^object(Of)?$/.test(superiorType) && (
                      <IconMenuItem disabled={disabled} icon={(<LabelOutlinedIcon color="primary" />)} text={dt('btn-naming')} onClick={() => setNaming(true)} />
                    )}

                    {/* TODO: Remove Property Button */}
                    {/^(array|object)(Of)?$/.test(superiorType) && (
                      <IconMenuItem
                        disabled={disabled}
                        icon={(<CloseIcon color="secondary" />)}
                        text={dt('btn-remove-property')}
                        onClick={() => {
                          if (/^object(Of)?$/.test(superiorType)) {
                            handleNaming();
                          } else if (/^array(Of)?$/.test(superiorType)) {
                            const superiorValue = _get(props, superiorPathname);
                            const index = parseFloat(propName);

                            onChange({
                              props: _set(props, _toPath(superiorPathname), superiorValue.filter((_v, i) => i !== index)),
                              typePairs: Object.entries(typePairs).reduce(
                                (result, [pairPath, pairDef]) => {
                                  const [pairName, ...pairSuperiorPath] = _toPath(pairPath).reverse();
                                  const pairIndex = parseFloat(pairName);

                                  pairSuperiorPath.reverse();

                                  if (JSON.stringify(pairSuperiorPath) !== JSON.stringify(superiorPathname)) {
                                    _set(result, [pairPath], pairDef);
                                  } else if (pairIndex > index) {
                                    _set(result, [getPropPathname(superiorType, superiorPathname, pairIndex - 1)], pairDef);
                                  }
                                  return result;
                                },
                                {}
                              )
                            });
                          }
                        }}
                      />
                    )}
                  </>
                )}
            </IconMenuButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
    );
  });

  HOCElement.Naked = PropElement;
  HOCElement.displayName = 'Propitem';

  return HOCElement;
}
