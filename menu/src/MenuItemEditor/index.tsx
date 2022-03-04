/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SearchIcon from '@material-ui/icons/Search';

import makeLocales, { useLocales } from '../utils/locales';
import { EMPTY_OPTION, useDialog, useIcons } from './_customs';
import { IconOptions } from '../utils/prop-types';
import { AppcraftMenu } from '../utils/_context';

import LocalesEn from '../_assets/locales/en/menu-item-editor.json';
import LocalesZh from '../_assets/locales/zh-Hant/menu-item-editor.json';


// TODO: TS Namespace
export namespace AppcraftEditor {
  export namespace def {
    type IconGroup = { [type: string]: string[]; };

    export interface IconGroupProps {
      inputRef: React.RefCallback<HTMLElement | null>;
      className?: string;
      classes: { [name: string]: string; };
      icons?: IconGroup;
      value?: string;
    }

    export interface Props {
      icons?: IconGroup;
      languages?: ({ code: string; display: string; })[];
      open: boolean;
      title?: string;
      type: 'add' | 'edit';
      value?: AppcraftMenu.MenuItemOptions;
      onClose?: React.MouseEventHandler<HTMLElement>;
      onChange?: Function;
    }
  }

  export namespace hooks {
    type Icon = AppcraftMenu.Icon & { key: string; };

    export type Icons = [Icon[], React.ChangeEventHandler<HTMLInputElement>];

    export type Dialog = [AppcraftMenu.MenuItemOptions, boolean, {
      add: React.MouseEventHandler<HTMLButtonElement>;
      confirm: React.MouseEventHandler<HTMLButtonElement>;
      icon: React.ChangeEventHandler<HTMLInputElement>;
      lang: React.ChangeEventHandler<HTMLInputElement>;
      primary: React.ChangeEventHandler<HTMLInputElement>;
      remove: React.MouseEventHandler<HTMLButtonElement>;
    }];
  }
}

// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  actions: {
    padding: 0,

    '& > button': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      margin: '0 !important'
    }
  },
  content: {
    marginBottom: theme.spacing(3),

    '& > *:not(:first-child)': {
      marginTop: theme.spacing(2)
    }
  },
  control: {
    display: 'flex',
    flexDirection: 'column',

    '& > .search-bar': {
      width: '100%'
    },

    '& > .icon-group': {
      maxHeight: theme.spacing(60),
      overflow: 'auto',

      '& > *': {
        margin: theme.spacing(1, 0),
        width: '25%'
      }
    }
  }
}));


// TODO: Export Component
const IconGroup: React.FC<AppcraftEditor.def.IconGroupProps> = ({ inputRef, classes, icons, ...props }) => {
  const { getFixedT: mt } = useLocales();
  const [list, handleSearch] = useIcons(icons) as AppcraftEditor.hooks.Icons;

  return (
    <>
      <Toolbar disableGutters variant="dense" className={classes.search}>
        <TextField
          fullWidth
          variant="standard"
          size="small"
          margin="dense"
          placeholder={mt('plh-keyword')}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="disabled" />
              </InputAdornment>
            )
          }}
        />
      </Toolbar>

      <RadioGroup
        ref={(ref?: { inputElement: HTMLElement }) => (
          inputRef(ref?.inputElement || null)
        )}
        row
        name="icon"
        {...props}
        className={cx(classes.group, props.className)}
      >
        {list.map(({ key, type, name }) => (
          <Tooltip key={key} title={name}>
            <FormControlLabel
              value={key}
              label={(
                <Icon
                  color={key === props.value ? 'primary' : 'action'}
                  style={{ fontSize: 32 }}
                  {...(type !== 'mui' && { className: cx(type, key) })}
                >
                  {type === 'mui' && name}
                </Icon>
              )}
              control={( // @ts-ignore
                <Radio color="primary" inputProps={{ 'data-type': type, 'data-name': name }} />
              )}
            />
          </Tooltip>
        ))}
      </RadioGroup>
    </>
  );
};

