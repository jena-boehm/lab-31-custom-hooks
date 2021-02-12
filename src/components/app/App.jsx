import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import DetailPage from '../../containers/DetailPage.jsx';
import { ThemeProvider } from '../../state/themeContext';

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Switch>
            <Route
              path="/"
              exact
              component={HomePage} />
            <Route
              path="/breeds/:name"
              exact
              component={DetailPage} />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
