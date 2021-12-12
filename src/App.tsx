import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import Header from './components/Header';
import StyledMainWrapper from './components/StyledMainWrapper';
import RestaurantsGrid from './components/RestaurantsGrid';
import RestaurantsProvider from './contexts/RestaurantsContext';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Header />
      <RestaurantsProvider>
      <StyledMainWrapper>
    <Router>
    <Routes>
      <Route path="/" element={<RestaurantsGrid />} />
      <Route path="/:id" element={<RestaurantDetails />}/>
    </Routes>
    </Router>
      </StyledMainWrapper>
      </RestaurantsProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
