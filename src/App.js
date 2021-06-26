import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout/Checkout';
const App = () => {
  // BEM
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
