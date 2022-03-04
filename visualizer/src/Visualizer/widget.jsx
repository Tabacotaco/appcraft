/* eslint-disable react/prop-types */
import React from 'react';

import _set from 'lodash/set';

import withErrorBoundary from './error-boundary';
import { useWidgetContext, useWidgets, useWidgetElement, useWidgetProps } from './_customs';


// TODO: Component
export default function Widget(options) {
  const { uid, importBy } = options;
  const { state: { [uid]: widgetState }, widgets } = useWidgetContext();
  const WidgetElement = useWidgetElement(withErrorBoundary, importBy);
  const substratum = useWidgets(widgets, uid);
  const widgetProps = useWidgetProps(options, widgetState);

  return !WidgetElement
    ? null
    : (
      <WidgetElement
        {...widgetProps}
        {...Object.entries(substratum || {}).reduce( // Element Nodes
          (result, [propName, nodes]) => (
            _set(result, propName, nodes.map((widgetOpts) => (
              typeof widgetOpts.props === 'string'
                ? (widgetOpts.props || null)
                : (<Widget key={widgetOpts.uid} {...widgetOpts} />)
            )))
          ),
          {}
        )}
      />
    );
}
