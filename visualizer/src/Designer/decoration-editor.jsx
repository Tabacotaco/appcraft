/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from 'react';

import { generate as uuid } from 'shortid';

import _get from 'lodash/get';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Stepper from '@material-ui/core/Stepper';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import { ProptypesEditorContext } from './_customs';
import { useLocales } from '../_utils/locales';
import { useWidgetContext } from '../Visualizer/_customs';


// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(1, 3),
    borderBottom: `1px solid ${theme.palette.divider}`,

    '& > *[role=title]': {
      marginRight: 'auto'
    }
  },
  action: {
    padding: '0 !important',

    '& > *': {
      borderRadius: '0',
      margin: '0 !important',

      '&:first-child': {
        borderBottomLeftRadius: `${theme.shape.borderRadius} !important`
      },
      '&:last-child': {
        borderBottomRightRadius: `${theme.shape.borderRadius} !important`
      }
    }
  },
  content: {
    height: `calc(90vh - ${theme.spacing(15)}px) !important`,
    margin: `${theme.spacing(-1, 0)} !important`,
    padding: `${theme.spacing(1, 0)} !important`,

    '& > *[role=stepper]': {
      maxHeight: '100%',
      height: 'fit-content',
      width: `calc(100% - ${theme.spacing(42)}px) !important`,
      overflowY: 'auto',

      '& *[role=text]': {
        wordBreak: 'break-all'
      },

      '& + *': {
        width: theme.spacing(42),
        borderLeft: `1px solid ${theme.palette.divider}`
      },

      '& button[role=step] > span:first-child': {
        width: '100%',

        '& > span:nth-child(2)': {
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',

          '& > span:first-child': {
            minWidth: 'fit-content',
            paddingRight: theme.spacing(4)
          },

          '& > div.action': {
            position: 'absolute',
            display: 'flex',
            top: 0,
            right: 0,
            bottom: 0,
            left: 'auto',
            alignItems: 'center'
          }
        }
      }
    }
  }
}));


// TODO: Component
export default function DecorationDialog({ StructureComponent: StructureProps, classes: _classes, open, value: defaultValue, onConfirm, onClose }) {
  const { getFixedT: dt } = useLocales();
  const { definitions } = useWidgetContext();
  const { InputStyles, classes: $classes, override, onElementDispatch } = useContext(ProptypesEditorContext);

  const [actived, setActived] = useState(null);
  const [step, setStep] = useState(0);
  const [decorations, setDecorations] = useState([]);

  const decoration = decorations[step] || {};
  const { importBy, description, typePairs, options, handles } = decoration;
  const { configTypes: definition = { type: 'exact' } } = definitions?.decorations?.[importBy] || {};

  const classes = useStyles();

  const handleDecorationChange = ({ props, ...newDecoration }) => (
    setDecorations(
      decorations.map(($decoration, i) => (
        i === step ? { ...newDecoration, options: props } : $decoration
      ))
    )
  );

  useEffect(() => {
    if (open) {
      setActived(null);
      setStep(0);
      setDecorations(defaultValue || []);
    }
  }, [open]);

  return (
    <Dialog fullWidth maxWidth="sm" open={open}>
      <DialogTitle disableTypography className={classes.title}>
        <Typography role="title" variant="h6" color="textPrimary">
          {dt('ttl-decoration')}
        </Typography>

        <Tooltip title={dt('btn-add-decoration')}>
          <IconButton
            color="primary"
            onClick={() => (
              setDecorations([...decorations, {
                uid: uuid(),
                description: `Decoration_${Math.floor(Math.random() * 10000)}`,
                options: {}
              }])
            )}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      </DialogTitle>

      <Grid className={classes.content} container component={DialogContent}>
        {/* TODO: No Decoration Message */}
        {decorations.length === 0
          ? (
            <Typography variant="h6" align="center" color="textSecondary" component={Grid} item xs={12}>
              {dt('ttl-no-decoration')}
            </Typography>
          )
          : (
            <>
              {/* TODO: Decoration Stepper */}
              <Stepper role="stepper" nonLinear orientation="vertical" activeStep={step} component={Grid} item>
                {decorations.map(({ uid, description: subtitle, importBy: value }, i) => {
                  const { description: title } = definitions.decorations[value] || {};

                  return (
                    <Step key={uid}>
                      <StepButton
                        role="step"
                        onClick={() => setStep(i)}
                        optional={(
                          <div className="action">
                            <IconButton
                              size="small"
                              color="secondary"
                              onClick={(e) => {
                                e.stopPropagation();
                                setDecorations(decorations.filter(({ uid: target }) => target !== uid));
                              }}
                            >
                              <CloseIcon />
                            </IconButton>
                          </div>
                        )}
                      >
                        <Typography role="text" align="left" variant="subtitle1" color={title ? 'textPrimary' : 'secondary'}>
                          {title || dt('ttl-invalid-decoration')}
                        </Typography>

                        <Typography role="text" align="left" variant="body2" color="textSecondary">
                          {subtitle}
                        </Typography>
                      </StepButton>
                    </Step>
                  );
                })}
              </Stepper>

              {/* TODO: Decoration Options Setting */}
              <Grid item>
                <ProptypesEditorContext.Provider
                  value={{
                    InputStyles,

                    actived,
                    classes: $classes,
                    disableHandleRefs: true,
                    override,

                    handles: handles || {},
                    state: [],
                    props: options || {},
                    substratum: {},
                    typePairs: typePairs || {},

                    onActive: setActived,
                    onChange: (newDecoration) => handleDecorationChange({ ...decoration, ...newDecoration }),
                    onElementDispatch
                  }}
                >
                  <StructureProps
                    definition={definition}
                    subheader={(
                      <Toolbar role="subheader-bar" className="main" variant="dense">
                        <TextField
                          {...InputStyles}
                          fullWidth
                          select
                          label={dt('lbl-decoration')}
                          value={importBy || ''}
                          onChange={({ target: { value }, currentTarget }) => (
                            handleDecorationChange({
                              uid: decoration.uid,
                              description: `${currentTarget.dataset.description}_${Math.floor(Math.random() * 10000)}`,
                              importBy: value,
                              options: {}
                            })
                          )}
                        >
                          {Object.entries(definitions.decorations).map(([value, { description: text }]) => (
                            <MenuItem key={value} data-description={text} value={value}>
                              {text}
                            </MenuItem>
                          ))}
                        </TextField>

                        <TextField
                          {...InputStyles}
                          fullWidth
                          disabled={!importBy}
                          label={dt('lbl-description')}
                          value={description || ''}
                          onChange={({ target: { value } }) => (
                            handleDecorationChange({
                              ...decoration,
                              description: value
                            })
                          )}
                        />
                      </Toolbar>
                    )}
                  />
                </ProptypesEditorContext.Provider>
              </Grid>
            </>
          )}
      </Grid>

      <ButtonGroup className={classes.action} fullWidth variant="contained" size="large" component={DialogActions}>
        <Button color="default" startIcon={(<CloseIcon />)} onClick={onClose}>
          {dt('btn-cancel')}
        </Button>

        <Button color="primary" startIcon={(<CheckIcon />)} onClick={() => onConfirm(decorations)}>
          {dt('btn-confirm')}
        </Button>
      </ButtonGroup>
    </Dialog>
  );
}
