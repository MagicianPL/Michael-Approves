import React, { useContext } from 'react';
import RestaurantItem from './RestaurantItem';
import styled from 'styled-components';
import { RestaurantsContext } from '../contexts/RestaurantsContext';

const StyledRestaurantsGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
`;

const RestaurantsGrid = () => {

    const restaurants: any = useContext(RestaurantsContext);
    console.log(restaurants);
    return (
        <StyledRestaurantsGrid>
           {restaurants.map((obj: any) => {
               return (
                   <RestaurantItem data={obj} key={obj._id} />
               )
           })}
        </StyledRestaurantsGrid>
    )
};

export default RestaurantsGrid;