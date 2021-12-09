import React, { useContext } from 'react';
import styled from 'styled-components';
import { RestaurantsContext } from '../contexts/RestaurantsContext';

const Wrapper = styled.div`
    width: 100%;
    max-width: 300px;
    aspect-ratio: 1 / 1;
    background: orange;
    border-radius: 50%;
`;

const RestaurantItem = () => {
    const value = useContext(RestaurantsContext);
    console.log(value);
    return (
        <Wrapper />
    )
};

export default RestaurantItem;