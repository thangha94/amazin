import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';

const App = () => {
  // BEM
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
};

export default App;
