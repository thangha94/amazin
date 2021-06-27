import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
const App = () => {
  // BEM
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
