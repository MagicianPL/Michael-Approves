import React from 'react';
import './App.css';

import Header from './components/Header';
import StyledMainWrapper from './components/StyledMainWrapper';
import RestaurantsGrid from './components/RestaurantsGrid';
import RestaurantsProvider from './contexts/RestaurantsContext';

function App() {
  return (
    <div className="App">
      <Header />
      <RestaurantsProvider>
      <StyledMainWrapper>
      <RestaurantsGrid />
      </StyledMainWrapper>
      </RestaurantsProvider>
    </div>
  );
}

export default App;
