import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import DetailPage from '../details/DetailPage.jsx';

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
            path="/breeds/:id"
            exact
            component={DetailPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
