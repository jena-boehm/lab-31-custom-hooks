import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import DetailPage from '../../containers/DetailPage.jsx';
import Header from '../header/Header';

const App = () => {
  return (
    <>
      <Router>
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
      </Router>
    </>
  );
};

export default App;
