import React from 'react';
import './App.css';

import Header from './components/Header';
import StyledRestaurantsGrid from './components/StyledRestaurantsGrid';
import RestaurantItem from './components/RestaurantItem';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World!</h1>
      <StyledRestaurantsGrid>
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </StyledRestaurantsGrid>
    </div>
  );
}

export default App;
