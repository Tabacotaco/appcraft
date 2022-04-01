import React, { useState, useMemo } from 'react';

import { generate as uuid } from 'shortid';

import _set from 'lodash/set';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import AppcraftDesigner from '@appcraft/visualizer/Designer';
import { makeStyles } from '@material-ui/core/styles';

import ALL_WIDGETS from '../components/widget-proxy';


// TODO: Override Default Props
const WIDGET_DEFINITIONS = __WEBPACK_DEFINE__.APPCRAFT_WIDGET_DEFINITION;
const DECORATION_DEFINITIONS = __WEBPACK_DEFINE__.APPCRAFT_DECORATION_DEFINITION;

// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  designer: {
    height: '100%'
  },
  preview: {
    '& > * + *': {
      borderTop: `1px solid ${theme.palette.divider}`
    }
  }
}));

// TODO: Components
const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default function DesignerPage() {
  const [config, setConfig] = useState(null);
  const [uid, setUid] = useState(uuid());
  const classes = useStyles();

  const LazyAppcraftDesigner = useMemo(() => (
    React.lazy(() => new Promise((resolve) => (
      resolve({
        default: AppcraftDesigner
      })
    )))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [uid]);

  return (
    <React.Suspense fallback={null}>
      <LazyAppcraftDesigner
        lang="en"
        classes={{ root: classes.designer }}
        definitions={{ props: WIDGET_DEFINITIONS, decorations: DECORATION_DEFINITIONS }}
        widgetProxy={ALL_WIDGETS}
        onCancel={() => setUid(uuid())}
        onConfirm={(_e, newConfig) => setConfig(newConfig)}
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
    </React.Suspense>
  );
}

Transition.displayName = 'Transition';
