/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useImperativeHandle, useState, useContext } from 'react';

import cx from 'clsx';
import { generate as uuid } from 'shortid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import VariableBase, { useReference } from './variable';
import { VARIABLE_TYPE, ProptypesEditorContext, getPropPathname } from '../_customs';
import { Variable } from '../../Visualizer/_customs';
import { useLocales } from '../../_utils/locales';


//* Custom Hooks
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 !important',
    background: theme.palette.background.default,

    '&.no-data': {
      background: theme.palette.background.paper
    }
  },
  card: {
    display: 'block',
    border: `1px solid ${theme.palette.divider}`,
    padding: '0 !important',
    margin: theme.spacing(1, 1),
    width: `calc(100% - ${theme.spacing(2)}px)`
  },
  header: {
    borderBottom: `1px solid ${theme.palette.divider}`,

    '& > .action': {
      margin: '0 !important'
    }
  },
  content: {
    '& > * + *': {
      marginTop: theme.spacing(3)
    }
  },
  variable: {
    height: 'fit-content',
    padding: `${theme.spacing(1)}px !important`
  },
  preview: {
    display: 'flex',
    alignItems: 'center',
    background: ({ preview }) => theme.palette[preview?.result ? 'info' : 'error'].main,
    padding: theme.spacing(1, 1.5),

    '& > * + *': {
      marginLeft: theme.spacing(1.5)
    }
  }
}));

//* Components
const ConditionBase = React.forwardRef(({ className, component, prefix = '', value: defaultCondition, onChange }, ref) => {
  const { InputStyles } = useContext(ProptypesEditorContext);
  const { refs } = useReference();
  const { getFixedT: dt } = useLocales();
  const [expanded, setExpanded] = useState(defaultCondition[0]?.uid || null);
  const [preview, setPreview] = useState(null);
  const classes = useStyles({ preview });

  useImperativeHandle(ref, () => (
    <Tooltip title={dt('btn-add-condition')}>
      <IconButton
        color="primary"
        onClick={() => {
          const newUid = uuid();
          const defaultSourceType = Object.keys(refs).find((key) => Object.entries(refs[key]).length > 0);

          setExpanded(newUid);

          onChange({
            name: getPropPathname('array', prefix, defaultCondition.length),
            value: {
              uid: newUid,
              description: `Condition_${Math.floor(Math.random() * 10000)}`,
              source: { type: defaultSourceType, description: `Source_${Math.floor(Math.random() * 10000)}` },
              value: { type: 'String', description: `Value_${Math.floor(Math.random() * 10000)}` }
            }
          });
        }}
      >
        <AddIcon />
      </IconButton>
    </Tooltip>
  ), [prefix, refs, defaultCondition.length]);

  return (
    <>
      <Popover
        open={Boolean(preview)}
        anchorEl={preview?.anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => setPreview(null)}
        PaperProps={{ className: classes.preview }}
      >
        {preview?.result
          ? (<CheckCircleOutlineIcon />)
          : (<CancelOutlinedIcon />)}

        <Typography variant="subtitle1" color="inherit">
          {dt(`ttl-${preview?.result ? 'matched' : 'unmatched'}`)}
        </Typography>
      </Popover>

      <List component={component} className={cx(classes.root, className, { 'no-data': defaultCondition.length === 0 })}>
        {defaultCondition.length === 0 && (
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ align: 'center', color: 'textSecondary', variant: 'h6' }}
              primary={dt('ttl-no-condition')}
            />
          </ListItem>
        )}

        {defaultCondition.map(({ uid, description, source, value }, i) => {
          const baseName = getPropPathname('array', prefix, i);

          return (
            <Card key={uid} className={classes.card} component={ListItem}>
              <CardHeader
                classes={{ root: classes.header, action: 'action' }}
                title={description}
                avatar={(
                  <IconButton onClick={() => setExpanded(uid === expanded ? null : uid)}>
                    {uid === expanded
                      ? (<ExpandLessIcon />)
                      : (<ExpandMoreIcon />)}
                  </IconButton>
                )}
                action={(
                  <>
                    <Tooltip title={dt('ttl-preview-condition-result')}>
                      <IconButton
                        color="primary"
                        disabled={!source.initValue || !value.initValue}
                        onClick={({ currentTarget }) => (
                          setPreview({
                            anchorEl: currentTarget,
                            result: JSON.stringify(Variable.generate(refs, source.type, source.initValue))
                              === JSON.stringify(Variable.generate(refs, value.type, value.initValue))
                          })
                        )}
                      >
                        <HelpOutlineIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title={dt('btn-remove-condition')}>
                      <IconButton
                        color="secondary"
                        onClick={() => {
                          if (uid === expanded) {
                            setExpanded(null);
                          }

                          onChange({
                            name: prefix,
                            value: defaultCondition.filter((c) => c.uid !== uid)
                          });
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                )}
              />

              <Collapse component={CardContent} classes={{ wrapperInner: classes.content }} in={uid === expanded} timeout="auto" unmountOnExit>
                <TextField
                  {...InputStyles}
                  fullWidth
                  label={dt('lbl-description')}
                  name={getPropPathname('object', baseName, 'description')}
                  value={description}
                  onChange={({ target }) => onChange(target)}
                />

                <TextField
                  {...InputStyles}
                  fullWidth
                  label={dt('lbl-condition-source')}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    inputComponent: VariableBase,
                    value: source,
                    onChange,
                    inputProps: {
                      allowedTypes: ['input', 'state', 'todo', ...('source' in refs ? ['source'] : [])],
                      className: classes.variable,
                      disableTreatments: true,
                      prefix: getPropPathname('object', baseName, 'source')
                    }
                  }}
                />

                <TextField
                  {...InputStyles}
                  fullWidth
                  label={dt('lbl-condition-value')}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    inputComponent: VariableBase,
                    value,
                    onChange,
                    inputProps: {
                      ...('source' in refs && { allowedTypes: Object.keys(VARIABLE_TYPE) }),
                      className: classes.variable,
                      disableTreatments: true,
                      prefix: getPropPathname('object', baseName, 'value')
                    }
                  }}
                />
              </Collapse>
            </Card>
          );
        })}
      </List>
    </>
  );
});

ConditionBase.displayName = 'ConditionBase';

export default ConditionBase;
