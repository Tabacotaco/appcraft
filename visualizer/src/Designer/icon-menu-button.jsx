/* eslint-disable react/prop-types */
import React, { createContext, forwardRef, useState, useCallback, useContext, useImperativeHandle } from 'react';

import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import Popover from '@material-ui/core/Popover';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import MoreVertIcon from '@material-ui/icons/MoreVert';


const MenuContext = createContext({ onClose: () => null });

const useStyles = makeStyles((theme) => ({
  icon: {
    minWidth: theme.spacing(5.25),
    width: theme.spacing(5.25)
  }
}));

const FitContentMenu = withStyles({
  root: {
    width: 'fit-content !important'
  }
})(List);

export function IconMenuItem({ icon, text, disabledAutoClose = false, onClick, ...props }) {
  const { onClose } = useContext(MenuContext);
  const classes = useStyles();

  return (
    <MenuItem
      {...props}
      button
      onClick={(e) => {
        onClick?.(e);
        !disabledAutoClose && onClose();
      }}
    >
      {icon && (
        <ListItemIcon className={classes.icon}>
          {icon}
        </ListItemIcon>
      )}

      <ListItemText primary={text} />
    </MenuItem>
  );
}

const IconMenuButton = forwardRef(({ icon, tooltip, children, onClick, onClose, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    onClose?.();
  }, [onClose]);

  useImperativeHandle(ref, () => ({
    close: handleClose
  }));

  return (
    <MenuContext.Provider value={{ onClose: handleClose }}>
      <Tooltip title={tooltip || ' '} {...(!tooltip && { open: false })}>
        <IconButton {...props} onClick={(e) => onClick?.(e) !== false && setAnchorEl(e.currentTarget)}>
          {icon || (
            <MoreVertIcon />
          )}
        </IconButton>
      </Tooltip>

      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
          onClose?.();
        }}
        PaperProps={{ component: FitContentMenu }}
      >
        {children}
      </Popover>
    </MenuContext.Provider>
  );
});

IconMenuButton.displayName = 'IconMenuButton';

export default IconMenuButton;
