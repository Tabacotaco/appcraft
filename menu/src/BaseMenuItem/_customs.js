import { isValidElement, useMemo } from 'react';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


export function useNode(option, contentAlias = 'content') {
  return useMemo(() => (
    isValidElement(option) || typeof option === 'string'
      ? { [contentAlias]: option }
      : (option || {})
  ), [option, contentAlias]);
}

export function useSubCollapse(sub) {
  const { open, variant, onOpen, onClose } = sub;

  return [
    open,

    ...useMemo(() => {
      switch (variant) {
        case 'top':
          return open ? [KeyboardArrowDownIcon, onClose] : [KeyboardArrowUpIcon, onOpen];

        case 'left':
          return open ? [KeyboardArrowRightIcon, onClose] : [KeyboardArrowLeftIcon, onOpen];

        case 'right':
        case 'horizontal':
          return open ? [KeyboardArrowLeftIcon, onClose] : [KeyboardArrowRightIcon, onOpen];

        case 'bottom':
        case 'vertical':
          return open ? [KeyboardArrowUpIcon, onClose] : [KeyboardArrowDownIcon, onOpen];

        default:
          return [];
      }
    }, [open, variant, onOpen, onClose])
  ];
}
