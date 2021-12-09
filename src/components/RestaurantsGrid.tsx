import React from 'react';
import RestaurantItem from './RestaurantItem';
import styled from 'styled-components';

const StyledRestaurantsGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
    background: gray;
`;

const RestaurantsGrid = () => {
    return (
        <StyledRestaurantsGrid>
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
        </StyledRestaurantsGrid>
    )
};

export default RestaurantsGrid;