import React from 'react';
import './App.css';

import Header from './components/Header';
import StyledMainWrapper from './components/StyledMainWrapper';
import RestaurantsGrid from './components/RestaurantsGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <StyledMainWrapper>
      <h1>Hello World!</h1>
      <RestaurantsGrid />
      </StyledMainWrapper>
    </div>
  );
}

export default App;
