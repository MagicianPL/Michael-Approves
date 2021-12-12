import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import Header from './components/Header';
import StyledMainWrapper from './components/StyledMainWrapper';
import RestaurantsGrid from './components/RestaurantsGrid';
import RestaurantsProvider from './contexts/RestaurantsContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Header />
      <RestaurantsProvider>
      <StyledMainWrapper>
      <RestaurantsGrid />
      </StyledMainWrapper>
      </RestaurantsProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
