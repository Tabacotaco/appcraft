/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import _get from 'lodash/get';
import _isPlainObject from 'lodash/isPlainObject';
import _merge from 'lodash/merge';
import _omit from 'lodash/omit';
import _set from 'lodash/set';
import _toPath from 'lodash/toPath';


const makeElementMap = ({ dataMappingProps }) => {
  const replaceds = (dataMappingProps || []).reduce(
    (result, { mappingPropPath, keyField, sourceCode, childPairs }) => ({
      ...result,
      [mappingPropPath]: {
        keyField,
        sourceCode,
        childPairs: (childPairs || []).reduce(
          (childResult, pair) => ({
            ...childResult,
            [(_isPlainObject(pair) && pair.propPath) || pair || '']: pair?.field || null
          }),
          {}
        )
      }
    }),
    {}
  );

  return (OverridedElement) => {
    const MappedElement = ({ ElementMapProps, ...oringinalProps }) => {
      const { datasource } = ElementMapProps || {};
      const props = _omit(oringinalProps, Object.keys(replaceds));

      return (
        <OverridedElement
          {..._merge(
            {},
            props,
            Object.entries(replaceds).reduce(
              (overridedProps, [mappingPropPath, { keyField, sourceCode, childPairs }]) => {
                const children = _get(oringinalProps, mappingPropPath);
                const { data: list } = datasource?.find(({ code }) => code === sourceCode) || {};

                return !children
                  ? overridedProps
                  : _set(
                    overridedProps,
                    mappingPropPath,
                    (Array.isArray(children) ? children : [children]).reduce(
                      (__, { type: ChildElement, key: childKey, props: oringinalCildProps }) => (
                        (list || []).reduce(
                          (result, data) => {
                            const key = _get(data, _toPath(keyField)) || JSON.stringify(data);
                            const childProps = _omit(oringinalCildProps, Object.keys(childPairs));

                            return result.concat(
                              <ChildElement
                                key={`${childKey || 'root'}-${key}`}
                                {..._merge(
                                  {},
                                  childProps,
                                  Object.entries(childPairs).reduce(
                                    (childOverridedProps, [childPropPath, field]) => (
                                      _set(childOverridedProps, childPropPath, !field ? data : _get(data, field))
                                    ),
                                    {}
                                  )
                                )}
                              />
                            );
                          },
                          __
                        )
                      ),
                      []
                    )
                  );
              },
              {}
            )
          )}
        />
      );
    };

    MappedElement.displayName = 'MappingElement';
    MappedElement.Naked = OverridedElement;

    MappedElement.overrideds = Object.entries(replaceds).reduce(
      (result, [propPath, { childPairs }]) => (
        result.concat({
          propPath,
          overrideds: Object.keys(childPairs)
        })
      ),
      Object.keys(replaceds)
    );

    return MappedElement;
  };
};

makeElementMap.configTypes = {
  dataMappingProps: PropTypes.arrayOf(
    PropTypes.exact({
      sourceCode: PropTypes.string.isRequired,
      keyField: PropTypes.string,
      mappingPropPath: PropTypes.string.isRequired,

      childPairs: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string.isRequired,

          PropTypes.exact({
            propPath: PropTypes.string.isRequired,
            field: PropTypes.string
          })
        ])
      ).isRequired
    }).isRequired
  ).isRequired
};

makeElementMap.propTypes = {
  ElementMapProps: PropTypes.exact({
    datasource: PropTypes.arrayOf(
      PropTypes.exact({
        code: PropTypes.string.isRequired,
        data: PropTypes.array
      })
    )
  })
};

export default makeElementMap;
