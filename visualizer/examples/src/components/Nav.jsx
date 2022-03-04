import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}));

export default function Nav({ routes }) {
  const { pathname } = useLocation();
  const actived = useMemo(() => Math.max(0, routes.findIndex(({ path }) => path === pathname)), [routes, pathname]);
  const classes = useStyles();

  return (
    <Tabs
      classes={{ root: classes.root }}
      variant="scrollable"
      scrollButtons="auto"
      value={actived}
    >
      {routes.map(({ title, icon, path }) => (
        <Tab key={path} label={title} icon={icon} component={NavLink} to={path} />
      ))}
    </Tabs>
  );
}

Nav.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      path: PropTypes.string.isRequired
    })
  )
};

Nav.defaultProps = {
  routes: []
};
