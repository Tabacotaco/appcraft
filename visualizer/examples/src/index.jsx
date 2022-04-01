import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledProvider } from 'styled-components';

import Container from '@material-ui/core/Container';
import deepOrange from '@material-ui/core/colors/deepOrange';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { ThemeProvider, createTheme, withStyles } from '@material-ui/core/styles';

import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';

import Nav from './components/Nav';
import DesignerPage from './pages/designer';


const $theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: lightBlue[200],
      main: lightBlue[500],
      dark: lightBlue[800],
      contrastText: 'white'
    },
    secondary: {
      light: deepOrange[300],
      main: deepOrange[500],
      dark: deepOrange[700],
      contrastText: 'white'
    }
  }
});

const routes = [
  { title: 'Designer', icon: (<BuildOutlinedIcon />), path: '/designer', element: (<DesignerPage />) }
];

const GlobalStyles = withStyles((theme) => ({
  '@global': {
    body: {
      background: theme.palette.background.default,
      color: theme.palette.getContrastText(theme.palette.background.default),
      margin: 0,
      overflow: 'hidden !important'
    },
    '#app': {
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',

      '& > .content': {
        height: '100%',
        overflow: 'hidden auto !important'
      }
    }
  }
}))(() => null);

render((
  <ThemeProvider theme={$theme}>
    <StyledProvider theme={$theme}>
      <GlobalStyles />

      <HashRouter basename="/">
        <Container id="app" disableGutters maxWidth={false}>
          <Nav routes={routes} />

          <Container className="content" disableGutters maxWidth={false}>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} {...{ path, element }} />
              ))}
            </Routes>
          </Container>
        </Container>
      </HashRouter>
    </StyledProvider>
  </ThemeProvider>
), document.getElementById('app'));
