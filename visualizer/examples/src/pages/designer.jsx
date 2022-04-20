import React, { useState, useReducer } from 'react';

import { EditorState, Compartment } from '@codemirror/state';
import { EditorView, basicSetup } from '@codemirror/basic-setup';
import { json } from '@codemirror/lang-json';
import { generate as uuid } from 'shortid';

import _set from 'lodash/set';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import AppcraftDesigner from '@appcraft/visualizer/Designer';

import ALL_WIDGETS from '../components/widget-proxy';


// TODO: Override Default Props
const TAB_SIZE_CONF = new Compartment();

const WIDGET_DEFINITIONS = __WEBPACK_DEFINE__.APPCRAFT_WIDGET_DEFINITION;
const DECORATION_DEFINITIONS = __WEBPACK_DEFINE__.APPCRAFT_DECORATION_DEFINITION;

// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  designer: {
    height: '100%'
  },
  dialog: {
    '& *[role=title]': {
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    '& *[role=toolbar]': {
      padding: 0,

      '& > button': {
        margin: 0,
        borderTopLeftRadius: '0 !important',
        borderTopRightRadius: '0 !important'
      }
    }
  },
  editor: {
    height: 'auto !important',
    background: theme.palette.background.default,

    '& div.cm-gutters': {
      background: theme.palette.background.paper,
      color: theme.palette.text.primary
    },
    '& .ͼb': {
      color: theme.palette.primary.light
    },
    '& .ͼc': {
      color: theme.palette.warning.light
    },
    '& .ͼd': {
      color: theme.palette.secondary.light
    },
    '& .cm-activeLine, & .cm-activeLineGutter': {
      background: theme.palette.primary.main
    }
  }
}));

const useJsonReducer = (() => {
  function reducerFn(state, action) {
    return (Array.isArray(action) ? action : [action]).reduce(
      (nextState, { type, target, value }) => {
        switch (type) {
          case 'DESTROY_ALL': {
            state.editor?.destroy();

            return { values: null, editor: null, onConfirm: null };
          }
          case 'UPDATE_STATE':
            return { ...nextState, [target]: value };

          case 'INIT_EDITOR': {
            const { values } = nextState;

            return {
              ...nextState,

              editor: new EditorView({
                parent: target,
                state: EditorState.create({
                  doc: JSON.stringify(values, null, 2),
                  extensions: [
                    basicSetup,
                    json(),
                    TAB_SIZE_CONF.of(EditorState.tabSize.of(2)),

                    EditorView.updateListener.of((e) => {
                      if (e.docChanged) {
                        try {
                          value(JSON.parse(e.state.doc.toString()));
                        } catch (err) {
                          value(false);
                        }
                      }
                    })
                  ]
                })
              })
            };
          }
          default:
            return nextState;
        }
      },
      state
    );
  }

  return () => (
    useReducer(
      reducerFn,
      { values: null, editor: null, onConfirm: null }
    )
  );
})();


// TODO: Components
const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default function DesignerPage() {
  const [{ values, editor, onConfirm }, dispatch] = useJsonReducer();
  const [config, setConfig] = useState(null);
  const [uid, setUid] = useState(uuid());
  const [jsonValue, setJsonValue] = useState({});

  const classes = useStyles();

  return (
    <React.Suspense fallback={null}>
      <AppcraftDesigner
        key={uid}
        lang="en"
        classes={{ root: classes.designer }}
        definitions={{ props: WIDGET_DEFINITIONS, decorations: DECORATION_DEFINITIONS }}
        widgetProxy={ALL_WIDGETS}
        onCancel={() => setUid(uuid())}
        onConfirm={(_e, newConfig) => setConfig(newConfig)}
        onJsonModeOpen={(_e, props, confirmFn) => (
          dispatch([
            { type: 'UPDATE_STATE', target: 'values', value: props },
            { type: 'UPDATE_STATE', target: 'onConfirm', value: confirmFn }
          ])
        )}
      />

      <Dialog
        TransitionComponent={Transition}
        PaperProps={{ className: classes.preview }}
        fullWidth
        scroll="body"
        maxWidth="md"
        open={Boolean(config)}
        onClose={() => setConfig(null)}
      >
        <DialogTitle>
          Widget Configuration
        </DialogTitle>

        <DialogContent>
          <pre>
            {JSON.stringify(config, null, 2)}
          </pre>
        </DialogContent>
      </Dialog>

      <Dialog
        TransitionComponent={Transition}
        PaperProps={{ className: classes.dialog }}
        fullWidth
        scroll="body"
        maxWidth="md"
        open={Boolean(values)}
        onClose={() => dispatch({ type: 'DESTROY_ALL' })}
      >
        <DialogTitle role="title">
          JSON Properties Editor
        </DialogTitle>

        <DialogContent>
          {values && (
            <TextField
              fullWidth
              margin="dense"
              size="small"
              variant="outlined"
              label="JSON Content"
              {...(jsonValue === false && {
                error: true,
                helperText: 'Invalid JSON Format.'
              })}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                inputComponent: 'div',
                inputProps: { className: classes.editor },
                inputRef: (target) => (
                  !editor && dispatch({
                    type: 'INIT_EDITOR',
                    target,
                    value: setJsonValue
                  })
                )
              }}
            />
          )}
        </DialogContent>

        <ButtonGroup role="toolbar" fullWidth size="large" variant="contained" component={DialogActions}>
          <Button color="default" startIcon={(<CloseIcon />)} onClick={() => dispatch({ type: 'DESTROY_ALL' })}>
            Cancel
          </Button>

          {onConfirm instanceof Function && (
            <Button
              color="primary"
              startIcon={(<CheckIcon />)}
              onClick={() => {
                onConfirm(jsonValue);
                dispatch({ type: 'DESTROY_ALL' });
              }}
            >
              Confirm
            </Button>
          )}
        </ButtonGroup>
      </Dialog>
    </React.Suspense>
  );
}

Transition.displayName = 'Transition';