const MenuItemEditor: React.FC<AppcraftEditor.def.Props> = ({ value: defaultValue, open, title, type, icons, languages, onChange, onClose }) => {
  const classes = useStyles();
  const { getFixedT: mt } = useLocales();
  const [value, confirmable, handles] = useDialog(type, defaultValue, onChange) as AppcraftEditor.hooks.Dialog;

  return (
    <Dialog fullWidth disableBackdropClick scroll="body" maxWidth="sm" open={open} onClose={onClose} PaperProps={{ component: 'form' }}>
      <Typography variant="h6" component={DialogTitle} disableTypography>
        {title}
      </Typography>

      <DialogContent className={classes.content}>
        {Object.entries(value?.primary || {}).map(([lang, primary], i, arr) => (
          <TextField
            key={lang}
            fullWidth
            variant="outlined"
            margin="dense"
            size="small"
            disabled={lang === EMPTY_OPTION}
            label={mt('lbl-item-name')}
            name={lang}
            value={primary}
            onChange={handles.primary}
            InputProps={{
              startAdornment: languages?.length > 1 && (
                <InputAdornment position="start">
                  <TextField
                    fullWidth
                    select
                    variant="standard"
                    margin="dense"
                    size="small"
                    name={lang}
                    value={lang}
                    onChange={handles.lang}
                    InputProps={{ disableUnderline: true }}
                  >
                    <MenuItem value={EMPTY_OPTION}>
                      &nbsp;
                    </MenuItem>

                    {languages?.map(({ code, display }) => (
                      <MenuItem key={code} value={code} disabled={code in (value.primary as object)}>
                        {display}
                      </MenuItem>
                    ))}
                  </TextField>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {i === (arr.length - 1) && languages?.length > arr.length && (
                    <IconButton size="small" color="primary" onClick={handles.add}>
                      <AddIcon />
                    </IconButton>
                  )}

                  {arr.length > 1 && (
                    <IconButton size="small" color="secondary" data-lang={lang} onClick={handles.remove}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              )
            }}
          />
        ))}

        <FormControl fullWidth variant="outlined" size="small" margin="dense">
          <InputLabel shrink>
            {mt('lbl-icon')}
          </InputLabel>

          <OutlinedInput
            fullWidth
            multiline
            notched
            className={classes.control}
            margin="dense"
            size="small"
            label={mt('lbl-icon')}
            value={!value?.icon ? '' : `${value.icon.type}-${value.icon.name}`}
            onChange={handles.icon}
            // @ts-ignore
            inputComponent={IconGroup}
            inputProps={{
              classes: { search: 'search-bar', group: 'icon-group' },
              icons
            }}
          />
        </FormControl>
      </DialogContent>

      <ButtonGroup fullWidth className={classes.actions} size="large" variant="contained" component={DialogActions}>
        <Button startIcon={(<CloseIcon />)} onClick={onClose}>
          {mt('btn-cancel')}
        </Button>

        <Button type="submit" color="primary" disabled={!confirmable} startIcon={(<CheckIcon />)} onClick={handles.confirm}>
          {mt('btn-confirm')}
        </Button>
      </ButtonGroup>
    </Dialog>
  );
};

MenuItemEditor.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  value: PropTypes.shape({
    uid: PropTypes.string,
    icon: IconOptions,
    primary: PropTypes.objectOf(
      PropTypes.string.isRequired
    ),
    secondary: PropTypes.objectOf(
      PropTypes.string.isRequired
    )
  }),

  onChange: PropTypes.func,
  onClose: PropTypes.func,

  icons: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired
  ),

  languages: PropTypes.arrayOf(
    PropTypes.exact({
      code: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired
    })
  ),

  // @ts-ignore
  type: PropTypes.oneOf([
    'add',
    'edit'
  ]).isRequired
};

MenuItemEditor.defaultProps = {
  icons: {},
  languages: []
};

export default makeLocales({
  en: LocalesEn,
  'zh-Hant': LocalesZh
})(MenuItemEditor);
