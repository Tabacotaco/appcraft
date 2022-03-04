/* eslint-disable react/prop-types */
import React from 'react';

import Typography from '@material-ui/core/Typography';

import DisplayProp from './display';
import PureProp from './pure';
import withPropitem from './with-propitem';
import { useTypePairs } from '../_customs';


const MixedBase = React.forwardRef(({ pathname, propName, definition, value, onFieldLocked }, ref) => {
  const [pseudoDef] = useTypePairs(pathname, definition);

  if (/^(bool|element|instanceOf|node|number|oneOf|string|symbol)$/.test(pseudoDef?.type)) {
    return (
      <PureProp.Naked
        ref={ref}
        pathname={pathname}
        propName={`${propName}(${pseudoDef.description || pseudoDef.type})`}
        definition={pseudoDef}
        value={value}
        onFieldLocked={onFieldLocked}
      />
    );
  }

  if (/^(((array|object)(Of)?)|exact|shape)$/.test(pseudoDef?.type)) {
    return (
      <DisplayProp.Naked
        ref={ref}
        pathname={pathname}
        propName={`${propName}(${pseudoDef.description || pseudoDef.type})`}
        definition={pseudoDef}
      />
    );
  }

  return (
    <Typography variant="subtitle1" color="textSecondary">
      {propName}
    </Typography>
  );
});

MixedBase.displayName = 'MixedBase';

export default withPropitem('mixed', MixedBase);
