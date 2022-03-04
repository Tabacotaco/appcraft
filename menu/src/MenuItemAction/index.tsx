import React from 'react';
import PropTypes from 'prop-types';

import Button, { ButtonProps } from '@material-ui/core/Button';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import makeLocales, { useLocales } from '../utils/locales';
import { AppcraftMenu } from '../utils/_context';
import { useActions } from './_customs';

import LocalesEn from '../_assets/locales/en/menu-item-action.json';
import LocalesZh from '../_assets/locales/zh-Hant/menu-item-action.json';


// TODO: TS Namespace
export namespace AppcraftAction {
  export namespace def {
    type ActionHandle = (e: AppcraftMenu.MenuItemOptions) => void;

    export interface Props {
      ButtonComponent?: React.FC<ButtonProps> | React.FC<IconButtonProps>;
      ButtonProps?: { [prop: string]: any; };
      uid: string;
      children?: React.ReactNode;
      type: {
        root?: boolean;
        onAdd?: ActionHandle;
        onEdit?: ActionHandle;
        onRemove?: ActionHandle;
      }
    }
  }

  export namespace hooks {
    export type Actions = [HTMLElement | null, { [name: string]: () => void; }];
  }
}


// TODO: Custom Hooks
const useStyles = makeStyles(() => ({
  menu: {
    '& > ul > *': {
      width: '100% !important'
    }
  }
}));


// TODO: Export Component
const MenuItemAction: React.FC<AppcraftAction.def.Props> = ({ ButtonComponent = IconButton, ButtonProps = {}, uid, children, type: { root = false, onAdd, onEdit, onRemove } }) => {
  const { getFixedT: mt } = useLocales();
  const [anchorEl, action] = useActions(uid, onAdd, onEdit, onRemove) as AppcraftAction.hooks.Actions;
  const classes = useStyles();

  return (
    root
      ? (onAdd instanceof Function && (
        <ButtonComponent {...ButtonProps} onClick={action.add}>
          {children || (
            <PlaylistAddIcon fontSize="large" />
          )}
        </ButtonComponent>
      ))
      : (
        <>
          <ButtonComponent {...ButtonProps} onClick={action.open}>
            {children || (
              <MoreVertIcon />
            )}
          </ButtonComponent>

          <Menu classes={{ paper: classes.menu }} open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={action.close}>
            {onEdit instanceof Function && (
              <MenuItem component={Button} {...ButtonProps} startIcon={(<EditIcon />)} onClick={action.edit}>
                {mt('btn-edit')}
              </MenuItem>
            )}

            {onAdd instanceof Function && (
              <MenuItem component={Button} {...ButtonProps} startIcon={(<PlaylistAddIcon />)} onClick={action.add}>
                {mt('btn-add')}
              </MenuItem>
            )}

            {onRemove instanceof Function && (
              <MenuItem component={Button} {...ButtonProps} startIcon={(<DeleteOutlineIcon />)} onClick={action.remove}>
                {mt('btn-remove')}
              </MenuItem>
            )}
          </Menu>
        </>
      )
  ) || null;
};

MenuItemAction.propTypes = {
  ButtonProps: PropTypes.object,
  ButtonComponent: PropTypes.oneOf<React.FC>([
    Button,
    IconButton
  ]),

  children: PropTypes.node,
  uid: PropTypes.string.isRequired,

  type: PropTypes.exact({
    root: PropTypes.bool,
    onAdd: PropTypes.func,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func
  }).isRequired
};

MenuItemAction.defaultProps = {
  ButtonComponent: IconButton,
  ButtonProps: {},
  type: { root: false }
};

export default makeLocales({
  en: LocalesEn,
  'zh-Hant': LocalesZh
})(MenuItemAction);
