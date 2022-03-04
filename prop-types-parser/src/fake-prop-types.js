import PropTypes from 'prop-types';

import _get from 'lodash/get';


const OPTIONS = Symbol('OPTIONS');

function uid(proptype, seq = 0) {
  return `${proptype}_${(seq + 1).toString().padStart(3, '0')}`;
}

function generateOptions(proptype, params, splitFn) {
  const type = Object.keys(PropTypes).find((proptypeName) => PropTypes[proptypeName] === proptype);
  const overrided = params.length === 0 ? proptype : proptype(...params);
  const definition = splitFn(type);

  if (definition) {
    const options = { type, ...definition };

    Object.defineProperty(overrided, OPTIONS, {
      get: () => ({ ...options, required: false })
    });

    Object.defineProperty(overrided.isRequired, OPTIONS, {
      get: () => ({ ...options, required: true })
    });
  }
  return overrided;
}

function overrideProptype(proptype, ...params) {
  return generateOptions(
    proptype,
    params,

    (type) => {
      switch (type) {
        case 'objectOf':
        case 'arrayOf':
        case 'instanceOf':
          return {
            uid: uid(type),
            options: _get(params[0], OPTIONS)
          };

        case 'oneOf':
          return {
            uid: uid(type),
            options: params[0]
          };

        case 'exact':
        case 'shape':
          return {
            uid: uid(type),
            options: Object.entries(params[0]).reduce(
              (properties, [property, { [OPTIONS]: options }]) => (
                !options ? properties : {
                  ...properties,
                  [property]: options
                }
              ),
              {}
            )
          };

        case 'oneOfType': {
          const alloweds = params[0].reduce(
            (result, { [OPTIONS]: options }, i) => (
              !options ? result : result.concat({
                ...options,
                uid: uid(options.type, i)
              })
            ),
            []
          );

          switch (alloweds.length) {
            case 0:
              return null;
            case 1:
              return alloweds[0];
            default:
              return { uid: uid(type), options: alloweds };
          }
        }
        default:
          return { uid: uid(type) };
      }
    }
  );
}

export function _getPropDefinition(propTypes) {
  return Object.entries(propTypes).reduce(
    (result, [name, { [OPTIONS]: options }]) => (
      !options ? result : { ...result, [name]: options }
    ),
    {}
  );
}

export default {
  ...PropTypes,

  any: overrideProptype(PropTypes.any),
  array: overrideProptype(PropTypes.array),
  arrayOf: (...params) => overrideProptype(PropTypes.arrayOf, ...params),
  bool: overrideProptype(PropTypes.bool),
  element: overrideProptype(PropTypes.element),
  elementType: overrideProptype(PropTypes.elementType),
  exact: (...params) => overrideProptype(PropTypes.exact, ...params),
  func: overrideProptype(PropTypes.func),
  instanceOf: (...params) => overrideProptype(PropTypes.instanceOf, ...params),
  node: overrideProptype(PropTypes.node),
  number: overrideProptype(PropTypes.number),
  object: overrideProptype(PropTypes.object),
  objectOf: (...params) => overrideProptype(PropTypes.objectOf, ...params),
  oneOf: (...params) => overrideProptype(PropTypes.oneOf, ...params),
  oneOfType: (...params) => overrideProptype(PropTypes.oneOfType, ...params),
  shape: (...params) => overrideProptype(PropTypes.shape, ...params),
  string: overrideProptype(PropTypes.string),
  symbol: overrideProptype(PropTypes.symbol)
};
