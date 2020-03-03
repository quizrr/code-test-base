import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../ui/theme';
import GlobalStyle from '../components/GlobalStyle';

import App from './App';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Router>
      <Switch>
        <Route path="/app" component={App} />

        <Redirect from="/" to="/app" />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Root;
