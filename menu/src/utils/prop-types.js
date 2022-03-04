import PropTypes from 'prop-types';

export const BaseSubMenuOptions = PropTypes.shape({
  action: PropTypes.node,
  actionRef: PropTypes.any,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
});

export const IconOptions = PropTypes.exact({
  name: PropTypes.string,

  type: PropTypes.oneOfType([
    PropTypes.oneOf(['mui']),
    PropTypes.string
  ])
});

export const MenuItemHiddenOptions = PropTypes.exact({
  icon: PropTypes.bool,
  text: PropTypes.bool,
  action: PropTypes.bool
});

export const MenuItemTextOptions = PropTypes.oneOfType([
  PropTypes.node,

  PropTypes.exact({
    props: PropTypes.object,
    text: PropTypes.node
  })
]);

export const MenuItemOptions = {
  uid: PropTypes.string,
  icon: IconOptions,

  primary: PropTypes.oneOfType([
    PropTypes.string,

    PropTypes.objectOf(
      PropTypes.string.isRequired
    )
  ]),
  secondary: PropTypes.oneOfType([
    PropTypes.string,

    PropTypes.objectOf(
      PropTypes.string.isRequired
    )
  ])
};

export const MenuVariantOptions = PropTypes.oneOf([
  'horizontal',
  'vertical',

  'top',
  'bottom',
  'left',
  'right'
]);

export const NodeOptions = PropTypes.oneOfType([
  PropTypes.node,

  PropTypes.exact({
    props: PropTypes.object,
    content: PropTypes.node
  })
]);
